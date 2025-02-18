import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { addInfo } from '../Slices.ts';
import * as yup from "yup";
import "../styles/Form.css";

// Definir esquema de validación con Yup
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, "Solo letras y espacios")
    .required("El nombre es obligatorio"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos y solo debe contener números")
    .required("El teléfono es obligatorio"),
  email: yup
    .string()
    .email("Correo no válido")
    .required("El correo es obligatorio"),
  career: yup.string().required("Debes seleccionar una carrera"),
});

// Lista de carreras
const listaCarreras = [
  "Enfermería", "Ingeniería de Sistemas", "Especialización en Docencia",
  "Ingeniería Industrial", "TECNOLOGÍA EN ATENCIÓN PREHOSPITALARIA",
  "LICENCIATURA EN ESPAÑOL E INGLÉS", "Licenciatura en Educación Infantíl",
  "Licenciatura en Educación Religiosa", "Licenciatura en Música",
  "TEC. EN ATENCIÓN PREHOSPITALARIA EXTENSIÓN BUCARAMANGA", "TEOLOGÍA",
  "CONTADURÍA PÚBLICA", "ADMINISTRACIÓN DE EMPRESAS", "MAESTRÍA EN EDUCACIÓN",
  "MARKETING Y COMUNICACIÓN DIGITAL", "MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA",
  "ESPECIALIZACIÓN EN ALTA GERENCIA", "MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA VIRTUAL"
];

const Form: React.FC = () => {
  const dispatch = useDispatch();


  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(addInfo({ id: Date.now(), ...data }));
    reset();
  };

  return (
    <div className="form-container">
      <h1>SVGA</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" {...register("name")} placeholder="Ingrese su nombre completo"/>
          <p className="error">{errors.name?.message}</p>
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" {...register("phone")} placeholder="Ingrese su número telefónico" />
          <p className="error">{errors.phone?.message}</p>
        </div>

        {/* Correo */}
        <div className="form-group">
          <label>Correo:</label>
          <input type="email" {...register("email")} placeholder="Ingrese su correo"/>
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* Carrera (Select) */}
        <div className="form-group">
          <label>Carrera:</label>
          <select {...register("career")}>
            <option value="">Seleccione su carrera...</option>
            {listaCarreras.map((carrera) => (
              <option key={carrera} value={carrera}>
                {carrera}
              </option>
            ))}
          </select>
          <p className="error">{errors.career?.message}</p>
        </div>

        {/* Botón de Enviar */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
