export default function Card({ item, isOpened, isFinished }) {
  const { url } = item;

  const className = `card ${isOpened ? 'opened' : ''} ${isFinished ? 'finished' : ''}`;

  return (
    <li className={className}>
      <img className="card-face" src={url} alt="" />
    </li>
  );
}
