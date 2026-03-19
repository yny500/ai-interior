type Props = {
  result: string
}   

export default function ResultCard({ result }: Props) {
  return (
    <div className="mt-6 border p-4">
      <h3 className="font-bold mb-2">추천 결과</h3>
      <p>{result}</p>
    </div>
  )
}