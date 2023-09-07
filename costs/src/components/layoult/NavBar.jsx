import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../imagens/costs_logo.png'

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                            <Link to="/projects">Meus Projetos</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/newproject">Novo Projeto</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    )
}

export default NavBar