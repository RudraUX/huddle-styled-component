import { StyledCard } from './styles/Card.styled';

interface Item {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
}

function Card({ item: { id, title, body, image } }: Item) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}

export default Card;
