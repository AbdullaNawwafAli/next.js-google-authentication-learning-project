"use server";
import { redirect } from "next/navigation";
import  { LoginSchema} from "@/lib/validation/LoginSchema"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {

  const emailInput = String(formData.get("email") || "").trim();
  const passwordInput = String(formData.get("password") || "").trim();

  const result = LoginSchema.safeParse({ email: emailInput, password: passwordInput });
  
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  
}

export async function logout() {
  
}
