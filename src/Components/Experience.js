import React from 'react'
import Experiences from '../Data/Experiences.json'

export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <h1 className='experience--title topic'>EXPERIÊNCIA</h1>
            {Experiences.experiences.map(exp => (
                <div className='experience--details'>
                    <div className='experience--details--date'>
                        <p>{exp.start}</p>
                        <p>-</p>
                        <p>{exp.end}</p>
                    </div>
                    <div>
                        <h2 className='experience--details--job subtopic'>{exp.job}</h2>
                        <p className='experience--details--description description'>{exp.description}</p>
                        <p className='experience--details--tools tools'>{exp.tools.map(tool => (
                            <p>• {tool}</p>
                        ))}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}