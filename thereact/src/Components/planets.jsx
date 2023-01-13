
export const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]
  
export const Planets = (props) => { 
    return (<div>
<h1>{props.isGasPlanet} {props.name} </h1>
</div>)
}