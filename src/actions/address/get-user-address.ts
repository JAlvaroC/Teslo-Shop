import prisma from "@/lib/prisma";
import React from "react";

export const getUserAddress = async (userId: string) => {
  try {
    const address = await prisma.userAddress.findUnique({
      where: { userId },
    });
    // return address;
    if (!address) return null;
    const { countryId, address2, ...rest } = address;
    return {
      ...rest,
      country: countryId,
      address2: address2 ? address2 : "",
      city: "Hola",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
