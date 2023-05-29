import { NextRequest, NextResponse } from "next/server";
import prisma from "../../prisma";

export async function GET(request: NextRequest) {
  const countParams = request.nextUrl.searchParams.get("category");

  const products = await prisma.products.findMany();

  if (countParams) {
    return NextResponse.json(products);
  }

  return NextResponse.json({
    count: null,
  });
}
