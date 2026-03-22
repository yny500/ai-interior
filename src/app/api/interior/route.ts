export async function POST(req: Request) {
	const {input} = await req.json()

  // 테스트용
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return Response.json({
    result: `${input} 스타일은 미니멀하고 따뜻한 느낌입니다.`,
    keywords: ['우드톤', '따뜻한 조명', '미니멀', '화이트'],
  })
}