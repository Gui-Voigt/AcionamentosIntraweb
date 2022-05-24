import Style from '../Styles/NavItem.module.css'

function NavItem ({ link, cliente , setLink }) {

        return(
        <p onClick = {(e) => setLink(link)}>
             {cliente}
        </p>
    )

}

export default NavItem