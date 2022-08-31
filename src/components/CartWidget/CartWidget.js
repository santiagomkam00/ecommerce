import carrito from '../../anadir-al-carrito.png'
import './styles.css'

const CartWidget = () => {
return (
    <div className='carrito'>
        <img src = {carrito} alt = 'carrito'/>
    </div>
)
};

export default CartWidget;