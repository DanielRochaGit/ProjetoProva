import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({

    type: CartActionTypes.ADDPRODUCT,
    payload,


});

export const removeProductsFromCart = (payload) => ({

      type:CartActionTypes.REMOVE_PRODUCT,
      payload


});

export const incresasProductQuant = (payload) => ({

    type:CartActionTypes.INCREASE_PRODUCT_QUANT,
    payload


});


export const descreaseProductQuant = (payload) => ({

    type:CartActionTypes.DESCREASE_PRODUCT_QUANT,
    payload


});