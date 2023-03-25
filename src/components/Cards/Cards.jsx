import Card from "../Card/Card";
import styled from "styled-components";
import { useState } from "react";
import "./Cards.css";

const Cartas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 25px;
  padding-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Buttons = styled.button`
  height: 45px;
  width: 40px;
  border-radius: 30px;
  border: none;
  background-color: transparent;
  color: #03d361;
  font-size: 35px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #06ec6d;
    font-size: 40px;
  }
`;

export default function Cards(props) {
  const [current, setCurrent] = useState(1);
  const { characters } = props;
  let paginated = Math.ceil(characters.length / 4);
  const personajes = characters.slice((current - 1) * 4, current * 4);

  const nextHandler = () => {
    if (current === paginated) return;
    setCurrent(+current + 1);
  };

  const prevHandler = () => {
    if (current === 1) return;
    setCurrent(+current - 1);
  };

  return (
    <Container>
      {characters.length > 4 && (
        <Buttons id="buttonIzquierda" onClick={prevHandler}>
          ◀
        </Buttons>
      )}
      <Cartas className="cartas">
        {personajes.map((objeto) => {
          return (
            <Card
              key={objeto.id}
              ident={objeto.id}
              name={objeto.name}
              species={objeto.species}
              gender={objeto.gender}
              image={objeto.image}
              onClose={props.onClose}
            />
          );
        })}
      </Cartas>
      {characters.length > 4 && (
        <Buttons id="buttonDerecha" onClick={nextHandler}>
          ▶
        </Buttons>
      )}
    </Container>
  );
}
