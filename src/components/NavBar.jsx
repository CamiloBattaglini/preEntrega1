import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Consolas</a></li>
                        <li><a href="#">Alimentos</a></li>
                        <li><a href="#">Herramientas</a></li>
                        <li><a href="#">Contacto</a></li>
                        <CartWidget />
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar