import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function FormTemplate (props){

    const navigate = useNavigate();

    return(
        <div className="form-div">
            <Button className="mb-3 " variant="primary"  onClick={()=>navigate('../')}>
                Retour
            </Button>
            <h1>{props.title}</h1>
            
            <Form>
            {props.labels.map((label)=>(
                <Form.Group className="mb-3" >
                    <Form.Label className="mb-3" controlId="formBasicText">
                        {label}
                    </Form.Label>
                    <Form.Control className="mb-3" type='text' value={props.data ? props.data.name : ""} placeholder={label} id={label}>

                    </Form.Control>
                </Form.Group>
            ))}
             <Button className="m-3" variant="success" type="submit">
                Ajouter
            </Button>
            <Button className="m-3" variant="danger" >
                Supprimer
            </Button>
        </Form>
        </div>      
    )
}