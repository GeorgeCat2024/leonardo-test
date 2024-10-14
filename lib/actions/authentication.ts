'use server'

import { signIn, signOut } from "@/lib/auth";

export async function logIn(formData: FormData) {
  try {
    await signIn(
      'credentials',
      {
        userName: formData.get('userName'),
        jobTitle: formData.get('jobTitle')
      }
    );
  } catch (error) {
    console.error(error);
    throw error
  }
}

export async function logOut() {
  try {
    await signOut();
  } catch (error) {
    console.error(error);
    throw error
  }
}
