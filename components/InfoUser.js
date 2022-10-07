import styles from "../styles/InfoUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

function InfoUser(props) {
	return (
		<div className={styles.userInfo}>
			<div className={styles.userCadre}>
				<FontAwesomeIcon id={styles.userLogo} icon={faUser} />
				<div className={styles.userText}>
					<h3 className={styles.name}>John</h3>
					<p className={styles.hashtag}>@JohnCena</p>
				</div>
			</div>
		</div>
	);
}

export default InfoUser;
