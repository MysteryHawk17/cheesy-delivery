import React, { useState } from 'react'
import './pizza.css'
const Pizza = ({ pizza}) => {
    const [varient, setVarient] = useState('Small')
    const [quantity, setQuantity] = useState(1);
    const[show,setShow]=useState(false)
    return (
        <div className='pizza'>
            <div className="container" >
                <p className="name">{pizza.name}</p>
                <img src={pizza.image} alt="" className="image" onClick={()=>{
                setShow(true)
            }} />
                <div className="pizzaOptions">
                    <div className="varient">
                        <label for="varients">Varients:</label>

                        <select name="varients" id="varients"
                            value={varient}
                            onChange={(e) => {
                                setVarient(e.target.value)
                            }}
                            style={{ padding: "5px", fontSize: "20px" }}
                        >
                            {/* <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option> */}
                            {pizza.varients.map((varient) => {
                                return (
                                    <option value={varient}>{varient}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="number">
                        <label for="quantity">Quantity:</label>
                        <input type="number"

                            min={0}
                            id='quantity'
                            style={{ padding: "5px", fontSize: "20px" }}
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="orderPizza">
                    <p>Price:{pizza.prices[0][varient] * quantity}Rs/-</p>
                    <button className='addToCart'>Add to Cart</button>
                </div>
            </div>
            {show&&<div className="detailed">
                <p className='title'>{pizza.name}</p>

                <img src={pizza.image} alt="" />
                {pizza.category==='veg'?<p style={{color:"green",textTransform:"uppercase"}} >{pizza.category}</p>:<p style={{color:"red",textTransform:"uppercase"}}>{pizza.category}</p>}
                <p>{pizza.description}</p>
                <button 
                onClick={()=>{
                    setShow(false)
                }}
                >Close</button>
            </div>
}        </div>
    )
}

export default Pizza