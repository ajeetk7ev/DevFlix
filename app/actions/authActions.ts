"use server"

import { signIn } from "@/auth"



export async function githubSignin(){
     await signIn("github",{redirectTo:"/"})
}

export async function gooogleSignin(){
     await signIn("google",{redirectTo:"/"})
}