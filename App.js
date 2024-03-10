import React from 'react'
import ReactDom from 'react-dom/client'
import './App.css'
import Header from './components/Header.js'
import Body from './components/Body.js';

const Restaurent = () => {
    return (
        <div>App</div>

    
    )
}


const App = () => {

    return (
        <>
            <Header />
            <Body />
        </>
    )
}



const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />)
