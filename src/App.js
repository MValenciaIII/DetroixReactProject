import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './style.css'

function App() {

    return(
        <div className="container-fluid websiteBackground vw-100">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


export default App;