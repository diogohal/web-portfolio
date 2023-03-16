import React from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Experience from './Components/Experience'
import Project from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './style.css'


export default function App() {
    return (
        <div>
            <section>
                <Nav />
                <About />
            </section>
            <section>
                <Experience />
                <Project />
                <Contact />
            </section>
            <Footer />
        </div>
    )
}