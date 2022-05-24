import NavItem from '../Components/NavItem'
import Styles from '../Styles/Navbar.module.css'

function Navbar ({handleClick}) {
    const clientes = [
        { nome : 'condominio 1',
          link : 'http://info.cern.ch/'}, 
        { nome : 'condominio 2',
          link : 'http://localhost:3000'}
    ]

    return(
        <nav>
            {clientes.map(
                (cliente) => (
                    <NavItem
                        link={cliente.link}
                        key={cliente.nome} 
                        cliente={cliente.nome}
                    />
                )
            )}
        </nav>
    )
}

export default Navbar