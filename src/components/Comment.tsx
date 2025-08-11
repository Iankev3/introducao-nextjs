interface CommentProps {
  name: string;
  message: string;
  date: string;
}

export default function Comment({ name, message, date }: CommentProps) {
  return (
    <div>
      <p><strong>{name}</strong> comentou:</p>
      <p>{message}</p>
      <small>{date}</small>
    </div>
  );
}
