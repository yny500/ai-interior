'use client'

import { useState } from 'react'
import ResultCard from './ResultCard'
import type { InterirorApiResponse, InterirorResult } from "@/types/interior"


export default function InputForm() {
  const [input, setInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<InterirorResult | null>(null) 
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() 

    if((!input.trim())) {
      setError('원하는 인테리어 스타일을 입력해주세요') 
      return
    }
    setLoading(true)
    setError(null);

    try {
    const res = await fetch('/api/interior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })

    if (!res.ok) {
      throw new Error('추천 생성에 실패했습니다.');
    }

    const data:InterirorApiResponse = await res.json()
    
    setResult({
      text: data.result,
      keywords: data.keywords,
    })
    } catch (error) {
      setError(
        error instanceof Error ? error.message : '추천 생성 중 오류가 발생했습니다.'
      )
    } finally {
      setLoading(false)
    }
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='우드톤, 미니멀 등 입력'
        />
        <button type="submit" disabled={loading}>
          {loading ? '추천 생성 중...' : '추천받기'}
        </button>
      </form>

      {error && <p>{error}</p>}

      {!loading && result && <ResultCard result={result} />}
    </div>
  )
}