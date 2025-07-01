import Logo from '../assets/IMG/Logo.png'
import '../assets/CSS/Menu/styleMenuMain.css'
import '../assets/CSS/index.css'
import '../assets/CSS/Items/styleItems.css'

const MenuMain = () => {
    return (
        <>
            <div className="menu-main">
                <img src={Logo} alt="Logo" />
                <div>
                    <nav className="nav-navegation">
                        <ul>
                            <li><a href="" className='btn-outline'>Home</a></li>
                            <li><a href="" className='btn-outline'>Shop</a></li>
                        </ul>
                    </nav>
                    <nav className="nav-logins">
                        <ul>
                            <li><a href="" className='btn-secundary'>Register</a></li>
                            <li><a href="" className='btn-main'>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MenuMain