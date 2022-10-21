import React from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Experience from './Components/Experience'

export default function App() {
    return (
        <div>
            <section>
                <Nav />
                <About />
            </section>
            <section>
                <Experience />
            </section>
        </div>
    )
}