import './Navbar.css'
import logo from '../../assets/logo.PNG'

const Navbar = () => {

    const link = {href: ""}

    return(
        <nav className="navbar">
            <img src={logo} alt="" width="250px"/>
            <a href={link.href}>Inicio</a>
            <a href={link.href}>Blog</a>
            <a href={link.href}>Galeria</a>
            <a href={link.href}>Contacto</a>
        </nav>
    )
}

export{ Navbar }
