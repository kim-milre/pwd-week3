import { useState } from 'react';
import { registerUser } from '../services/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await registerUser({ email, password, name });
    alert(res.message || '회원가입 완료!');
  }

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <input placeholder="이름" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}