import { useState } from "react"


const Header = () => {
    let [btn, setbtn] = useState("Login")
    return (
        <div className="header">
            <div className="left-header">

                <img src='https://clipground.com/images/restaurants-logo-6.png' alt='logo' />
            </div>
            <div className="right-header">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Help</li>
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
        </div>
    )
}

export default Header