import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Register.module.css';

import coin from '../../../img/coin.png';

const Register = () => {
    let history = useHistory();
    const inputFname = useRef(null);
    const inputLname = useRef(null);
    const inputEmail = useRef(null);
    const inputPass = useRef(null);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const registerFormHandler = () => {
        if (!firstname) {
            inputFname.current.style.border = "1px solid red";
        } if (!lastname) {
            inputLname.current.style.border = "1px solid red";
        } if (!email) {
            inputEmail.current.style.border = "1px solid red";
        } if (!password) {
            inputPass.current.style.border = "1px solid red";
        } else {

            let userRegisterData = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });
            // console.log(userRegisterData)
            fetch('http://0.0.0.0:3000/register', {
                method: 'POST',
                body: userRegisterData,
                // cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(res => {
                        alert('REGISTER SUCCESSFUL');
                        console.log(res);
                        history.push('/login');
                })
                .catch(error => {
                    console.log('Error:', error);
                    alert("error", JSON.stringify(error));
                });
            }
    }

    return (
        <section className={styles.section}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="firstname"
                    type="text" 
                    placeholder="First Name"
                    ref={inputFname}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="lastname"
                    type="text" 
                    placeholder="Last Name"
                    ref={inputLname}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    ref={inputEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    ref={inputPass}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>

                <button 
                    className={["btn",styles.buttLogin].join(' ')}
                    onClick={registerFormHandler}
                >
                    REGISTER
                </button>

                <br/>
                <br/>
                <Link to="/login" className={styles.forgotP}>
                    Already have an account? Login here
                </Link>
           

        </section>
    );
};

export default Register;