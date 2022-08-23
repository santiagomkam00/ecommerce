import logo from '../../logo.svg'
import './styles.css'
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src = {logo} alt= "logo"/>
            </div>
            <div>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Sobre Nosotros</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
            <div>
                <button>Log in</button>
            </div>
        </div>
    )
};

export default NavBar;