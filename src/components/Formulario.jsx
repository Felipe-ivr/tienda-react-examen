import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [, forceUpdate] = useState(); 

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate({}) },
      messages: {
        required: "Este campo es obligatorio",
        email: "El correo no es válido",
        min: "Debe tener al menos :min caracteres",
      },
    })
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = async (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      try {
        await addDoc(collection(db, "contactos"), form);
        alert("Datos enviados y guardados en Firestore ✅");
        setForm({ nombre: "", email: "", mensaje: "" });
        validator.current.hideMessages();
        forceUpdate({});
      } catch (error) {
        console.error("Error al guardar en Firestore:", error);
        alert("Ocurrió un error al guardar los datos ❌");
      }
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <div className="mt-5">
      <h2>Formulario de Contacto</h2>
      <p className="text-muted">
        Este formulario usa validaciones con <b>simple-react-validator</b> y guarda los datos en <b>Firestore</b>.
      </p>

      <form onSubmit={enviar}>
        {}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={form.nombre}
            onChange={handleChange}
          />
          <small className="text-danger">
            {validator.current.message("nombre", form.nombre, "required|min:3")}
          </small>
        </div>

        {}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
          <small className="text-danger">
            {validator.current.message("email", form.email, "required|email")}
          </small>
        </div>

        {}
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="3"
            value={form.mensaje}
            onChange={handleChange}
          ></textarea>
          <small className="text-danger">
            {validator.current.message("mensaje", form.mensaje, "required|min:5")}
          </small>
        </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;

