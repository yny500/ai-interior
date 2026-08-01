import { interiorThemes } from "@/data/interiorThemes";

export async function POST(req: Request) {
  const { input } = await req.json();

  // 테스트용
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const normailzedInput = input.trim();
  const matchedTheme = interiorThemes.find((theme) =>
    theme.keywords.some(
      (keyword) =>
        keyword.includes(normailzedInput) || normailzedInput.includes(keyword),
    ),
  );

  return Response.json({
    keywords: matchedTheme?.recommendKeywords ?? null,
    text: matchedTheme?.description ?? null,
  });
}
