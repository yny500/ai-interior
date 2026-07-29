import { useState } from "react";
import type { InterirorResult } from "@/types/interior";
import interiorApi from "@/lib/interior";

export function useInterior() {
  const [result, setResult] = useState<InterirorResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendation = async (input: string) => {
    if (!input.trim()) {
      setError("원하는 인테리어 스타일을 입력해주세요");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await interiorApi(input);

      if (data.keywords) {
        setResult(data);
      } else {
        setError("추천 결과가 없습니다. 다른 스타일을 입력해주세요.");
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "추천 생성 중 오류가 발생했습니다.",
      );
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, getRecommendation };
}
