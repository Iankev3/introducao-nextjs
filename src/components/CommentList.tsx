
import Comment from './Comment';

interface CommentType {
  name: string;
  message: string;
  date: string;
}

export default function CommentList({ comments }: { comments: CommentType[] }) {
  return (
    <div>
      <h2>Comentários</h2>
      {comments.length === 0 ? (
        <p>Nenhum comentário ainda.</p>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            message={comment.message}
            date={comment.date}
          />
        ))
      )}
    </div>
  );
}
