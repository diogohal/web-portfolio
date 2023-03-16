import React from 'react'
import Projects from '../Data/Projects.json'

export default function Project() {
    return (
        <div className='project' id='project'>
            <h1 className='project--title topic'>Projetos</h1>
            {Projects.projects.map(project => (
                <div className='project--details'>
                    <h2 className='project--details--title subtopic'>{project.title}</h2>
                    <p className='project--details--description description'>{project.description}</p>
                    <p className='project--details--tools tools'>{project.tools.map(tool => (
                        <p>• {tool}</p>
                    ))}</p>
                    <div className='project--details--repository'>
                        <p>Mais detalhes no repositório
                            <a href={project.github_link} target="_blank" rel="noreferrer"> GitHub</a> 
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}