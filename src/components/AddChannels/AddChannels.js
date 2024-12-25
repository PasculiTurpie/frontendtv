import React from "react";
import "./AddChannels.css";

const AddChannels = () => {


  const addContactHandleClick = () => {
    console.log("Add Contact Button Clicked");
  }


  return (
    <>
      <div className="container-primary">
       <h1>AddChannels</h1>
        {/* <form className="form-addchannel" action="" noValidate>
          <div className="container-form">
            <div className="container-secondary">
              <div className="group input-text">
                <label htmlFor="name-channel">Nombre señal</label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name-channel"
                  required
                />
                <span className="input-error">Campo obligatorio</span>
              </div>

              <div className="group input-number">
                <label htmlFor="numero-channel">Número</label>
                <input
                  className="input"
                  type="number"
                  id="name"
                  name="numero-channel"
                  required
                />
                <span className="input-error">Campo obligatorio</span>
              </div>
              <div className="group input-select">
                <label htmlFor="tipo-channel">Tipo</label>
                <select name="selection" id="" className="select">
                  <option value=""> --Seleccionar-- </option>
                  <option value="">Cobre</option>
                  <option value="">Mpeg4</option>
                </select>
                <span className="input-error">Campo obligatorio</span>
              </div>
            </div>
            <div className="container-secondary">
              <div className="group input-select">
                <label htmlFor="tipo-channel">Severidad</label>
                <select name="selection" id="" className="select">
                  <option value=""> --Seleccionar-- </option>
                  <option value="1">Severidad 1</option>
                  <option value="2">Severidad 2</option>
                  <option value="3">Severidad 3</option>
                </select>
                <span className="input-error">Campo obligatorio</span>
              </div>

              <div className="group input-select">
                <label htmlFor="tipo-channel">Origen</label>
                <select name="selection" id="" className="select">
                  <option value=""> --Seleccionar-- </option>
                  <option value="1">Santiago</option>
                  <option value="2">Valdivia</option>
                </select>
                <span className="input-error">Campo obligatorio</span>
              </div>
              <div className="group input-select">
                <label htmlFor="">Nombre encoder</label>

                <select name="selection" id="" className="select">
                  <option value=""> --Seleccionar-- </option>
                  <option value="">TL-HOST_109</option>
                  <option value="">TL-HOST_112</option>
                  <option value="">TL-HOST_113</option>
                  <option value="">TL-HOST_120</option>
                </select>
                <span className="input-error">Campo obligatorio</span>
              </div>
            </div>
            <div className="container-secondary">
              <div className="group input-number">
                <label htmlFor="">Mcast input</label>
                <div className="ip-address">
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <span className="input-error">Campo obligatorio</span>
              </div>

              <div className="group input-number">
                <label htmlFor="">Mcast output</label>
                <div className="ip-address">
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <span className="input-error">Campo obligatorio</span>
              </div>
              <div className="group input-number">
                <label htmlFor="">Ip Encoder</label>
                <div className="ip-address">
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                  <span>.</span>
                  <input
                    className="input"
                    type="number"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <span className="input-error">Campo obligatorio</span>
              </div>
            </div>
            <div className="group input-button">
              <button
                className="btn btn-primary"
                type="click"
                onClick={addContactHandleClick}
              >
                Añadir
              </button>
              <button className="btn btn-secondary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default AddChannels;
