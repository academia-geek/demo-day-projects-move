import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-dark text-center text-white mt-3 py-5 d-flex justify-content-around">
            <div >
                <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png' alt='logo' width="160"
                    className="d-inline-block align-top" />
            </div>
            <div className="d-flex flex-column">
            <i className="fab fa-whatsapp"></i><span className="p-3"> +57 350 4502929</span>
            <i className="fas fa-envelope-square"></i><span className="p-3"> cuentacorreomove@gmail.com</span>
            </div>
            <div>
            </div>
            <div className="d-flex flex-column">
            <i className="fab fa-facebook-f"></i><span className="p-3" href='/'> moverentayventa</span>
            <i className="fab fa-instagram"></i><span className="p-3" href='/'> moverenta</span>
            </div>
            <div className="d-flex flex-column" >
            <i className="fas fa-map-marked-alt"></i><span className="p-5">Medellín, Colombia</span>
            </div>
            <div>
            </div>
        </footer>
    )
}

export default Footer