import React, { Component }  from 'react';


class SignUp extends Component {
    state = { 
        email: "",
        password: "",
     }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() { 
        return ( 
        <>
            <form className="container" style={{marginTop: "30px"}} onSubmit = {this.handleSubmit}>
                <legend>{" "}<h3>SignUp</h3></legend >
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor  ="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </> );
    }
}
 
export default SignUp;