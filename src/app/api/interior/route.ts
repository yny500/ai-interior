export async function POST(req: Request) {
  const { input } = await req.json();

  // 테스트용
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const interiorThemes = [
    {
      keywords: ["우드", "우드톤", "따뜻함", "내추럴", "자연스러움"],
      result: ["우드톤", "따뜻한 조명", "라탄"],
      description:
        "따뜻한 우드톤과 자연스러운 소재를 활용한 아늑한 공간입니다.",
    },
    {
      keywords: ["미니멀", "화이트", "깔끔함", "심플", "정돈"],
      result: ["미니멀", "화이트", "무채색"],
      description: "심플하고 깔끔한 디자인으로 공간을 정돈할 수 있습니다.",
    },
    {
      keywords: ["모던", "시크", "세련됨", "도시적", "고급스러움"],
      result: ["블랙", "메탈", "간접 조명"],
      description: "모던하고 시크한 디자인으로 공간을 꾸밀 수 있습니다.",
    },
    {
      keywords: ["빈티지", "레트로", "앤틱", "클래식"],
      result: ["빈티지 가구", "브라운", "패턴"],
      description: "빈티지하고 레트로한 스타일로 공간을 꾸밀 수 있습니다.",
    },
  ];

  const normailzedInput = input.trim();
  const matchedTheme = interiorThemes.find((theme) =>
    theme.keywords.some(
      (keyword) =>
        keyword.includes(normailzedInput) || normailzedInput.includes(keyword),
    ),
  );

  return Response.json({
    keywords: matchedTheme?.result ?? null,
    text: matchedTheme?.description ?? null,
  });
}
