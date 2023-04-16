import { NextResponse } from "next/server";
import { getCoins } from "@utils/getCoins";

export async function GET() {
  const res = await getCoins();

  return NextResponse.json(res);
}
