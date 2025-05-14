"use server";
import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/utils/uploadImageToCloudinary";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


const courseSchema = z.object({
  title: z.string().min(5).max(50),
  instructor: z.string().min(5).max(50),
  url: z.string().url(),
  platform: z.string().min(1).max(50),
  access: z.enum(["Free", "Paid"]),
  duration: z.string().min(1).max(20),
})

type CourseFormState = {
  errors?: {
    title?: string[];
    instructor?: string[];
    url?: string[];
    platform?: string[];
    access?: string[];
    duration?: string[];
    thumbnail?: string[];
  }
  successMessage?: string[];
  globalError?: string[];
}


export const createCourse = async (prevstate: CourseFormState, formData: FormData): Promise<CourseFormState> => {

  const { userId } = await auth();
  if (!userId) {
    return {
      errors: {},
      successMessage: [""],
      globalError: ["User not authenticated"]
    }
  }

  //Course data
  const rawData = {
    title: formData.get('title'),
    instructor: formData.get('instructor'),
    access: formData.get('access'),
    url: formData.get('url'),
    platform: formData.get('platform'),
    duration: formData.get('duration'),
  };

  console.log("Course data is ", rawData);

  // ✅ Validate with zod.safeParse
  const result = courseSchema.safeParse(rawData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }



  const thumbnail = formData.get('thumbnail') as File;

  if (!thumbnail || thumbnail.size === 0) {
    return {
      errors: { thumbnail: ['Thumbnail is required.'] },
    };
  }

  //Store the thumbnail in cloudinary
  const thumbnailUrl = await uploadToCloudinary(thumbnail);
  console.log("Cloudinary response data is ", thumbnailUrl);

  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    })

    if (!user) {
      return {
        globalError: ["User not found"]
      }
    }

    const { title, instructor, access, url, platform, duration } = result.data;

    await prisma.course.create({
      data: {
        userId: user.id,
        title,
        instructor,
        accessType: access,
        url,
        thumbnailUrl,
        platform,
        duration,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        globalError: [error.message]
      }
    } else {
      return {

        globalError: ['Failed to create a post.']

      }
    }
  }


  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
}

export const deleteCourse = async (courseId: string) => {

  try {
    await prisma.course.delete({
      where: {
        id: courseId
      }
    })

  } catch (error) {
    console.log("Error deleting course", error);
    return;
  }

  revalidatePath("/dashboard/courses");
}

export const updateCourse = async (prevState: CourseFormState, formData: FormData):Promise<CourseFormState>=>{
          const { userId } = await auth();
          if (!userId) {
            return {
              errors: {},
              successMessage: [""],
              globalError: ["User not authenticated"]
            }
          }

          //Course data
          const courseId = formData.get('courseId') as string;
          const rawData = {
            title: formData.get('title'),
            instructor: formData.get('instructor'),
            access: formData.get('access'),
            url: formData.get('url'),
            platform: formData.get('platform'),
            duration: formData.get('duration'),
          };

          const res = courseSchema.safeParse(rawData);
          if (!res.success) {
            return {
              errors: res.error.flatten().fieldErrors,
            };
          }

          console.log("Course data is ", res.data);

          try{
            const user = await prisma.user.findUnique({
              where: {
                clerkId: userId
              }
            })

            if (!user) {
              return {
                globalError: ["User not found"]
              }
            }

            const { title, instructor, access, url, platform, duration } = res.data;

            await prisma.course.update({
              where: {
                id: courseId
              },
              data: {
                userId: user.id,
                title,
                instructor,
                accessType: access,
                url,
                platform,
                duration,
                updatedAt: new Date()
              }
            })
          } catch (error: unknown) { 
            if (error instanceof Error) {
              return {
                globalError: [error.message]
              }
            } else {
              return {
                globalError: ['Failed to create a post.']
              }
            }
          }

          revalidatePath("/dashboard/courses");
          redirect("/dashboard/courses");
}