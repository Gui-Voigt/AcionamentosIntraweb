import Styles from '../Styles/Content.module.css'

function Content ({link}) {
    return (
        <section>
            {console.log(link)}
            <iframe src={link}/>
        </section>
    )
}

export default Content