import { NextResponse } from "next/server";

import { createApiHandler } from "@/lib/api-handler";
import { uploadImage } from "@/lib/cloudinary";

export const POST = createApiHandler(
  async (request) => {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) ?? "buytime/products";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await uploadImage(base64, folder);

    return NextResponse.json({
      success: true,
      data: result,
    });
  },
  { requireAuth: true, requireAdmin: true },
);
