import { useEffect, useState } from 'react';
// import './App.css';
import axios from "axios";
// import FreeNowCars from './components/FreeNowCars';
import ShareNowCars from './components/ShareNowCars';

const App =()=>{
  const [cars, setCars] = useState([]);
  const [carsfn, setCarsfn] = useState([]);
  // const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getCars = async () => {
      try {
        // setLoading(true);
 const {data} = await axios.get(
   "http://localhost:5000/share-now/vehicles"
 );
 const {data2} = await axios.get(
   "http://localhost:5000/free-now/vehicles"
 );
setCars(data.placemarks);
setCarsfn(data2.poiList);
console.log(carsfn)
// setLoading(false);
      }catch(error){
        return alert("Sorry, no data")
      }
    };
    getCars();   
  },[]);
 
  return (
    <div>
{/* {loading?(
<h3>Loading...</h3>
) : ( */}
  {/* <FreeNowCars cars={cars} /> */}
  <ShareNowCars cars={cars} /> 
{/* )} */}
 </div>
  )
}

export default App;