import React from 'react'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <h1 className='contact--title topic'>CONTATO</h1>
            <p className='contact--text description'>
                Você pode me encontrar em diversas plataformas da internet, inclusive no 
                <a className='contact--text--item' href='https://www.instagram.com/diogohal/'> Instagram</a>, 
                <a className='contact--text--item' href='https://www.github.com/diogohal/'> GitHub</a>, 
                <a className='contact--text--item' href='https://www.linkedin.com/in/diogohal/'> Linkedin </a>
                ou através do meu 
                <a className='contact--text--item' href="mailto: diogobr.2014@outlook.com"> email </a> 
                diogobr.2014@outlook.com.
            </p>
        </div>
    )
}