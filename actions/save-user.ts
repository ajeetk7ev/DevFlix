"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function createUser() {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (existingUser) return;

  // Create a new user
  await prisma.user.create({
    data: {
      clerkId: user.id,
      name: user.firstName + " " + user.lastName,
      email: user.emailAddresses[0]?.emailAddress,
    },
  });
}
