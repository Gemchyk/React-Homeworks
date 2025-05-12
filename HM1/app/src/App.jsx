import Lot from './Lot';
import './App.css'




function App() {
 
  const cars = [
    {id: 1, name: "BMW", price: "3000$"},
    {id: 2, name: "Subaru", price: "3500$"},
    {id: 3, name: "Audi", price: "4000$"}
  ]



  return (
    <>
      <div>
        <ul>
          {cars.map((i) => {
              return (
                <div>
                  <li key={i.id} >
                    <Lot id={i.id} name={i.name} price = {i.price} /></li>
                  
                </div>
              );
          })}
          
        </ul>
      </div>
    </>
  )
}





export default App
