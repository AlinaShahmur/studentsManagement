import { useState } from "react"
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./UI/Input";
import classes from './Login.module.css'


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const loginHandler = () => {
        if (emailIsValid && passwordIsValid) {
            localStorage.setItem('isLoggedIn', '1')
            window.location.reload()
        }
    }
    const validateEMailHandler = () => {
        if (email.includes('@')) {
            setEmailIsValid(true)
        }
    }
    const validatePasswordHandler = () => {
        if (password.length > 8 ) {
            setPasswordIsValid(true)
        }
    }
    return (

            <div className = {classes.login}>
                <Card>
                    <h2>Login</h2>
                    <Input title = 'Email'
                            input = 
                            {{id: 'email',
                            type: 'email',
                            onChange: (e) => setEmail(e.target.value),
                            onBlur: validateEMailHandler
                            }}
                    />
                                    <Input title = 'Password'
                            input = 
                            {{id: 'password',
                            type: 'password',
                            onChange: (e) => setPassword(e.target.value),
                            onBlur: validatePasswordHandler
                            }}
                    />
                    <Button title = 'Login' onClick = {loginHandler} style = {{color: "#FFFFFF", backColor: "#009999"}}/>
                </Card>
            </div>
        
    )
}

export default Login