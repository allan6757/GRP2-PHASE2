import react from 'react'
import {link} from 'react-router-dom';
import "../App.css";

//the base url should be filled, anywhere where there is https put baseurl
const API_BASE_URL= "http://localhost:3000/product";

function items(){
    const[sneakers, setSneakers]=useState([]);

// to fetch the sneaker details from an API when the component mounts
//make request to local host to retrieve sneaker details
//update the sneaker state
//handle any errors
useEffect(() => {
    fetch(`${API_BASE_URL}`)
    .then((res) => res.json ())
    .then((data) => setSneakers(data))
    .catch((error) => cconsole.error("Oops!Something went wrong while fetching the sneakers. Refresh the page to try again."));

},[]);

//sneaker section that has a heading for the sneaker list
//grid container for putting sneaker cards in a grid layout
//mapping through array to render a card for each sneaker
//each sneaker card has a unique key for rendering 
//display  the sneaker details(the heading, price, image,and the name of the shoe)
//to navigate on the details for the sneakers using their id 
return(
    <div className = "items-container">
        <h2>Kick it with these Sneakers!</h2>
        <div className = "items-grid"> {sneakers.map((sneaker) => (
            <div className = "sneaker-card" key = {sneaker.id}>
                <img src = {sneaker.image} alt={sneaker.name} />
                <h3>{sneaker.name}</h3>
                <p>Name: {sneaker.name}</p>
                <p>Price:KES{sneaker.price}</p>
                <link to={`/sneakers/${sneaker.id}`}> View Details</link> 
            </div>
        ))}
            </div>

    </div>
);
}
export default items;