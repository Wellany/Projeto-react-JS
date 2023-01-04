
import { Button } from '../Button/button';
import { Modal } from '../Modal/Modal';
import { Col, Row, ListGroup } from 'react-bootstrap';

export const ModalCart = ({ open }) => {
    return (

        <Modal
            title="Carrinho"
            open={open}
            controls={[{
                label: 'Carrinho de compra',
                variant: 'secondary',
                loading: false,
                loadingLabel: 'salvando',
                onClick: () => {
                    console.log('Clicou em criar pasta')
                }
            }
            ]}
        >

            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}></Col>
                        <Col xs={4}className="text-end" ><Button label="remover" loadingLabel="Salvando"/></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Modal>


    );
}

export default ModalCart;
