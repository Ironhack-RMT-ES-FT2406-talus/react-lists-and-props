
function FoodItem(props) {

  console.log(props) // props es la bolsita donde recibimos toda la info extra necesaria para pintar el componente

  return (
    <div className="card">
      <h3>{props.tipoDePlato}</h3>
      <p>{props.nombreDePlato}</p>
      <span className="emoji">{props.emoji}</span>
    </div>
  )
}

export default FoodItem