import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Enviar los datos al backend para validar el login
    const loginUser = axios
      .post("http://localhost:5000/api/v1/login", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/manager");
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: `Error de login`,
          text:`${error.response.data.msg}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login admin</h2>
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

export default Login;
