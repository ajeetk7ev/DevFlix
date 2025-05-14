"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Input
} from "@/components/ui/input";
import {
    Label
} from "@/components/ui/label";

import { useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { deleteCourse, updateCourse } from "@/actions/courseAction";
import { toast } from "sonner";
import ErrorMessage from "@/components/Error-message";



type CourseCardProps = {
    course: {
        id: string;
        title: string;
        description?: string;
        thumbnailUrl: string;
        instructor: string;
        platform: string;
        accessType: string;
        duration: string;
        url: string;
    }
};

type CourseState = {
    errors: {
        title?: string[];
        instructor?: string[];
        url?: string[];
        platform?: string[];
        access?: string[];
        duration?: string[];
    }
    successMessage?: string[];
    globalError?: string[];
}

const initialState: CourseState = {
    errors: {},
    successMessage: [""],
    globalError: [""]
}

export function CourseCard({ course }: CourseCardProps) {
    const [formState, action, isPending] = useActionState(updateCourse, initialState)
    const [openDelete, setOpenDelete] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [deleteCourseLoading, setDeleteCourseLoading] = useState(false);

     

    const handleDelete = async () => {
        try {
            setDeleteCourseLoading(true);
            await deleteCourse(course.id);
            setDeleteCourseLoading(false);
            toast.success("Course deleted");
            setOpenDelete(false);
        } catch (error) {
            toast.error("Failed to delete course");
        }
    }

    return (
        <Card className="group transition-shadow duration-300 shadow-md hover:shadow-2xl hover:scale-[1.01] bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            <CardHeader className="relative h-44">
                <Image
                    src={course.thumbnailUrl}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-xl"
                />
            </CardHeader>

            <CardContent className="p-5 space-y-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    👨‍🏫 <strong>Instructor:</strong> {course.instructor}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    🌐 <strong>Platform:</strong> {course.platform}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    🔓 <strong>Access:</strong> {course.accessType}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    ⏱️ <strong>Duration:</strong> {course.duration}
                </p>

                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Link
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full">View</Button>
                    </Link>

                    {/* Update Dialog */}
                    <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                                Update
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                            <DialogHeader>
                                <DialogTitle>Update Course</DialogTitle>
                                <DialogDescription>
                                    Modify the course details below.
                                </DialogDescription>
                            </DialogHeader>

                            <form action={action} className="grid gap-4 py-4">
                                <Input type="hidden" name="courseId" defaultValue={course.id} />
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        
                                        name="title"
                                        defaultValue={course.title}
                                    />
                                     {
                                        formState.errors?.title && (
                                            <ErrorMessage message={formState.errors.title} />
                                        )
                                        
                                   }  
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="instructor">Instructor</Label>
                                    <Input
                                        id="instructor"
                                        name="instructor"
                                        defaultValue={course.instructor}
                                        
                                    />
                                    {
                                        formState.errors?.instructor && (
                                            <ErrorMessage message={formState.errors.instructor} />
                                        )
                                        
                                   }  
                                    
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="platform">Platform</Label>
                                    <Input
                                        id="platform"
                                        name="platform"
                                        defaultValue={course.platform}
                                        
                                    />
                                     {
                                        formState.errors?.platform && (
                                            <ErrorMessage message={formState.errors.platform} />
                                        )
                                        
                                   }  
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="accessType">Access Type</Label>
                                    <Input
                                        id="accessType"
                                        name="access"
                                        defaultValue={course.accessType}
                                       
                                    />
                                     {
                                        formState.errors?.access && (
                                            <ErrorMessage message={formState.errors.access} />
                                        )
                                        
                                   }  
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="duration">Duration</Label>
                                    <Input
                                        id="duration"
                                        name="duration"
                                        defaultValue={course.duration}
                                        
                                    />
                                     {
                                        formState.errors?.duration && (
                                            <ErrorMessage message={formState.errors.duration} />
                                        )
                                        
                                   }  
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="url">Course URL</Label>
                                    <Input
                                        id="url"
                                        name="url"
                                        defaultValue={course.url}
                                       
                                    />

{
                                        formState.errors?.url && (
                                            <ErrorMessage message={formState.errors.url} />
                                        )
                                        
                                   }  

                                </div>
                                  <div>

                                    <Button 
                                    type="submit"
                                    className="w-full mt-4" 
                                    disabled={isPending}
                                    >
                                        {isPending ? "Updating..." : "Update"}
                                    </Button>
                                  </div>

                            </form>


                        </DialogContent>
                    </Dialog>

                    {/* Delete Dialog */}
                    <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                        <DialogTrigger asChild>
                            <Button variant="destructive" className="w-full">
                                Delete
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure?</DialogTitle>
                                <DialogDescription>
                                    This will permanently delete the course:{" "}
                                    <strong>{course.title}</strong>.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setOpenDelete(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={handleDelete}
                                    disabled={deleteCourseLoading}
                                >
                                    {deleteCourseLoading ? "Deleting..." : "Delete"}
                                </Button>

                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </div>
            </CardContent>
        </Card>
    );
}
