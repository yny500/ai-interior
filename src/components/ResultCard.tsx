type Props = {
  result: {
    text: string
    keywords: string[]
  }
}   

export default function ResultCard({ result }: Props) {
  return (
    <div className="mt-6 border p-4">
      <h3 className="font-bold mb-2">추천 결과</h3>
      <p>{result.text}</p>

      <div className="mt-3 flex gap-2">
        {result.keywords.map((item, index) => (
          <span 
            key={index} 
            className="border px-2 py-1 text-sm">
              {item}
            </span>
        ))}
      </div>
    </div>
  )
}