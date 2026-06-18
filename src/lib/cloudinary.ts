import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

export type UploadResult = {
  url: string;
  publicId: string;
  width: number;
  height: number;
};

export async function uploadImage(
  file: string,
  folder = "buytime/products",
): Promise<UploadResult> {
  const result = await cloudinary.uploader.upload(file, {
    folder,
    resource_type: "image",
    transformation: [{ quality: "auto", fetch_format: "auto" }],
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
  };
}

export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}

export function getOptimizedImageUrl(
  publicId: string,
  options: { width?: number; height?: number; crop?: string } = {},
): string {
  const { width = 800, height, crop = "fill" } = options;

  return cloudinary.url(publicId, {
    width,
    height,
    crop,
    quality: "auto",
    fetch_format: "auto",
  });
}
