import React from 'react';
import './cartWidget.css'
import cartIcon from '../assets/carrito-de-compras.png'; // Ajusta la ruta a tu imagen

function CartWidget(){
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            <h4>0</h4>
        </div>
    );
};

export default CartWidget;
