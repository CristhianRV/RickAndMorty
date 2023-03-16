import { useState, useEffect } from "react";

export default function Detail(props) {
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    image: "",
  });
  console.log(props.detailId);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${props.detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [props.detailId]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.status}</h3>
      <h3>{character.specie}</h3>
      <h3>{character.gender}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
