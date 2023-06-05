import { NextRequest, NextResponse } from "next/server";
import prisma from "../prisma";

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get("searchQuery") || "";
  const gender = request.nextUrl.searchParams.get("gender") || "";
  const categoryId = request.nextUrl.searchParams.get("categoryId") || "";

  if (!categoryId && !searchQuery)
    return NextResponse.json({
      status: 400,
      statusText: "You must specify CategoryID or SearchQuery",
    });

  let dynamicParams = {};

  if (categoryId) {
    dynamicParams = { ...dynamicParams, categoryId: +categoryId };
  }

  if (gender) {
    dynamicParams = { ...dynamicParams, gender };
  }

  if (searchQuery) {
    dynamicParams = {
      ...dynamicParams,
      title: {
        search: searchQuery.toLowerCase(),
      },
    };
  }

  const products = await prisma.products.findMany({
    select: {
      productId: true,
      gender: true,
      categoryName: true,
      title: true,
      color: true,
      images: true,
      price: true,
    },
    where: { ...dynamicParams },
  });

  return NextResponse.json(
    products.map(value => ({
      productId: value.productId,
      gender: value.gender,
      price: value.price,
      color: value.color,
      title: value.title,
      images: value.images,
    }))
  );
}
