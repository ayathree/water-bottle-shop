const getStorageCart=()=>{
    const storeCartString = localStorage.getItem('cart')
    if (storeCartString) {
        return JSON.parse(storeCartString)
        
    }
    return []
}

const saveCartToLs= cart=>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLs = id =>{
    const cart = getStorageCart();
    cart.push(id);
    saveCartToLs(cart);
}

const removeFromLs = id =>{
    const cart = getStorageCart();
    const remaining = cart.filter(idx => idx!== id);
    saveCartToLs(remaining);
}

export {addToLs, getStorageCart, removeFromLs}