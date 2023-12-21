import { Link } from "react-router-dom"

const Error404 = () => {
    return <>
        <p>Cette page n’existe pas</p>
        <Link to='/'>Retour à l’accueil</Link>
    </>
}

export default Error404