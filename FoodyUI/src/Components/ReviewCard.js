import '../Styles/ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { user, reviewText, createdAt } = review;
    const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-username" style={{color:"#e86b00"}}>{user?.userName}</span>
        <span className="review-date">{formattedDate}</span>
      </div>
      <p className="review-text">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
