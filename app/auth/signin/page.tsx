"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { githubSignin, gooogleSignin } from "@/app/actions/authActions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function SignInPage() {
  const session = useSession();
  const { status } = session;
  if (status === 'authenticated') {
    redirect("/")
  }
  return (
    <div className="w-screen h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white dark:bg-slate-800">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome back to <span className="text-indigo-600">DevFlix</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Please sign in to continue
          </p>
        </CardHeader>

        <Separator className="my-2" />

        <CardContent className="flex flex-col gap-4 px-6 pb-6 w-full">
          <form action={gooogleSignin} className="w-full">
            <Button
              className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </Button>
          </form>

          <form action={githubSignin} className="w-full">
            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <FaGithub size={20} />
              <span>Sign in with GitHub</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
