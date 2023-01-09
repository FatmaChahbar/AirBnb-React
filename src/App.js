import './App.css';
import bike from './Images/bike.png'
import wedding from './Images/wedding.png'
import img1 from './Images/image.png'
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Card from './Components/Card';
function App() {//<Main/>
  return (
    <div >
      
     <NavBar/>
     <Main/>
     <Card image ={img1}
     parg='Life lessons with Katie Zaferes'
     price= '136'
     rate='5'
     num='6'
     />

     <Card image ={wedding}
     parg='Learn wedding photography'
     price= '125'
     rate='5'
     num='30'/>

     <Card image ={bike} 
     parg='Group Mountain Biking'
     price= '50'
     rate='4.8'
     num='2'/>
    </div>
  );
}

export default App;
