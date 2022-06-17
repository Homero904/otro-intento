import { Button } from 'react-bootstrap';

export const Item = ({persona,i,modalEdit}) => {
    return (
        <tr>
            <td>{i+1}</td>
            <td>{persona.name}</td>
            <td>{persona.lastName}</td>
            <td>{persona.hobby}</td>
            <td>{persona.other}</td>
            <td>
                <Button onClick={()=>modalEdit(persona)} variant="warning" >Editar</Button>
                <Button variant="danger" >Eliminar</Button>
            </td>
        </tr>
    );
}