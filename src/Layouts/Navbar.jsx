import NavItem from '../Components/NavItem'
import Styles from '../Styles/Navbar.module.css'

function Navbar () {
    const clientes = [{ nome : 'condominio 1'}, { nome : 'condominio 2'}, { nome : 'condominio 2'}, { nome : 'condominio 2'}, ]

    return(
        <nav>
            {clientes.map(
                (cliente) => (
                    <NavItem cliente={cliente.nome}/>
                )
            )}
        </nav>
    )
}

export default Navbar