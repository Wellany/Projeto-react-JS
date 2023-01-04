import { useState } from "react";
import Modal from "../Modal/Modal";
import { Form } from "react-bootstrap";

export const ModalCK = ({ open }) => {
    const [ckName, setckName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('submit', ckName)
    };

    const handleChange = (e) => {
        setckName(e.target.value);
    }
    return (
        <Modal
            title="Criar pasta"
            open={open}
            controls={[
                {
                    label: 'Criar e salvar',
                    loadingLabeI: 'Criando',
                    variant: 'primary',
                    loading: false,
                    type: 'submit',
                    form:"finalizar"
                }
            ]}>

            <Form onSubmit={handleSubmit} id="finalizar">
                <Form.Group>
                    <Form.Label> Nome da pasta </Form.Label>
                    <Form.Control type="text" placeholder="Matemática" value={ckName} onChange={handleChange} />
                </Form.Group>
            </Form>
        </Modal>
    )
}
