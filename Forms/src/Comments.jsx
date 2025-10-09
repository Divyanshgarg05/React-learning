import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comments() {
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "Great job!",
      rating: 4,
    },
  ]);

  const addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating={comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
