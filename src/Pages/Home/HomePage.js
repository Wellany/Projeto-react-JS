import { CardProd } from "../../Components/Cards/CardProd";
import { Container, Row, Col } from "react-bootstrap";
import Hamburguer1 from "../../Images/Hamburguer (2).JPG";
import Modal from "../../Components/Modal/Modal";
import ModalCart from "../../Components/modalcart/modalCart";
import { ModalCK } from "../../Components/modalCheckout/ModalCk";
export const HomePage = () => {

    const handleClose = () => {

    }
    return (
        <div>

            <Container id="cardapio" fluid>
                <div className="margin text-center" id="hamburger">
                    <h2 className="h2">Cardapio</h2>

                    <h2>Hamburguer</h2>
                    <Row >
                        <Col className="text-center" xs={12} md={4}>
                            <CardProd className="card"
                            image={Hamburguer1}
                            title="X Salada no Pão Francês Redondo"

                            text="O clássico X-Salada na versão super moderna com pão de hambúrguer do tipo
                        cervejinha." />
                        </Col>
                    </Row>
                </div>
                <div className="margin" id="batata">
                    <h2>Batata</h2>
                    <Row>
                        <Col xs={12} md={4}><CardProd
                            image={Hamburguer1}
                            title="X Salada no Pão Francês Redondo"

                            text="O clássico X-Salada na versão super moderna com pão de hambúrguer do tipo
                        cervejinha." />
                        </Col>
                    </Row>
                </div>
                <div className="margin" id="Salgados">
                    <h2>Salgados</h2>
                    <Row>
                        <Col xs={12} md={2}><CardProd
                            image={Hamburguer1}
                            title="X Salada no Pão Francês Redondo"

                            text="O clássico X-Salada na versão super moderna com pão de hambúrguer do tipo
                        cervejinha." />
                        </Col>
                    </Row>
                </div>
                <div className="margin" id="bebidas">
                    <h2>Bebidas</h2>
                    <Row>
                        <Col xs={12} md={2}><CardProd
                            image={Hamburguer1}
                            title="X Salada no Pão Francês Redondo"

                            text="O clássico X-Salada na versão super moderna com pão de hambúrguer do tipo
                        cervejinha." />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid>
<Row className="bg-warning QS">
<h3 class="text-center">Quem somos</h3>

    <Col xs={12} md={6}>
    <p>A Planeta Batata é uma lanchonete em Candeias no Recife, que vem encantando os seus clientes com
                seu variado cardápio de lanches e porções de dar água na boca.</p>
            <p>Se você procura um ótimo lugar em Candeias para se encontrar com os amigos e familiares para matar aquela
                fome, venha até a Planeta Batata e experimente os deliciosos lanches e porções ou confira nosso cardápio
                de delivery e faça o seu pedido.</p>
                
    </Col>
    <Col  xs={12} md={6}>
            <div class="F-QS" alt="Imagem Quem somos"> </div>
    </Col>
</Row>
            </Container>

            {/* <ModalCK closeButton={handleClose} open={handleClose}/>
            <ModalCart open={false}/> */}
            <Modal
                open={false}
                title={"Produto adicionado ao carrinho"}
                controls={[
                    {
                        label: 'Continuar comprando',
                        variant: 'primary',
                        onClick: () => {
                            console.log('rr');
                        }
                    }, {
                        label: 'Finalizar compra',
                        variant: 'success',
                        onClick: () => {
                            console.log('rr');
                        }
                    }
                ]}
            >
                <p>posso colocar o quer quiser aqui!!</p>
            </Modal>
        </div>

    );
}

export default HomePage;
