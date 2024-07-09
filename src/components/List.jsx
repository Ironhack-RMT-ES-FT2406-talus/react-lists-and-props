
function List() {


  const strArr = ["iñigo", "marcos", "mario", "sheyla", "germán", "michelle", "huanye", "félix", "ivan", "marcos"]

  // const jsxArr = [<li>iñigo</li>, <li>marcos</li> , <li>mario</li>, <li>sheyla</li>, <li>germán</li>, <li>michelle</li>, <li>huanye</li>, <li>félix</li>, <li>ivan</li>]

  return (
    <div>
      
      <h1>Aprendiendo sobre listas</h1>

      <ul>

        {strArr.map((eachName, index) => {
          return (
            <li key={index}>{eachName[0].toUpperCase() + eachName.slice(1)}</li>
          )
        })}
        
      </ul>

      {/* //* Sintaxis reducida */}
      {/* {strArr.map((eachName) => <li>{eachName}</li>)} */}


    </div>
  )
}

export default List