import { Card, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";

export const InputSearch = ({ handleSearch }) => {

    const { register } = useForm({
        defaultValues: {
            search: ''
        }
    });

    return (
        <>
            <Card>
                <Card.Body>
                    <Form.Control {...register("search", { onChange: handleSearch })} autoComplete="off" placeholder="Buscar contacto..."/>
                </Card.Body>
            </Card>
        </>
    )
}