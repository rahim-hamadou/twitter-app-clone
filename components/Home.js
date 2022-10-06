import styles from '../styles/Home.module.css';
//login et logout venant de component/user
import { login, logout } from '../reducers/user';
//import pour le popover et bouton

//Modal pour le popover de signin et signup
//import { Modal } from 'antd';

import { useEffect, useState } from "react";


function Home() {

  //les etats pour signup et signin
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  //l'état pour Modal (affichage ou pas)
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const handleRegister = () => {
   fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        dispatch(login({ username: signUpUsername, token: data.token }));
        setSignUpUsername('');
        setSignUpPassword('');
      }
    });
  };
  
  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
    .then(data => {
      if (data.result) {
        dispatch(login({ username: signInUsername, token: data.token }));
        setSignInUsername('');
        setSignInPassword('');
        //setIsModalVisible(false)
      }
    });
  };


  /*const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  let modalContent;
  if (!user.token) {
    modalContent = (
      <div className={styles.registerContainer}>
        <div className={styles.registerSection}>
          <p>Sign-up</p>
          <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
          <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
          <button id="register" onClick={() => handleRegister()}>Register</button>
        </div>
        <div className={styles.registerSection}>
          <p>Sign-in</p>
          <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
          <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
          <button id="connection" onClick={() => handleConnection()}>Connect</button>
        </div>
      </div>
    );
  }*/

  const popoverContentSignUp = (
    <div className={styles.registerSection}>
      <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
      <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
      <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
      <button id="register" onClick={() => handleRegister()}>Sign Up</button>
    </div>
  );

  const popoverContentSignIn = (
    <div className={styles.registerSection}>
      <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
      <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
      <button id="connection" onClick={() => handleConnection()}>Sign-in</button>
  </div>
  )

  
  
  return (
    <div className={styles.tweet}>
      <div className={styles.homeLeft}>
        <img src='fond-bleu.png' alt='Fond bleu' />
        <img src='logo-twitter-blanc.png' alt='Oiseau twitter' />
      </div>
      <main className={styles.main}>
        <div className={styles.titleUp}>
          <img src='logo-twitter-blanc.png' alt='Oiseau twitter' />
          <h1 className={styles.title}>See what's happening</h1>
          <h2 className={styles.joinMe}>Join Hackatweet today.</h2>
        </div>
        <div className={styles.connect}>
          <Popover title="Sign up" content={popoverContentSignUp} className={styles.popoverSignUp} trigger="click">
            <button id='SignUp'>Sign up</button>
          </Popover>
          <p>Already have an account?</p>
          <Popover title="Sign In" content={popoverContentSignIn} className={styles.popoverSignIn} trigger="click">
            <button id='SignIn'>Sign In</button>
          </Popover>
        </div>
      </main>
    </div>
  
  )
}

export default Home;
