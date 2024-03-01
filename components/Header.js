import { useState } from "react"


const Header = () => {
    let [btn, setbtn] = useState("Login")
    return (
        <div className="header">
            <img src='https://clipground.com/images/restaurants-logo-6.png' alt='logo' />
            <ul>
                <li>home</li>
                <li>menu</li>
                <li>contact</li>
                <li>help</li>
                <button className="login-btn" onClick={() => {
                    if (btn == "Login") {
                        setbtn("Logout")
                    }
                    else {
                        setbtn("Login")
                    }

                }}>{btn}</button>
            </ul>
        </div>
    )
}

export default Header