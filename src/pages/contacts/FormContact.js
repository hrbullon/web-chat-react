import { useState } from 'react';
import { useForm } from "react-hook-form";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { create, update } from '../../actions/contacts';

export const FormContact = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });

    const [uid, setUid] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = data => (uid == 0)? create(data) : update(uid, data);
  
    return (
        <>
            <div className="col col-12 mt-5">
                <Button onClick={handleShow}>
                    Nuevo contacto
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Nuevo Contacto</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="text" {...register("name", { required: true })} autoComplete="off" placeholder="nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" {...register("email", { required: true })} autoComplete="off" placeholder="name@example.com" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Cerrar
                        </Button>
                        <Button type="submit" variant="primary">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
  )
}
