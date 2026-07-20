import { InterirorResult } from "@/types/interior";

type Props = {
  input: string;
  result: InterirorResult;
};

export default function ResultCard({ result, input }: Props) {
  return (
    <div className="mt-6 border p-4">
      <h3 className="font-bold mb-2">추천 결과</h3>
      <p>{input} 스타일은 포근하고 따뜻한 느낌입니다.</p>

      <div className="mt-3 flex gap-2">
        {result.keywords.map((item) => (
          <span key={item} className="border px-2 py-1 text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
