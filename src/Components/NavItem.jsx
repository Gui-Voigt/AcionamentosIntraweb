import Style from '../Styles/NavItem.module.css'

function NavItem ({ link, cliente , handleClick}) {

    const setLink = handleClick
    return(
        <p>
             {cliente}
        </p>
    )

}

export default NavItem