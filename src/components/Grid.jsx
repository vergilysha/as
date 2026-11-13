import Card from './Card';

export default function Grid({ cards }) {
  const items = cards.map((item) => (
    <Card key={item.id} item={item} isOpened={false} isFinished={false} />
  ));

  return <ul className="cards">{items}</ul>;
}
