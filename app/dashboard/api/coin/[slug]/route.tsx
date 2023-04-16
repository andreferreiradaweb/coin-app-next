import { NextResponse } from "next/server";
import { getCoinVariation } from "@utils/getCoinVariation";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const res = await getCoinVariation({ name: params.slug });

  return NextResponse.json(res);
}
