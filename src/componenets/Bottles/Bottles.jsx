import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStorageCart, removeFromLs } from "../../utility/localstorage";
import Cart from "../cart/Cart";


const Bottles = () => {

    const [bottles, setBottles]= useState([])
    const [cart, setCart]= useState([])
    
    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
        console.log(bottles.length)
       if (bottles.length>0) {
        const storedCart = getStorageCart();
        // console.log(storedCart, bottles)
        const saveCart =[];
        for(const id of storedCart){
            console.log(id)
            const bottle = bottles.find(bottle =>bottle.id === id)
            if (bottle) {
                saveCart.push(bottle)
                
            }
        }
        console.log(saveCart)
        setCart(saveCart)
        
       }
    },[bottles])

    const handleAddButton = bottle=>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        addToLs(bottle.id);

    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLs(id);
    }
    return (
        <div>
            <h2>Bottles Available : {bottles.length} </h2>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            
            <div className="bottle-container">
            {
                bottles.map(bottle=><Bottle
                key={bottle.id}
                handleAddButton={handleAddButton}
                bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;