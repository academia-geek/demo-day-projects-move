import React, { useRef, useState } from 'react'
import ReactHTMLDatalist from 'react-html-datalist';

const RegisterPrest = () => {
  const [formValues, setFormValues] = useState();
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLenderSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const user = JSON.parse(localStorage.getItem("user")) || "";
    fetch("http://35.211.155.160:5000/auth/users/lender", {
      body: JSON.stringify({
        cc_user_fk: formValues.cc_user,
        conductor: formValues.conductor,
        active_lender: formValues.active_lender,
        balance_lender: formValues.balance_lender,
        total_loans: formValues.total_loans,
        commissions: formValues.commissions
      }),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
    form.current.reset();
  };

  return (
    <div style={{ marginLeft: "120px" }}>
      <h1 className="text-center p-3">Solicitar ser Prestador</h1>
      <div className=" d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="card p-5 m-5">
          <div className="card-body w-100"></div>
          <form onSubmit={handleLenderSubmit} ref={form}>
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="cc_user_fk"
              placeholder="Tu CC de Identidad"
              onChange={handleChange}
            />
            <small>¿Es conductor? </small>
            <ReactHTMLDatalist
              name="conductor"
              onChange={handleChange}
              options={[
                { text: "Si", value: true },
                { text: "No", value: false },
              ]}
            />
            <hr />
            <small>¿Es un prestador activo? </small>
            <ReactHTMLDatalist
              name="active_lender"
              onChange={handleChange}
              options={[
                { text: "Si", value: true },
                { text: "No", value: false },
              ]}
            />
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="balance_lender"
              placeholder="Balance del Prestador"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="total_loans"
              placeholder="Prestamos totales"
              onChange={handleChange}
            />
            <input
              className="rounded-end form-control my-3"
              type="number"
              name="commissions"
              placeholder="Comision"
              onChange={handleChange}
            />
            <div className="mt-5 text-center">
              <button className="btn bg-success text-white me-2" type="submit">
                Registro para Prestador
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPrest