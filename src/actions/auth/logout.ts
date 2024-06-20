"use server";

import { signOut } from "@/auth.config";

// import { signOut } from "next-auth/react";

export const logout = async () => {
  await signOut();
};
