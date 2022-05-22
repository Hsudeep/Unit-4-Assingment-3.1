import React from 'react'
import styles from "./cardColor.module.css"
const Paymentcard = (props) => {
  
    return (
        <div>
        {props.cardDetails.map((datacard)=>(
            <div key={datacard.id} className={datacard.devices==="MacOs-Mobile" ? styles.white : styles.orange}>
            <div className='box1'>
                <p>{datacard.date}</p>
                <img src={datacard.logo} alt='#'></img>
            </div>
            <div className='box2'>
                <button className='btn1'>{datacard.heading}</button>
                <h1>{datacard.subheading}</h1>
            </div>
            <div className='box3'>
                <p>{datacard.devices}</p>
                <img src='https://482634-1519534-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/07/Right-Arrow-PNG-Transparent-Picture.png' alt='#'></img>
            </div>
            </div>
        ))}
        </div>
    )
}

export default Paymentcard;