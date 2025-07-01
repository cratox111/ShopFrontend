import MenuMain from "../Items/MenuMain";
import '../assets/CSS/index.css'
import '../assets/CSS/Login/styleLogin.css'

const Login = () => {
    return (
        <>
            <MenuMain />
            <div className="container-main">
                <div className="container-login">
                    <h1>Login</h1>
                    <form action="">
                        <div className="container-input">
                            <label htmlFor="" className="text-label">Name:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input">
                            <label htmlFor="" className="text-label">Email:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input">
                            <label htmlFor="" className="text-label">Password:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-terms">
                            <input type="checkbox" />
                            <p>Aceptas terminos y condiciones</p>
                        </div>
                        <div>
                            <button className="btn-main">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login