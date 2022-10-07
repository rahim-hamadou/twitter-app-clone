import styles from "../styles/HeaderCenter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

function HeaderCenter(props) {
	return (
		<div className={styles.headerCenter}>
			<h2 className={styles.headerTitle}>Home</h2>
			<input className={styles.headerSearch} type="text" placeholder="What's up" />
			<div className={styles.bottomSearch}>
				<span className={styles.infoTweet}>0/280</span>
				<button className={styles.btnTweet}>Tweet</button>
			</div>
		</div>
	);
}

export default HeaderCenter;
