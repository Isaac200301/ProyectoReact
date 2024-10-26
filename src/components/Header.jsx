import '../styles/Header.css'

const Header = () => {
        return (
            <header>
                <img src="./images/logo2.png" alt="Logo" className='logo' />
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#" className='login'>Iniciar sesión</a>
            </header>
        );
    }
    
    export default Header;
