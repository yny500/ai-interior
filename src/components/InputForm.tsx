'use client'

import { useState } from 'react'
import ResultCard from './ResultCard'

export default function InputForm() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{
    text: string
    keywords: string[]
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/interior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })

    const data = await res.json()
    
    setResult({
      text: data.result,
      keywords: data.keywords,
    })
    setLoading(false)
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='우드톤, 미니멀 등 입력'
        />
        <button type="submit">추천받기</button>
      </form>

      {loading && <p>추천 생성 중 ...</p>}

      {!loading && result && <ResultCard result={result} />}
    </div>
  )
}