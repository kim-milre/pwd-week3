import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) alert('로그인 성공!');
      else alert(data.message || '로그인 실패');
    } catch (err) {
      console.error(err);
      alert('서버 오류');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/api/auth/google`;
  };

  const handleNaverLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/api/auth/naver`;
  };

  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        <hr style={{ margin: '1rem 0' }} />
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>또는 SNS로 로그인</p>
        <button 
          onClick={handleGoogleLogin} 
          style={{
            background: '#DB4437',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '5px',
            width: '100%',
            marginBottom: '0.5rem'
          }}
        >
          Google로 로그인
        </button>
        <button 
          onClick={handleNaverLogin} 
          style={{
            background: '#03C75A',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '5px',
            width: '100%'
          }}
        >
          Naver로 로그인
        </button>
      </div>
    </div>
  );
}