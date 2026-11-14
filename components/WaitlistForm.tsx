'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmed)) {
      setStatus('error');
      setMessage('Vui lòng nhập một địa chỉ email hợp lệ.');
      return;
    }

    setStatus('success');
    setMessage('Đăng ký thành công! Bạn sẽ nhận được email hướng dẫn và bộ tài liệu Altium đầu tiên.');
    setEmail('');
  };

  return (
    <div>
      <form className="waitlist-form-block" onSubmit={handleSubmit}>
        <input
          type="email"
          className="waitlist-text-input"
          placeholder="Nhập địa chỉ email của bạn..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn-primary-lead"
          disabled={status === 'success'}
        >
          {status === 'success' ? 'Đã lưu đăng ký' : 'Đăng ký giữ chỗ'}
        </button>
      </form>

      {status !== 'idle' && (
        <p
          className="form-feedback-msg"
          style={{
            display: 'block',
            color: status === 'error' ? '#c94a29' : 'var(--accent)',
            marginBottom: 'var(--space-200)',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
