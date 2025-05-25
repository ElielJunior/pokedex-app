import styled from 'styled-components';

interface Props {
  name: string;
  onClick: () => void;
}

export const PokemonCard = ({ name, onClick }: Props) => (
  <Card onClick={onClick}>
    <h3>{name}</h3>
  </Card>
);

const Card = styled.div`
  background: #eee;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;