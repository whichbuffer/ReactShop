import React from 'react';
import Cart from './Cart'
function LivingRoom(){
    return(
        <div className="nav-space container">
        <Cart name="SÖDERHAMN" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet est in nunc placerat, nec accumsan nisl aliquet. Sed massa diam" price="350 €" img="assets/1.jpg"/>
        <Cart name="FRIHETEN" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet est in nunc placerat, nec accumsan nisl aliquet. Sed massa diam." price="535 €" img="assets/2.jpg"/>
        <Cart name="HAMMARN" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet est in nunc placerat, nec accumsan nisl aliquet. Sed massa diam." price="120 €" img="assets/5.jpg"/>
          </div>
    )
}


export default LivingRoom;

