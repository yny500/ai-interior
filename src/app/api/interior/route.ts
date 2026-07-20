export async function POST(req: Request) {
  const { input } = await req.json();

  // 테스트용
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json({
    keywords: ["우드톤", "따뜻한 조명", "미니멀", "화이트"],
  });
}
