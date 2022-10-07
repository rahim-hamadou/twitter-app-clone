import styles from "../styles/Home.module.css";
//login et logout venant de component/user
import { login, logout } from "../reducers/user";
//import pour le popover et bouton
import { Modal, Button, DatePicker } from "antd";
import "antd/dist/antd.css";
//Modal pour le popover de signin et signup
//import { Modal } from 'antd';

import { useEffect, useState } from "react";

function Home() {
	//les etats pour signup et signin
	const [signUpFirstname, setSignUpFirstname] = useState("");
	const [signUpUsername, setSignUpUsername] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [signInUsername, setSignInUsername] = useState("");
	const [signInPassword, setSignInPassword] = useState("");

	//l'état pour Modal (affichage ou pas)
	//const [isModalVisible, setIsModalVisible] = useState(false);

	const handleRegister = () => {
		fetch("http://localhost:3000/users/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpUsername("");
					setSignUpPassword("");
				}
			});
	};

	const handleConnection = () => {
		fetch("http://localhost:3000/users/signin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername("");
					setSignInPassword("");
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
			<input
				type="text"
				placeholder="Firstname"
				id="signUpFirstname"
				onChange={(e) => setSignUpFirstname(e.target.value)}
				value={signUpFirstname}
			/>
			<input
				type="text"
				placeholder="Username"
				id="signUpUsername"
				onChange={(e) => setSignUpUsername(e.target.value)}
				value={signUpUsername}
			/>
			<input
				type="password"
				placeholder="Password"
				id="signUpPassword"
				onChange={(e) => setSignUpPassword(e.target.value)}
				value={signUpPassword}
			/>
			<button id="register" onClick={() => handleRegister()}>
				Sign Up
			</button>
		</div>
	);

	// MODAL
	const [isModalRegister, setIsModalRegister] = useState(false);
	const [isModalLogin, setIsModalLogin] = useState(false);

	const showModalRegister = () => {
		setIsModalRegister(true);
	};
	const showModalLogin = () => {
		setIsModalLogin(true);
	};

	const handleOkRegister = () => {
		setIsModalRegister(false);
		console.log("valided");
	};
	const handleOkLogin = () => {
		setIsModalLogin(false);
		console.log("valided");
	};

	const handleCancelRegister = () => {
		setIsModalRegister(false);
		console.log("cancelled");
	};
	const handleCancelLogin = () => {
		setIsModalLogin(false);
		console.log("cancelled");
	};
	// MODAL

	return (
		<div className={styles.tweet}>
			<div className={styles.homeLeft}>
				<img src="fond-bleu.png" alt="Fond bleu" />
				<img src="logo-twitter-blanc.png" alt="Oiseau twitter" />
			</div>
			<main className={styles.main}>
				<div className={styles.titleUp}>
					<img src="logo-twitter-blanc.png" alt="Oiseau twitter" />
					<h1 className={styles.title}>See what's happening</h1>
					<h2 className={styles.joinMe}>Join Hackatweet today.</h2>
				</div>

				<div className="userConnect">
					<div className={styles.connect}>
						{/* modal  register*/}
						<Button type="primary" onClick={showModalRegister}>
							SignUp
						</Button>
						<Modal
							title="Basic Modal"
							open={isModalRegister}
							onOk={handleOkRegister}
							onCancel={handleCancelRegister}
						>
							<input type="text" name="name" id="" placeholder="name" />
							<input type="text" name="username" id="" placeholder="username" />
							<input type="text" name="password" id="" placeholder="password" />
						</Modal>
						{/* modal */}
					</div>
					<p>You already have account?</p>
					<div>
						{/* modal  login*/}

						<Button type="primary" onClick={showModalLogin}>
							SignIn
						</Button>
						<Modal
							title="Basic Modal"
							open={isModalLogin}
							onOk={handleOkLogin}
							onCancel={handleCancelLogin}
						>
							<input type="text" name="username" id="" placeholder="username" />
							<input type="text" name="password" id="" placeholder="password" />
						</Modal>
						{/* modal */}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
