'use client'

import { useState } from 'react';

interface CommentFormProps {
  onAddComment: (comment: { name: string; message: string; date: string }) => void;
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === '' || message.trim() === '') return;

    const newComment = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    onAddComment(newComment);
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, width: '100%', marginBottom: 10 }}
        />
      </div>
      <div>
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ padding: 8, width: '100%', marginBottom: 10 }}
        />
      </div>
      <button type="submit" style={{ padding: 10 }}>Enviar</button>
    </form>
  );
}
