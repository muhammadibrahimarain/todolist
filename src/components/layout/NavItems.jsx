import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/authActions';
import { connect } from 'react-redux';

const NavItems = ({signOut, uid}) => {
    if(uid){
        return (
            <Link to ="/signin" className= "nav-link" onClick={signOut}>  
                Sign Out  
            </Link>
        )
    } 
    else{
        return (
        <>
            
            <Link to ="/signup" className= "nav-link">  
                SignUp  
            </Link>
            <Link to ="/signin" className= "nav-link">  
                SignIn  
            </Link>
        </>
        ); 
    }
};



const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return{
        uid: uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavItems);