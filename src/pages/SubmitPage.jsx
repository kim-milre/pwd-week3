// src/pages/SubmitPage.jsx
import { useState } from 'react';

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    location: '',
    priceRange: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 이거 꼭 필요!
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/restaurants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('🍱 등록 성공:', data);
      alert('맛집 제보가 완료되었습니다!');
    } catch (err) {
      console.error('등록 실패:', err);
      alert('문제가 발생했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="이름" onChange={handleChange} />
      <input name="category" placeholder="카테고리" onChange={handleChange} />
      <input name="location" placeholder="위치" onChange={handleChange} />
      <input name="priceRange" placeholder="가격대" onChange={handleChange} />
      <textarea name="description" placeholder="설명" onChange={handleChange} />
      <button type="submit">제보하기</button>
    </form>
  );
}