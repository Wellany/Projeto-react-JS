
export const Cart = () => {
    return (
       <>
       <div class="container bg-white rounded-top mt-5" id="zero-pad">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-12 pt-3" id="carrinho">
                <div class="d-flex">
                    <div class="pt-1">
                        <h4>My T-shirt</h4>
                    </div>
                    <div class="ml-auto p-2"><a href="#" class="text-dark text-decoration-none"
                            id="mobile-font">LOGIN</a></div>
                    <div class="p-2"><a href="#" class="text-dark text-decoration-none a" id="mobile-font">HELP</a>
                    </div>
                </div>
                <div class="d-flex flex-column pt-4">
                    <div>
                        <h5 class="text-uppercase font-weight-normal">shopping bag</h5>
                    </div>
                    <div class="font-weight-normal">2 items</div>
                </div>
                <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
                    <div class="px-lg-5 mr-lg-5" id="produc">PRODUTOS</div>
                    <div class="px-lg-5 ml-lg-5" id="prc">PREÇO</div>
                    <div class="px-lg-5 ml-lg-1" id="quantity">QUANTIDADE</div>
                    <div class="px-lg-5 ml-lg-3" id="total">TOTAL</div>
                </div>
                {/* <!--produto 1--> */}
                <div id="produto0" class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                    <div class="d-flex flex-row align-items-center">
                        <div><img
                                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                width="150" height="150" alt="" id="image"/></div>
                        <div class="d-flex flex-column pl-md-3 pl-1">
                            <div>
                                <h6>COTTON T-SHIRT</h6>
                            </div>
                            <div>Art.No:<span class="pl-2">091091001</span></div>
                            <div>Color:<span class="pl-3">White</span></div>
                            <div>Size:<span class="pl-4"> M</span></div>
                        </div>
                    </div>
                    <div class="pl-md-0 pl-1"><b>R$25.00</b></div>
                    <div class="pl-md-0 pl-2">
                        <span class="fa fa-minus-square text-secondary" onclick="removerItem(0)"></span><span class="px-md-3 px-1" id="quantidade0">0</span>
                        <span class="fa fa-plus-square text-secondary" onclick="adicionarItem(0)"></span>
                    </div>
                    <div class="pl-md-0 pl-1"><b>R$</b> <span id="total0"></span></div>
                    <div class="close">&times;</div>
                </div>
                {/* <!--produto2--> */}
                <div id="produto1" class="d-flex flex-row justify-content-between align-items-center pt-4 pb-3 mobile">
                    <div class="d-flex flex-row align-items-center">
                        <div><img
                                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                width="150" height="150" alt="" id="image"/></div>
                        <div class="d-flex flex-column pl-md-3 pl-1">
                            <div>
                                <h6>WHITE T-SHIRT</h6>
                            </div>
                            <div>Art.No:<span class="pl-2">056289891</span></div>
                            <div>Color:<span class="pl-3">White</span></div>
                            <div>Size:<span class="pl-4"> XL</span></div>
                        </div>
                    </div>
                    <div class="pl-md-0 pl-1"><b>R$15.00</b></div>
                    <div class="pl-md-0 pl-2">
                        <span class="fa fa-minus-square text-secondary" onclick="removerItem(1)"></span><span class="px-md-3 px-1" id="quantidade1">0</span><span
                            class="fa fa-plus-square text-secondary" onclick="adicionarItem(1)"></span>
                    </div>
                    <div class="pl-md-0 pl-1"><b>R$</b> <span id="total1"></span></div>
                    <div class="close">&times;</div>
                </div>

            </div>
        </div>
    </div>
    <div class="container bg-light rounded-bottom py-4" id="zero-pad">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-12">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <button class="btn btn-sm bg-light border border-dark">GO BACK</button>
                    </div>
                    <div class="px-md-0 px-1" id="footer-font">
                        <b class="pl-md-4">SUBTOTAL R$<span class="pl-md-4" id="valorTotalCompra"></span></b>
                    </div>
                    <div>
                        <button class="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
    );
}

export default Cart;
