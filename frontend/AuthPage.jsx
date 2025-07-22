import axios from "axios";
import PropType from "prop-types";


const AuthPage = (props) =>{
    const onSubmit = (e) =>{
        e.preventDefault();
        const {value} = e.target[0];
        axios.post("http://localhost:3001/authenticate", {username})
        .then((r) => props.onAuth({...r.data, secret: value}))
        .catch((e) => console.log("Auth Error", e))
    }
    return(
        <div className="background">
         <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Hello </div>

            <div className="form-subtitle">Enter your Username</div>
            <div className="auth">
                <div className="auth-lable">Username</div>
                <input className="auth-input" name="username"/>
                <button className="auth-button" style="submit">
                    Enter
                </button>
            </div>

         </form>
        </div>
    );
};

AuthPage.PropTypes ={
    onAuth: PropType.func.isRequired,
}

export default AuthPage;
