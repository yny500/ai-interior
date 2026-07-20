import type { InterirorResult } from "@/types/interior";

export default async function interiorApi(input: string) {
  const res = await fetch("/api/interior", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    throw new Error("추천 생성에 실패했습니다.");
  }

  const data: InterirorResult = await res.json();
  const nomalizedInput = input.trim();
  const finalData = data.keywords.includes(nomalizedInput) ? data : null;

  return finalData;
}
