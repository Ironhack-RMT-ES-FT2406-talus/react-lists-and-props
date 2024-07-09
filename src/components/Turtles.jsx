// Iteration 2.1. import the array of characters in "data/characters"
import allCharacters from "../data/characters.js";

function Turtles() {
  const titles = ["TEENAGE", "MUTANT", "NINJA", "TURTLES"];

  return (
    <>
      <div className="container">
        {/* iteration 1. Using a .map on the array titles, create an h1 for every string */}

        {titles.map((eachTitle) => {
          return <h1 key={eachTitle}>{eachTitle}</h1>;
        })}

        {/* {titles.map((eachTitle) => <h1 key={eachTitle}>{eachTitle}</h1> )} */}
      </div>

      <h2>List of Characters</h2>

      {/* Iteration 2.2. display all the characters in the array of characters with the following structure */}

      {allCharacters.map((eachCharacter, index) => {
        return (
          <div key={index} className="container" style={{ backgroundColor: eachCharacter.color }}>
            <h3>Name: {eachCharacter.name}</h3>
            <p>Weapon: {eachCharacter.weapon}</p>

            {/* //* condicionales ternarios */}
            {/* <span className="emoji"> {eachCharacter.name === "splinter" ? "🐀" : "🐢"} </span> */}
            {eachCharacter.name === "splinter" ? <span className="emoji">🐀</span> : <span className="emoji">🐢</span>}
            {eachCharacter.name === "michelangelo" ? <span className="emoji">⭐</span> : null }

            {/* //* ejemplo ternario con multiples condiciones */}
            {/* <span className="emoji"> {eachCharacter.name === "splinter" ? "🐀" : eachCharacter.name === "michelangelo" ? "⭐" : "🐢"} </span> */}

            {/* //* operador de corto circuito*/}
            {eachCharacter.name === "michelangelo" && <span className="emoji">⭐</span>}

          </div>
        );
      })}

      {/* 
        <div className="container">
          <h3>Name: CHARACTER_NAME</h3>
          <p>Weapon: CHARACTER_WEAPON</p>
        </div>
      */}
    </>
  );
}

export default Turtles;


// precedencia en CSS

// 1. estilos en linea
// 2. estilos por id
// 3. estilos por clase
// 4. estilos por etiqueta
// 5. otra asignacion de estilos