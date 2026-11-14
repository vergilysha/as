export default function Card({ item, isOpened, isFinished, onCardClick }) {
  const { id, url } = item;

  const className = `card ${isOpened ? 'opened' : ''} ${isFinished ? 'finished' : ''}`;

  const handleClick = () => {
    onCardClick(id);
  };
  return (
    <li className={className} onClick={handleClick}>
      <img className="card-face" src={url} alt="" />
    </li>
  );
}
