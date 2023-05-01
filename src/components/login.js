import react from 'react';
import '../css/login.css';

class Login extends react.Component{
    checkCredentials(name,pass){
        if(!(name===pass))
            alert("name, password must be same!");
    }
    render(){
        return (
            <div id="loging" className = "login">
                <section id="form-section">
                    <form action="/" id="form">
                        <h1 className="form-heading">Sign In</h1>
                        <input id="username" className="form-input" type="text"  placeholder="Enter Username" minlength="3" autofocus />
                        <input id="pass" className="form-input" type="password"  placeholder="Enter Password" minlength="3" />
                        <input id="form-btn" type="submit" value="LogIn" />
                    </form>
                </section>
            </div>
        );
    }
}


export default Login;