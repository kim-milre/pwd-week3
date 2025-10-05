// src/pages/AdminPage.jsx
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://pwd-week4-kim-milre.onrender.com/restaurants')
      .then(res => res.json())
      .then(setRestaurants)
      .catch(console.error)
  }, [])

  return (
    <div>
      <h2>🍽️ 등록된 음식점 목록</h2>
      <ul>
        {restaurants.map(r => (
          <li key={r.id}>
            {r.name} - {r.category}
          </li>
        ))}
      </ul>
    </div>
  )
}