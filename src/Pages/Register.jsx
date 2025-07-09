import MenuMain from "../Items/MenuMain";
import '../assets/CSS/index.css'
import '../assets/CSS/Register/styleRegister.css'

const Register = () => {
    return (
        <>
            <MenuMain />
            <div className="container-main">
                <div className="container-register">
                    <h1>Register</h1>
                    <form action="">
                        <div className="container-input container-input-1">
                            <label htmlFor="" className="text-label">Name:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-2">
                            <label htmlFor="" className="text-label">Email:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-3">
                            <label htmlFor="" className="text-label">Password:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-4">
                            <label htmlFor="" className="text-label">City:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-5">
                            <label htmlFor="" className="text-label">Street:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-6">
                            <label htmlFor="" className="text-label">Postal:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-input container-input-7">
                            <label htmlFor="" className="text-label">Number:</label>
                            <input type="text" className="input-text" />
                        </div>
                        <div className="container-terms container-input-8">
                            <input type="checkbox" />
                            <p>Aceptas terminos y condiciones</p>
                        </div>
                        <div className="container-input-9">
                            <button className="btn-main">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register