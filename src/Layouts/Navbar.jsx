import NavItem from '../Components/NavItem'
import Styles from '../Styles/Navbar.module.css'
import {useState, useEffect} from 'react'

function Navbar ({setLink}) {
    const [clientes, setClientes] = useState([])

    useEffect( () => {
        dbConnect(setClientes)
    },[]) 

    return(
        <nav>
            {clientes.map(
                (cliente) => (
                    <NavItem
                        link={cliente.link}
                        key={cliente.nome} 
                        cliente={cliente.nome}
                        setLink={setLink}
                    />
                )
            )}
        </nav>
    )
}

function dbConnect(setClientes){
    fetch("http://localhost:5000/condominios", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
    })
    .then((resp) => resp.json())
    .then((data) => {setClientes(data)})
    .catch((err) => console.log(err))


}

export default Navbar