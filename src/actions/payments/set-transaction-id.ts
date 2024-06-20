"use server";
import prisma from "@/lib/prisma";

export const setTransactionId = async (
  orderId: string,
  transcationId: string
) => {
  try {
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        transactionId: transcationId,
      },
    });
    if (!order) {
      console.log({ order });
      return {
        ok: false,
        message: `No se encontro una orden con el ${orderId}`,
      };
    }
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ol: false,
      message: "No se pudo actualizxar el id de la transaccion",
    };
  }
};
