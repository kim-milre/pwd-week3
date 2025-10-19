import { useEffect, useState } from 'react';
import { getProfile, logoutUser } from '../services/auth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then(setUser);
  }, []);

  async function handleLogout() {
    await logoutUser();
    alert('로그아웃되었습니다.');
    setUser(null);
  }

  if (!user) return <p>로그인이 필요합니다.</p>;

  return (
    <div>
      <h2>내 프로필</h2>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}