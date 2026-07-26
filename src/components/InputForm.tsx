"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";
import type { InterirorResult } from "@/types/interior";
import interiorApi from "@/lib/interior";

export default function InputForm() {
  const [input, setInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<InterirorResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setSubmittedInput(input);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="우드톤, 미니멀 등 입력"
        />
        <button type="submit" disabled={loading}>
          {loading ? "추천 생성 중..." : "추천받기"}
        </button>
      </form>
      {error && <p>{error}</p>}
      {!loading && result && <ResultCard result={result} />}
    </div>
  );
}
