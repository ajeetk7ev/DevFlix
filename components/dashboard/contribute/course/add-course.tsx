"use client"
import { createCourse } from "@/actions/courseAction";
import ErrorMessage from "@/components/Error-message";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addCourseField } from "@/data/course-field";
import { useActionState, useState } from "react";
type CourseState = {
    errors: {
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

const initialState: CourseState = {
    errors: {},
    successMessage: [""],
    globalError: [""]
}

export function AddCourse() {
    const [formState, action, isPending] =
        useActionState(createCourse, initialState)

    return (
        <div>
            <Card>
                <CardHeader>
                    <h2 className="text-xl font-bold mb-4 text-center">Welcome to Contribute Course</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                        Share your knowledge by contributing a course to our platform.
                    </p>
                </CardHeader>

                <CardContent>
                    <form action={action} className="space-y-4">

                        {/* Couse Title */}
                        <div>
                            <Label htmlFor="title">Title</Label>

                            <Input
                                type="text" name="title" placeholder="Course Title"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.title && (
                                <ErrorMessage message={formState.errors.title} />
                            )}
                        </div>

                         {/* Couse Instructor */}
                         <div>
                            <Label htmlFor="instructor">Instructor</Label>

                            <Input
                                type="text" name="instructor" placeholder="Course Instructor"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.instructor && (
                                <ErrorMessage message={formState.errors.instructor} />
                            )}
                        </div>



                         {/* Couse Access Type */}
                         <div>
                            <Label htmlFor="access">Access Type</Label>

                            <Input
                                type="text" name="access" placeholder="Free | Paid"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.access && (
                                <ErrorMessage message={formState.errors.access} />
                            )}
                        </div>



                         {/* Couse Platform */}
                         <div>
                            <Label htmlFor="platform">Platform</Label>

                            <Input
                                type="text" name="platform" placeholder="e.g. Codehelp, TUF+, Youtube"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.platform && (
                                <ErrorMessage message={formState.errors.platform} />
                            )}
                        </div>




                         {/* Couse Duration */}
                         <div>
                            <Label htmlFor="duration">Duration</Label>

                            <Input
                                type="text" name="duration" placeholder="e.g. 6h 30m"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.duration && (
                                <ErrorMessage message={formState.errors.duration} />
                            )}
                        </div>

                        {/* Couse Url */}
                        <div>
                            <Label htmlFor="url">Course Url</Label>

                            <Input
                                type="text" name="url" placeholder="e.g. https://www.codehelp.in/course-name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.url && (
                                <ErrorMessage message={formState.errors.url} />
                            )}
                        </div>



                         {/* Couse Thumbnail */}
                         <div>
                            <Label htmlFor="thumbnail">Thumbnail</Label>

                            <Input
                                type="file"  name="thumbnail" placeholder="Add Thumbnail File"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-black dark:text-white"
                            />

                            {/* ✅ Show error for this field */}
                          {
                            formState.errors?.thumbnail && (
                                <ErrorMessage message={formState.errors.thumbnail} />
                            )}
                        </div>

                        <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 transition duration-300 ease-in-out">
                            {isPending ? "Creating..." : "Create Course"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}