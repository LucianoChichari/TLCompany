
import "./CartItem.css"
import React,{useEffect, useContext} from "react";
const CartItem = ({item, cartDelete, cartRemove, cartAddOne}) => {
    
    const cartDeleteFromCartItem = () =>{
        cartDelete(item)

    }

    const cartRemoveFromCartItem = () =>{
        cartRemove(item,1)
    }

    const cartAddForCartItem = () =>{
        cartAddOne(item, 1)
    }
    return (
        <div className="cart_section">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                    <div className="cart_title"></div>
                    <div className="cart_items">
                        <ul className="cart_list">
                            <li className="cart_item clearfix">
                                <div className="cart_item_image"><img src={item.foto} alt=""></img></div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_title">Nombre</div>
                                        <div className="cart_item_text">{item.nombre}</div>
                                    </div>
                                    <div className="cart_item_color cart_info_col">
                                        <div className="cart_item_title">Cantidad</div>
                                        <div className="cart_item_text"><span ></span>{item.quantity}</div>
                                    </div>
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_title">Precio</div>
                                        <div className="cart_item_text">{item.precio}</div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_title"></div>
                                        <div className="cart_item_text"></div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_title"></div>
                                        <div className="cart_item_text"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title">Precio Total:</div>
                            <div className="order_total_amount">{item.precio*item.quantity}</div>
                        </div>
                    </div>
                    <div className="cart_buttons">
                    <button onClick={cartRemoveFromCartItem} type="button" className="button cart_button_clear" >Sacar Unidad</button>
                    <button onClick={cartAddForCartItem} type="button" className="button cart_button_clear">Agregar Unidad</button> 
                    <button onClick={cartDeleteFromCartItem} type="button" className="button cart_button_checkout">Borrar</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default CartItem
