"use server";
import prisma from "@/lib/prisma";
import { sleep } from "@/utils";
import React from "react";

export const getStockBySlug = async (slug: string): Promise<number> => {
  // await sleep(3);
  try {
    const stock = await prisma.product.findFirst({
      where: { slug },
      select: { inStock: true },
    });
    return stock?.inStock ?? 0;
  } catch (error) {
    // console.log(error);
    return 0;
  }
};
