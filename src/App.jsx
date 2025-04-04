import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HarryPotter from "../HarryPotter"
import Alien from '../Alien';
import StarWars from"../StarWars"
import MyFooter from"../MyFooter"
import MyNavbar from '../MyNavbar';




function App() {
  

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <MyNavbar/>
    <main
    
          className="flex-grow-1"
          style={{ backgroundColor: 'black', color: 'white' }} 
        >   
     <HarryPotter/>
     <Alien/>
     <StarWars/>
     </main>
     <MyFooter/>
     </div>
    </>
  )
}

export default App
