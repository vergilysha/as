import Card from './Card';

export default function Grid({ cards }) {
  const openedItems = ['3'];
  const finishedItems = ['5'];
  const handleCardClick = (id) => {
    console.log(`Card with id ${id} clicked`);
  };

  const items = cards.map((item) => (
    <Card
      key={item.id}
      item={item}
      isOpened={openedItems.includes(item.id)}
      isFinished={finishedItems.includes(item.id)}
      onCardClick={handleCardClick}
    />
  ));

  return <ul className="cards">{items}</ul>;
}
