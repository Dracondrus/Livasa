'use client';

import { useState } from 'react';

export default function UsersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('Пользователь добавлен');
      setName('');
      setEmail('');
      fetchUsers(); // Обновим список пользователей
    } else {
      setMessage(data.error || 'Ошибка');
    }
  };

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Добавить пользователя</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Сохранить</button>
      </form>

      {message && <p>{message}</p>}

      <hr />
      <button onClick={fetchUsers}>Показать всех пользователей</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
