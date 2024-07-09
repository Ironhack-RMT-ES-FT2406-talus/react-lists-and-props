import FoodItem from "./FoodItem"

function FoodMenu() {

  const today = new Date()

  return (
    <div>
      
      <h2>Este es el menu de día {today.toDateString()}</h2>

      {/* <div className="card">
        <h3>Entrante</h3>
        <p>Arepas</p>
        <span className="emoji">🫓</span>
      </div>

      <div className="card">
        <h3>Plato</h3>
        <p>Pabellon</p>
        <span className="emoji">🍛</span>
      </div>

      <div className="card">
        <h3>Postre</h3>
        <p>Tres leches</p>
        <span className="emoji">🍰</span>
      </div> */}

      <FoodItem tipoDePlato="Entrante" nombreDePlato="Arepas" emoji="🫓"/>
      <FoodItem tipoDePlato="Principal" nombreDePlato="Pabellon" emoji="🍛"/>
      <FoodItem tipoDePlato="Postre" nombreDePlato="Tres Leches" emoji="🍰"/>

      {/* //* ejemplo de si la data de comida estuviera en un array */}
      {food.map((eachFood) => {
        return (
          <FoodItem tipoDePlato={eachFood.type} nombreDePlato={eachFood.name}emoji={eachFood.emoji}/>
          // <FoodItem food={eachFood}/>
        )
      })}

    </div>
  )
}

export default FoodMenu