"use server";
import { signIn } from "@/auth.config";
import { sleep } from "@/utils";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // sleep(3);
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return "Success";
  } catch (error) {
    return "CredentialsSignin";
  }
}

export const login = async (name: string, password: string) => {
  try {
    await signIn("credentials", { name, password });
  } catch (error) {
    return {
      ok: false,
      message: "Error during login session",
    };
  }
};
