import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const registroUser = axios
      .post("http://localhost:5000/api/v1/registro", data)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Registro exitoso",
          text: "Te has registrado correctamente",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error.response.data.msg);
        Swal.fire({
          title: "Error al registrar",
          text: `${error.response.data.msg}`,
          icon: "error",
        });
      });
  };
  return (
    <div className="login-container">
      <h2 className="login-title">Registro usuario</h2>
      <form action="" className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-input">
          <input
            className="input input-email"
            type="text"
            placeholder="email"
            {...register("emailUser", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Debe ser un email válido",
              },
            })}
          />
          {errors.emailUser && (
            <span className="error-input">{errors.emailUser.message}</span>
          )}
        </div>
        <div className="group-input">
          <input
            className="input input-name"
            type="password"
            placeholder="password"
            autoFocus
            {...register("passwordUser", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 8,
                message: "El campo debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.passwordUser && (
            <span className="error-input">{errors.passwordUser.message}</span>
          )}
        </div>
        <div className="group-button">
          <button className="button-login" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
