import React from 'react'

const Footer = () => {
    return (
        <footer id='footer'
            className="pb-5 text-center text-lg-start text-white bg-dark">
            <div className="  container p-4 pb-0">
                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png' alt='logo' width="160"/>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <p><i className="fab fa-whatsapp mr-3"></i> +57 350 4502929</p>
                            <p><i className="fas fa-envelope-square mr-3"></i> cuentacorreomove@gmail.com</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <p><i className="fab fa-facebook-f"></i> moverentayventa</p>
                            <p><i className="fab fa-instagram"></i> moverenta</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <p><i className="fas fa-map-marked-alt"></i> Medellín, Colombia</p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer