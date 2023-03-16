import Card from "../Card/Card";
import styled from "styled-components";
import { useState } from "react";

const Cartas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 25px;
`;

export default function Cards(props) {
  const [data, setData] = useState([]);
  const { characters } = props;

  if (characters.length > 4) {
    for (let i = 0; i < characters.length - 1; i++) {
      console.log(`Valor de i: ${i}`);
      // const newArray = [];
      let x = 0;
      for (
        let y = i === 0 ? i : i + 1;
        x < 4 && characters[y] !== "undefined";
        y++
      ) {
        console.log(`Valor de Y: ${y}`);
        x += 1;
        i = y - 1;
        // newArray.push(characters[y]);
      }
      // setData([...data, newArray]);
    }
  }

  return (
    <Cartas>
      {characters.map((objeto) => {
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
  );
}
