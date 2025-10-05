// src/pages/SubmissionsPage.jsx
import { useEffect, useState } from 'react'

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    fetch('https://pwd-week4-kim-milre.onrender.com/submissions')
      .then(res => res.json())
      .then(setSubmissions)
      .catch(console.error)
  }, [])

  return (
    <div>
      <h2>📝 사용자 제출 목록</h2>
      <ul>
        {submissions.map(s => (
          <li key={s.id}>
            {s.user || '익명'}: {s.message || '내용 없음'}
          </li>
        ))}
      </ul>
    </div>
  )
}