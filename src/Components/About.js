import React from 'react'
import Photo from '../Images/about_photo.png'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='about--text'>
                <h1 className='about--text--name' >OLÁ, MEU NOME É <span>DIOGO</span></h1>
                <p className='about--text--description'>Sou estudante de Ciência da Computação na Universidade 
                Federal do Paraná. Me interesso pelas áreas de Visão Computacional, Processamento de Imagens e 
                Aprendizado de Máquina.</p>
            </div>
            <img className='about--img' src={Photo} alt='Ilustration of Diogo'/>
        </div>
    )
}