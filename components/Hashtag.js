import styles from "../styles/Hashtag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

function Hashtag(props) {
	return (
		<div className={styles.hashContainer}>
			<h3 className={styles.titleTweet}>#exemple</h3>
			<p className={styles.nbTweet}>2 tweets</p>
		</div>
	);
}

export default Hashtag;
