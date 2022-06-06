import React from 'react'

const RegisterPrest = () => {
  return (
    <div style={{ marginLeft: '120px' }}>
      <h1 className="text-center p-3">Registro Prestador</h1>
      <div
        className=" d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card p-5 m-5">
          <div className='d-flex justify-content-center px-5'><img
            alt=""
            src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png" width="180"/>
          </div>
          <div className="card-body w-100"></div>
          <form >
            <input className="rounded-end form-control my-3" type="text" name="cc_user" placeholder="Documento de Identidad" />
            <input className="rounded-end form-control my-3" type="text" name="first_name" placeholder="Nombres" />
            <input className="rounded-end form-control my-3" type="text" name="last_name" placeholder="Apellidos" />
            <input className="rounded-end form-control my-3" type="email" name="email" placeholder="Email" />
            <input className="rounded-end form-control my-3" type="text" name="city" placeholder="Ciudad" />
            <input className="rounded-end form-control my-3" type="age" name="age" placeholder="Edad" />
            <input className="rounded-end form-control my-3" type="password" name="password" placeholder="Contraseña" />
            <input className="rounded-end form-control my-3"
              type="password"
              name="confirmPassword"
              placeholder="Repetir contraseña"
            />
            <div className="mt-5 text-center">
              <button className="btn bg-success text-white me-2" type="submit" >
                Registro para Prestador
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPrest