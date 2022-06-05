import React from 'react'

const Users = () => {
  return (
      <div className='container fluit col'>
    <table class="table table-responsive table-bordered">
    <thead>
        <tr>
            <th>Documento de identificación</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Ciudad</th>
            <th>Edad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>123456789</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>Medellín</td>
            <td>28 años</td>
        </tr>
        <tr>
            <td>123456789</td>
            <td>Smith</td>
            <td>Thomas</td>
            <td>smith@example.com</td>
            <td>Medellín</td>
            <td>28 años</td>
        </tr>
        <tr>
            <td>123456789</td>
            <td>Merry</td>
            <td>Jim</td>
            <td>merry@example.com</td>
            <td>Medellín</td>
            <td>28 años</td>
        </tr>
    </tbody>
</table>
</div>
  )
}

export default Users