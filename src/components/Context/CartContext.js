import React, { useState, createContext } from 'react';
import Item1 from '../../images/item1.png';
import Item2 from '../../images/item2.png';
import Item3 from '../../images/item3.png';
import Item4 from '../../images/item4.png';
import Item5 from '../../images/item5.png';
import Item6 from '../../images/item6.png';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState ([
        {id:1,title:'Entreno Triatlon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Entreno Tenis', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Entreno Personalizado', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'Entreno Basquet', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Entreno Jockey', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Entreno Maraton', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}

    ]);
     
  return (
    <CartContext.Provider 
      value={[items, setItems]}>
      {props.children}
    </CartContext.Provider>
  );
};


