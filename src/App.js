import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './style.css'

function App() {

    return(
        <div className="container">
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}


export default App;