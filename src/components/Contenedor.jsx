
function Contenedor(props) {
  console.log(props)

  let containerStyles = {
    width: "300px",
    backgroundColor: props.color
  }

  return (
    <div style={containerStyles}>

      {props.children}

    </div>
  )
}

export default Contenedor