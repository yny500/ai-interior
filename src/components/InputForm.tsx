'use client'

import { useState } from 'react'

export default function InputForm() {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    console.log(input)
  }

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <textarea
        className="border p-2"
        placeholder="원하는 인테리어 스타일을 입력하세요 (예: 원룸, 따뜻한 느낌, 우드톤)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="bg-black text-white p-2"
        onClick={handleSubmit}
      >
        추천 받기
      </button>
    </div>
  )
}