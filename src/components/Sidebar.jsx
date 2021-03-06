import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../redux/actions/authReducer';

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="container-fluid position-absolute">
            <div className="row ">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
                        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline"><img
                                alt=""
                                src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
                                width="180"
                                className="d-inline-block align-top"
                            /></span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                        <li>
                                <Link to="/homepriv" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-home text-success"></i> <span className="ms-1 d-none d-sm-inline">Home</span></Link>
                            </li>
                            <li>
                                <Link to="/profile" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-user text-success"></i> <span className="ms-1 d-none d-sm-inline">Perfil</span></Link>
                            </li>
                            <li>
                                <Link to="/rpresta" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-address-card text-success"></i> <span className="ms-1 d-none d-sm-inline">Afiliarse</span> </Link>
                            </li>
                            <li>
                                <Link to="/homep" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-address-card text-success"></i> <span className="ms-1 d-none d-sm-inline">Prestador</span> </Link>
                            </li>
                            <li>
                                <Link to="/vehicles" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-car text-success"></i> <span className="ms-1 d-none d-sm-inline">Veh??culos</span> </Link>
                            </li>
                            <li onClick={() => dispatch(startLogout())}>
                                <Link to="#" className="nav-link px-0 align-middle text-success">
                                    <i className="fas fa-user-lock text-success"></i> <span className="ms-1 d-none d-sm-inline">Cerrar Sesi??n</span> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar