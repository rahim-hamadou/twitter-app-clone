import styles from "../styles/Tweets.module.css";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Tweets() {
	return (
		<div>
			<div className={pagetweet}>
				<div className={styles.sectionUser}>
					<div className={styles.logo}>
						<FontAwesomeIcon icon="fa-brands fa-twitter" />
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userCadre}>
							<FontAwesomeIcon icon="fa-solid fa-user" />
							<div className={styles.userText}></div>
						</div>
						<div className={styles.btnLogout}>
							{" "}
							<button>Logout</button>
						</div>
					</div>
				</div>
				<div className={styles.sectionCenter}>
					<div className={styles.headerCenter}>
						<h2>Home</h2>
						<input type="text" placeholder="What's up" />
					</div>
					<div className={styles.tweetContainer}>
						<div className={styles.tweet}>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>
				<div className={styles.sectionTrends}>
					<div className={styles.headerTrends}></div>
					<div className={styles.hashContainer}></div>
				</div>
			</div>
		</div>
	);
}

export default Tweets;
