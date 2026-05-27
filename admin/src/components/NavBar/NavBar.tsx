import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUser, faBarcode } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo-navbar">
                <img src="../../../public/logo.png" alt="#" />      
            </div>
            <div className="navbar-menu">
                <button><FontAwesomeIcon icon={faBarcode} /> Adicionar Produtos</button>
                <button> <FontAwesomeIcon icon={faStore} /> Pedidos</button>
                <button><FontAwesomeIcon icon={faUser} /> Perfil</button>
            </div>
            <div className="login-user">
                <p>fotouser</p>
                <h2>nomeusuario</h2>
            </div>
        </div>
        
    )
}

export default NavBar