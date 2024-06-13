"use server";
import { signIn, signOut } from "@/auth";
export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}
export async function doLogout(formData: FormData) {
  await signOut({ redirectTo: "/" });
}
