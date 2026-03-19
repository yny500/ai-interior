'use client'

import { useState } from 'react'
import ResultCard from './ResultCard'

export default function InputForm() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    
    setTimeout(() => {
      setResult(`${input} 스타일은 미니멀하고 따뜻한 느낌입니다.`)
      setLoading(false)
    }, 1000)
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='원하는 인테리어 스타일 입력'
        />
        <button type="submit">추천받기</button>
      </form>

      {loading && <p>추천 생성 중 ...</p>}

      {!loading && result && <ResultCard result={result} />}
    </div>
  )
}