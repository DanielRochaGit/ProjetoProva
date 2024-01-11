import { useState, useMemo } from "react";
import { useSelector, useDispatch} from "react-redux";
import rootReducer from "../../redux/root-reducer";
import {loginUser, logoutUser} from "../../redux/actions"


// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selector";




function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);


const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);
const {products} = useSelector(rootReducer => rootReducer.cartReducer);


const dispatch = useDispatch()



const productsCount = useSelector(selectProductsCount);

// const productsCount = useMemo(()=> {
//    return products.reduce((acc,curr) => acc + curr.quantity,0);

// },[products]);


console.log(currentUser);

const handlerLoginClick = () =>{
    dispatch(loginUser({name : "Daniel Rocha" , email : "daniel@outlook.com"}));
}


const handlerLogoutClick = () =>{
  dispatch((logoutUser()));

}
const handleCartClick = () => {
    setCartIsVisible(true);
  };


  return (
    <Styles.Container>
      <Styles.Logo>Prova Daniel Rocha</Styles.Logo>
      <Styles.Buttons>
       {currentUser ? (<div onClick={handlerLogoutClick}>Sair</div>) : ( <div onClick={handlerLoginClick}>Login</div>)  }
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
