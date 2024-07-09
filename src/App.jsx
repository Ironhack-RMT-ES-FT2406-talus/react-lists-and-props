import "./App.css";
import List from "./components/List.jsx";
import Turtles from "./components/Turtles.jsx";
import FoodMenu from "./components/FoodMenu.jsx";
import Contenedor from "./components/Contenedor.jsx";

import ReactPlayer from "react-player";
import Draggable from "react-draggable";

function App() {
  return (
    <>
      {/* <List /> */}

      {/* <Turtles /> */}

      {/* <FoodMenu /> */}

      {/* <Contenedor color="red">
      <div>
        <p>Patatas</p>
        <h4>Tomates</h4>
      </div>
     </Contenedor>


     <Contenedor color="green">
      <List />
     </Contenedor>

     <Contenedor color="blue"/> */}
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>

      <ReactPlayer
        url="https://youtu.be/dQw4w9WgXcQ"
        controls={true}
        volume={0.1}
      />
    </>
  );
}

export default App;
