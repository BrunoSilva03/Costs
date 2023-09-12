import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from '../layoult/Message'
import Container from '../layoult/Container'
import LinkButton from '../layoult/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }, [])


return (
    <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            
        </div>
        {message && <Message type="sucess" msg={message}/>}
        <Container customClass="start">
            <p>Projetos...</p>
        </Container>
    </div>
)
}

export default Projects