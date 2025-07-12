import { useState } from "react";
import MenuMain from "../Items/MenuMain";
import '../assets/CSS/index.css'
import '../assets/CSS/Register/styleRegister.css'

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        city: "",
        street: "",
        postal: "",
        number: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch("http://localhost:5000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });

        const data = await res.json();

        if (res.ok) {
          setMessage("✅ Registro exitoso");
          setForm({
            name: "",
            email: "",
            password: "",
            city: "",
            street: "",
            postal: "",
            number: ""
          });
        } else {
          setMessage(`❌ ${data.message}`);
        }
        } catch (error) {
          setMessage("❌ Error al conectar con el servidor");
        }
    };

    return (
        <>
            <MenuMain />
            <div className="container-main">
                <div className="container-register">
                    <h1>Register</h1>
                    <form onSubmit={handleRegister}>
                        {[
                          { label: "Name", name: "name" },
                          { label: "Email", name: "email" },
                          { label: "Password", name: "password", type: "password" },
                          { label: "City", name: "city" },
                          { label: "Street", name: "street" },
                          { label: "Postal", name: "postal" },
                          { label: "Number", name: "number" }
                        ].map(({ label, name, type = "text" }, idx) => (
                          <div key={idx} className={`container-input container-input-${idx + 1}`}>
                            <label className="text-label">{label}:</label>
                            <input
                              type={type}
                              name={name}
                              className="input-text"
                              value={form[name]}
                              onChange={handleChange}
                            />
                          </div>
                        ))}
                        <div className="container-terms container-input-8">
                            <input type="checkbox" />
                            <p>Aceptas terminos y condiciones</p>
                        </div>
                        <div className="container-input-9">
                            <button className="btn-main">Register</button>
                        </div>
                        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register