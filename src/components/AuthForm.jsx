import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setUser(cred.user);
      alert("Usuario registrado correctamente ✅");
    } catch (error) {
      console.error(error);
      alert("Error al registrar: " + error.message);
    }
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setUser(cred.user);
      alert("Inicio de sesión exitoso ✅");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const cerrarSesion = async () => {
    await signOut(auth);
    setUser(null);
    alert("Sesión cerrada ✅");
  };

  return (
    <div className="mt-5">
      <h2>Autenticación (Firebase Auth)</h2>
      <p className="text-muted">
        Este formulario permite <b>registrar</b> e <b>iniciar sesión</b> usando Firebase Auth.
      </p>

      <form>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña (mínimo 6 caracteres)</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary me-2" onClick={registrar}>
          Registrarse
        </button>
        <button className="btn btn-success me-2" onClick={iniciarSesion}>
          Iniciar sesión
        </button>

        {user && (
          <button className="btn btn-danger" onClick={cerrarSesion} type="button">
            Cerrar sesión
          </button>
        )}
      </form>

      {user && (
        <div className="mt-3">
          <p className="text-success">
            Usuario autenticado: <b>{user.email}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
