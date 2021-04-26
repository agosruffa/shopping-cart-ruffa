import React, { useContext } from 'react'
import './Home.css'
import { CartContext } from '../Context/CartContext';


export const Home = () => {
    const [items, setItems] = useContext(CartContext);

return (
  <div className="home">

    {items.map((items) => (
    <div>
                  <h2 key={items.id}> {items.title} </h2>
                  </div>
  ))}

</div>
  )
    };

    

    