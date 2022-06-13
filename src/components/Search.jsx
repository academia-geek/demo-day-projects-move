import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

const Search = () => {
    const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string().required('campo requerido')
    }),
    onSubmit: ({ search }) => {
      console.log(search)
    //   dispatch(searchVehicleAsync(search))
    }
  })
  return (
    <div >
      <center className="m-2">
        <Form className="d-flex " onSubmit={formik.handleSubmit}>
          <FormControl
            type="search"
            name="search"
            placeholder="Buscar Vehículo"
            className="me-0 border-success"
            onChange={formik.handleChange}
          />
          <Button type="submit" name="search" variant="success"><i className="fas fa-search"></i></Button>
        </Form>
      </center>
    </div>
  )
}

export default Search