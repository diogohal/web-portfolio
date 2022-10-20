import React from 'react'
import Computer from '../Images/footer_img.png'

export default function Nav() {
    return (
        <div className='nav'>
            <a href='/'>
                <img className='nav--img' src={Computer} alt='Computer icon'/>
            </a>
            <div className='nav--text'>
                <p>EXPERIÊNCIA PROFISSIONAL</p>
                <p>PROJETOS</p>
                <p>CONTATO</p>
            </div>
        </div>
    )
}