import React from "react";
import ProductList from "./components/ProductList";
import Formulario from "./components/Formulario";
import AuthForm from "./components/AuthForm";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div>
      <header className="bg-dark text-white p-3">
        <h1 className="text-center">Tienda React - Examen Programación de Componentes</h1>
      </header>

      <main className="container mt-4">
        {/* Ejercicio 1 */}
        <ProductList />

        <hr className="my-5" />

        {/* Ejercicio 2 */}
        <Formulario />
  <main className="container mt-4">
  <ProductList />
  <hr className="my-5" />
  <Formulario />
  <hr className="my-5" />
  <AuthForm />
  <hr className="my-5" />
  <UploadImage />
</main>

      </main>
    </div>
  );
}

export default App;
