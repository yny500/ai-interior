"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";
import { useInterior } from "@/hooks/useInterior";

export default function InputForm() {
  const [input, setInput] = useState("");
  const { result, loading, error, getRecommendation } = useInterior();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getRecommendation(input);
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
