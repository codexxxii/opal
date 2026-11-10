"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { createUserSchema, users } from "./db/schema";
import { auth } from "@clerk/nextjs/server";

async function authCheck() {
  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  return userId;
}

export async function authCallback() {
  const userId = await authCheck();

  try {
    const validSchema = createUserSchema.parse({
      clerk_id: userId,
    });

    const [newUser] = await db
      .insert(users)
      .values(validSchema)
      .returning({ id: users.id });

    if (newUser.id) return redirect("/");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
