import PropTypes from 'prop-types';


import './Bottle.css'

const Bottle = ({bottle, handleAddButton}) => {
    const{name, img, price}= bottle
    console.log(bottle)
    return (
        <div className="bottle">
           <h2>Bottle :{name} </h2> 
           <img src={img} alt="" />
           <p>${price}</p>
           <button onClick={() =>handleAddButton(bottle)}>Add</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddButton: PropTypes.func.isRequired,
}



export default Bottle;