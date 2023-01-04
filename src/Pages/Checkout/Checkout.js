
export const Checkout = () => {
    return (
       <>
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- temos essa linha e a prof não?? -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planeta Batata</title>
    <link rel="icon" href="/Imagens/Planeta.ico">

    
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <header class="container-fluid p-2 bg-warning text-center">
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <a class="navbar-brand" href="#">Planeta Batata</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
                aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end bg-warning" id="conteudoNavbarSuportado">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home<span class="sr-only">(página atual)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://encurtador.com.br/kNR57" id="navbarDropdown"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cardápio
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Batatas</a>
                            <a class="dropdown-item" href="#">Coxinhas e Bolinhos</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Hamburguer</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="https://wa.me/5581996717699">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>



    <main class="conteiner">
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72"
                height="72">
            <h2>Pagamento</h2>
            <p class="lead">Finalize sua comprar.</p>
        </div>

        <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Seu carrinho</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Nome do produto</h6>
                            <small class="text-muted">Breve descrição</small>
                        </div>
                        <span class="text-muted">R$12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Segundo produto</h6>
                            <small class="text-muted">Breve descrição</small>
                        </div>
                        <span class="text-muted">R$8</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Terceiro item</h6>
                            <small class="text-muted">Breve descrição</small>
                        </div>
                        <span class="text-muted">R$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Código de promoção</h6>
                            <small>CODIGOEXEMEPLO</small>
                        </div>
                        <span class="text-success">-R$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (BRL)</span>
                        <strong>R$20</strong>
                    </li>
                </ul>

                <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Código promocional">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">Resgatar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Dados do comprador</h4>
                <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="primeiroNome">Nome</label>
                            <input type="text" class="form-control" id="primeiroNome" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                É obrigatório inserir um nome válido.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="sobrenome">Sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                É obrigatório inserir um sobre nome válido.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="nickname">Nickname</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="nickname" placeholder="Nickname" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                Seu nickname é obrigatório.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Opcional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="fulano@exemplo.com">
                        <div class="invalid-feedback">
                            Por favor, insira um endereço de e-mail válido, para atualizações de entrega.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="endereco">Endereço</label>
                        <input type="text" class="form-control" id="endereco" placeholder="Rua dos bobos, nº 0"
                            required>
                        <div class="invalid-feedback">
                            Por favor, insira seu endereço de entrega.
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="pais">País</label>
                            <select class="custom-select d-block w-100" id="pais" required>
                                <option value="">Escolha...</option>
                                <option>Brasil</option>
                            </select>
                            <div class="invalid-feedback">
                                Por favor, escolha um país válido.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="estado">Estado</label>
                            <select class="custom-select d-block w-100" id="estado" required>
                                <option value="">Escolha...</option>
                                <option>Pernambuco</option>
                            </select>
                            <div class="invalid-feedback">
                                Por favor, insira um estado válido.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cep">CEP</label>
                            <input type="text" class="form-control" id="cep" placeholder="" required>
                            <div class="invalid-feedback">
                                É obrigatório inserir um CEP.
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="mesmo-endereco">
                        <label class="custom-control-label" for="mesmo-endereco">Endereço de entrega é o mesmo que o de
                            cobrança.</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="salvar-info">
                        <label class="custom-control-label" for="salvar-info">Lembrar desta informação, na próxima
                            vez.</label>
                    </div>
                    <hr class="mb-4">

                    <h4 class="mb-3">Pagamento</h4>

                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credito" name="paymentMethod" type="radio" class="custom-control-input" checked
                                required>
                            <label class="custom-control-label" for="credito">Cartão de crédito</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debito" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="debito">Cartão de débito</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-nome">Nome no cartão</label>
                            <input type="text" class="form-control" id="cc-nome" placeholder="" required>
                            <small class="text-muted">Nome completo, como mostrado no cartão.</small>
                            <div class="invalid-feedback">
                                O nome que está no cartão é obrigatório.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-numero">Número do cartão de crédito</label>
                            <input type="text" class="form-control" id="cc-numero" placeholder="" required>
                            <div class="invalid-feedback">
                                O número do cartão de crédito é obrigatório.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiracao">Data de expiração</label>
                            <input type="text" class="form-control" id="cc-expiracao" placeholder="" required>
                            <div class="invalid-feedback">
                                Data de expiração é obrigatória.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                            <div class="invalid-feedback">
                                Código de segurança é obrigatório.
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Finalizar</button>
                </form>
            </div>
        </div>
    </main>

    <body>
        <footer class="container-fluid bg-warning">
            <h3>Endereço</h3>
            <p>Rua João Fragoso de Medeiros, nº10, Candeias, Pernambuca, BR CEP: 54400-400</p>
            <h3>Contatos:</h3>
            <p>Telefone: (83) 3531-7322</p>
            <p>Whatsapp: (83) 991234567</p>
            <p>Email: planetabatata1@email.com</p>
            <p>© 2022 - Planeta Batata</p>

            <label>Fale conosco</label><br>
            <input type="text" name="Nome"><br><br>
            <textarea rows="5" name="Comentário"> </textarea> <br><br>
            <button>Enviar</button><br><br><br><br>
            <p> Desenvolvido por Wellany</p>
        </footer>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
    </body>

    <!-- Modal -->
    <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Suas compras</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Produto adicionado ao carrinho!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Continuar comprando</button>
                    <button type="button" class="btn btn-success">Finalizar compra</button>
                </div>
            </div>
        </div>
    </div>


       </>
    );
}

export default Checkout;
