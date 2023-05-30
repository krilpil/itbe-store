import { NextRequest, NextResponse } from "next/server";
import prisma from "../prisma";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId") || "";

  const products = await prisma.products.findMany({
    select: {
      productId: true,
      categoryName: true,
      title: true,
      color: true,
      images: true,
      price: true,
    },
    where: {
      categoryName: {
        categoryId: +categoryId,
      },
    },
  });
  return NextResponse.json(products);
}
