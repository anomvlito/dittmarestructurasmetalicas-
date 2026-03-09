import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
}

// Revalida cada hora — Instagram media URLs expiran
export const revalidate = 3600;

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return NextResponse.json([]);
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${userId}/media` +
        `?fields=id,caption,media_url,permalink,media_type,timestamp` +
        `&access_token=${token}` +
        `&limit=12`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return NextResponse.json([]);
    }

    const data = await res.json();

    // Filtrar videos (no tienen media_url directa), solo imágenes y carruseles
    const posts: InstagramPost[] = (data.data ?? []).filter(
      (p: InstagramPost) => p.media_type !== "VIDEO"
    );

    return NextResponse.json(posts);
  } catch (err) {
    console.error("Instagram fetch failed:", err);
    return NextResponse.json([]);
  }
}
