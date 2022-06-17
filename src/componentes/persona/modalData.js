import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export const ModalData = ({ handleClose, show,
    cambio,
    Iname,
    IlastName,
    Ihobby,
    Iother,
    postPersona,
    putPersona
}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{cambio ? "Agregar" : "Editar"} usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Formik
                    initialValues=
                    {
                        cambio ?
                            { name: "", lastName: "", hobby: "", other: "" }
                            :{name:Iname, lastName:IlastName, hobby:Ihobby, other:Iother }
                    }
                    onSubmit={(values)=>{
                        cambio?postPersona(values):putPersona(values);
                    }}
                    validate={(values)=>{
                        let errors={}
                        if(values.name==="")
                        errors.name="ingrese nombre";
                        if(values.lastName==="")
                        errors.lastName="ingrese apellido";
                        if(values.hobby==="")
                        errors.hobby="ingrese pasatiempo";
                        if(values.other==="")
                        errors.other="ingrese algo mas";

                        return errors;

                    }}

                >
                    {() => (
                        <Form id='algo'>
                            <div>
                                <label  htmlFor='inputName' className='form-label'>Nombre</label>
                                <Field id='inputName' className='form-control' name='name' />
                                <ErrorMessage name='name'>
                                    {(errors)=><p className='text-danger'>{errors}</p>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor='inputLastName' className='form-label'>Apellido</label>
                                <Field id='inputLastName' className='form-control' name='lastName' />
                                <ErrorMessage name='lastName'>
                                    {(errors)=><p className='text-danger' >{errors}</p>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor='inputHobby' className='form-label'>Pasatiempo</label>
                                <Field id='inputhobby' className='form-control' name='hobby' />
                                <ErrorMessage name='hobby'>
                                    {(errors)=><p className='text-danger'>{errors}</p>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor='inputother' className='form-label'>Otros</label>
                                <Field id='inputOther' className='form-control' name='other' />
                                <ErrorMessage name='other'>
                                    {(errors)=><p className='text-danger' >{errors}</p>}
                                </ErrorMessage>
                            </div>

                        </Form>
                    )}

                </Formik>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" type='submit' form='algo'>
                    {cambio ? "Agregar" : "Editar"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}