import {toast} from 'react-toastify';

const authReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN":
            toast("Welcome back user..");
            return state;

        case "SIGN_IN_ERR":
            toast.error("Sign In error");
            return state;

        case "SIGN_OUT":
            toast("You signed out");
            return state;

        case "SIGN_UP":
            toast("Welcome to TodoApp..");
            return state;

        case "SIGN_UP_ERR":
            toast.error("Sign Up error");
            return state;

        
        default: return state;
}
}

export default authReducer;