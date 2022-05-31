import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authReducer';

const Vehicles = () => {
      const dispatch = useDispatch();
  return (
    <div>
      Vehicles
      <button onClick={() => dispatch(startLogout())}>
        Cerrar
      </button>
    </div>
  );
}

export default Vehicles