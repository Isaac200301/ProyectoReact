import '../styles/Header.css'

const Header = () => {
        return (
            <header>
                <a href="#">INICIO</a>
                <a href="#">NOSOTROS</a>
                <a href="#" className='login'>INICIAR SESIÓN</a>
                <img src="/negro.png" alt="Logo" className='logo' />
            </header>
        );
    }
    
    export default Header;
