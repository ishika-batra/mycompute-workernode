import ProgressBar from 'react-bootstrap/ProgressBar';

const CreditScore = () => {
  return (
    <div className="credit-score">
      <article>
        <h3>Credit Score</h3>
        <p>
          Your credit score is calculated based on something.... Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nulla ex placeat, aliquam
          minima temporibus architecto.
        </p>

        <ProgressBar
          className="progress"
          animated={'true'}
          variant="info"
          min={0}
          max={100000}
          now={75000}
          label={75000}
        />
      </article>
    </div>
  );
};
export default CreditScore;
