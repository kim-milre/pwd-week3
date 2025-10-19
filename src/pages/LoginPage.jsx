import { useState } from 'react';
import { loginUser } from '../services/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await loginUser({ email, password });
    alert(res.message || '로그인 완료!');
  }

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}