import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import rootReducer from "../../redux/root-reducer";
import UserActionTypes from "../../redux/action-types";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";




function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);


const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);
const dispatch = useDispatch()

console.log(currentUser);

const handlerLoginClick = () =>{
  dispatch({
     type :  UserActionTypes.LOGIN
     
  });
}



const handlerLogoutClick = () =>{
  dispatch({
     type :  UserActionTypes.LOGOUT
     
  });

}



const handleCartClick = () => {
    setCartIsVisible(true);
  };




  return (
    <Styles.Container>
      <Styles.Logo>Prova Daniel Rocha</Styles.Logo>
      <Styles.Buttons>
       {currentUser ? (<div onClick={handlerLogoutClick}>Sair</div>) : ( <div onClick={handlerLoginClick}>Login</div>)  }
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
