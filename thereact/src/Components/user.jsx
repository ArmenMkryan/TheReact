export const users = [
    {name : "Armen", age : 40}, 
    {name : "Arthur", age : 28},
    {name : "Jason", age : 30},
    {name : "Henry", age : 24},
    {name : "David", age : 26},
    {name : "Morgan", age : 36},
    {name : "Michael", age : 24}
  ]

export const User = (props) => {
    return ( <div>
      {props.name} {props.age}
    </div>
  
    )
  }