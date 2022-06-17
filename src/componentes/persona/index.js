import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabla } from './tabla';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ModalData } from './modalData';

const codigo=34;
const url = "http://test3.merx.bo/?cod="+codigo;

export const Persona = () => {
    //estado de los objetos
    const [ID, setID] = useState("");
    const [Iname, setName] = useState("");
    const [IlastName, setLastName] = useState("");
    const [Ihobby, setHobby] = useState("");
    const [Iother, setOther] = useState("");

    //estado de cambio
    const [cambio, setCambio] = useState(true);
    //estado del modal edit
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //modal edit
    const modalEdit = persona => {
        handleShow();
        setCambio(false);
        setName(persona.name);
        setLastName(persona.lastName);
        setHobby(persona.hobby);
        setOther(persona.other);
        setID(persona.id);
    }
    //modal save
    const modalGuardar = () => {
        handleShow();
        setCambio(true);
        
    }

    //estado de lista
    const [list, setList] = useState([]);
    //get persona
    const getPersona = () => {
        axios.get(url)
            .then(resp => {
                setList(resp.data.data);
                console.log(resp.data.data);
                handleClose();
            })
    }
    useEffect(() => {
        getPersona();
    }, [])

    const postPersona = values => {
        let obj = {
            name: values.name,
            lastName: values.lastName,
            hobby: values.hobby,
            other: values.other,
            cod:codigo
        }
        axios.post(url, obj)
            .then(resp => {
                getPersona();
            })
    }
    const putPersona = values => {
        let obj = {
            name: values.name,
            lastName: values.lastName,
            hobby: values.hobby,
            other: values.other,
            id: ID,
            cod:codigo
        }
        axios.put(url, obj)
            .then(resp => {
                getPersona();
                handleClose();
            })
    }

    return (
        <Container>
            <Button onClick={modalGuardar} variant="warning" >Agregar Persona</Button>
            <Tabla
                modalEdit={modalEdit}
                list={list}
            ></Tabla>

            <ModalData
                postPersona={postPersona}
                putPersona={putPersona}
                Iname={Iname}
                IlastName={IlastName}
                Ihobby={Ihobby}
                Iother={Iother}
                cambio={cambio}
                show={show}
                handleClose={handleClose}
            ></ModalData>

        </Container>

    );
}