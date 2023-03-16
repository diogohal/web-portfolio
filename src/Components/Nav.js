import React from 'react'
import {Link} from 'react-scroll'
import Computer from '../Images/footer_img.png'

export default function Nav() {
    return (
        <div className='nav'>
            <a href='/web-portfolio'>
                <img className='nav--img' src={Computer} alt='Computer icon'/>
            </a>
            <div className='nav--text'>
                <Link className='nav--items' to='about' spy={true} smooth={true} offset={-200} duration={500}>SOBRE</Link >
                <Link className='nav--items' to='experience' spy={true} smooth={true} offset={-30} duration={500}>EXPERIÊNCIA</Link >
                <Link className='nav--items' to='project' spy={true} smooth={true} offset={-30} duration={500}>PROJETOS</Link >
                <Link className='nav--items' to='contact' spy={true} smooth={true} offset={0} duration={500}>CONTATO</Link >
            </div>
        </div>
    )
}