import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/submissions`)
      .then((res) => res.json())
      .then((data) => setSubmissions(data.data))
      .catch(() => toast.error('제보 목록을 불러오는데 실패했습니다'))
      .finally(() => setLoading(false));
  }, []);

  const approve = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/submissions/${id}/approve`, {
        method: 'POST',
      });
      if (!res.ok) throw new Error();
      toast.success('승인 완료');
      setSubmissions((prev) => prev.filter((item) => item.id !== id));
    } catch {
      toast.error('승인에 실패했습니다');
    }
  };

  const reject = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/submissions/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error();
      toast.success('삭제 완료');
      setSubmissions((prev) => prev.filter((item) => item.id !== id));
    } catch {
      toast.error('삭제에 실패했습니다');
    }
  };

  if (loading) return <p className="text-center mt-10">불러오는 중...</p>;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">맛집 제보 승인 관리</h1>
      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">대기 중인 제보가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => (
            <div key={s.id} className="border rounded-xl p-4 shadow-sm bg-white">
              <h2 className="text-lg font-semibold">{s.restaurantName}</h2>
              <p className="text-sm text-gray-600">{s.category} | {s.location}</p>
              {s.recommendedMenu?.length > 0 && (
                <p className="text-sm mt-1">추천 메뉴: {s.recommendedMenu.join(', ')}</p>
              )}
              {s.review && (
                <p className="text-sm mt-1 italic">"{s.review}"</p>
              )}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => approve(s.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  승인
                </button>
                <button
                  onClick={() => reject(s.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPage;