import { useState } from "react";
import { toast } from "react-toastify";

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!password || password.length <= 0 || !email || email.length <= 0) {
            toast.error("Soory !! Your Email/Password did not match.",{hideProgressBar: true,autoClose: 1500});
            setEmail("");
            setPassword("");
        } else {
            let loginCred = {
                email: email,
                password: password
            }
            console.log(loginCred);
            toast.success("You are successfully logged in",{hideProgressBar: true,autoClose: 1500});
        }
    }
    return (
        <div id="login_container">
            <h2>
                Welcome Back
            </h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    Your Email:
                </label>
                <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} placeholder="wxy@gmail.com" required />
                <label htmlFor="password">
                    Your Password:
                </label>
                <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} placeholder="your-password" required />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;