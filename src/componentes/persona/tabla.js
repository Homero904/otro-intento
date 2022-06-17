import { Item } from "./item";
import { Table } from 'react-bootstrap';
export const Tabla = ({list,modalEdit}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Pasatiempo</th>
                    <th>Otros</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {list.map((obj,i)=>(
                    <Item
                    modalEdit={modalEdit}
                    key={i}
                    persona={obj}
                    i={i}
                    ></Item>
                ))}
            </tbody>
        </Table>
    );
}