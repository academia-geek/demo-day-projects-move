import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../redux/actions/authReducer';

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline"><img
                                alt=""
                                src="https://res.cloudinary.com/dmaviub4l/image/upload/v1653989340/ihrda8sczta1nboafcdq.png"
                                width="180"
                                className="d-inline-block align-top"
                            /></span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Inicio</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Usuarios</span> </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Perfil</span></Link>
                            </li>
                            <li>
                                <Link to="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Vehiculos</span> </Link>
                                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Patinetas</span> 1</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Bicicletas</span> 2</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Motos</span> 3</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Carros</span> 4</Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => dispatch(startLogout())}>
                                <Link to="#" class="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Cerrar Sesión</span> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar