import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [urlImagen, setUrlImagen] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const subirImagen = async () => {
    if (!file) {
      alert("Selecciona una imagen primero");
      return;
    }

    try {
      const imgRef = ref(storage, `imagenes/${file.name}`);
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      setUrlImagen(url);
      alert("Imagen subida correctamente ✅");
    } catch (error) {
      console.error(error);
      alert("Error al subir la imagen ❌");
    }
  };

  return (
    <div className="mt-5 mb-5">
      <h2>Subir imagen (Firebase Storage)</h2>
      <p className="text-muted">
        Este módulo permite subir una imagen a <b>Firebase Storage</b>.
      </p>

      <div className="mb-3">
        <input type="file" className="form-control" onChange={handleChange} />
      </div>

      <button className="btn btn-warning" onClick={subirImagen}>
        Subir imagen
      </button>

      {urlImagen && (
        <div className="mt-3">
          <p>Vista previa de la imagen subida:</p>
          <img src={urlImagen} alt="Imagen subida" className="img-fluid" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
