import styles from "../styles/Tweets.module.css";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import InfoUser from "./InfoUser";
import Hashtag from "./Hashtag";
import HeaderCenter from "./HeaderCenter";

function Tweets() {
	return (
		<div className={styles.pageEntiere}>
			<div className={styles.pageTweet}>
				<div className={styles.sectionUser}>
					<div className={styles.logo}>
						<img src="logo-twitter-blanc.png" alt="" />
					</div>
					<div className={styles.userInfo}>
						<InfoUser />
						{/* <div className={styles.userCadre}>
							<FontAwesomeIcon id={styles.userLogo} icon={faUser} />
							<div className={styles.userText}>
								<h3>John</h3>
								<p>@JohnCena</p>
							</div>
						</div> */}
						<div className={styles.btnLogout}>
							{" "}
							<button>Logout</button>
						</div>
					</div>
				</div>
				<div className={styles.sectionCenter}>
					<HeaderCenter />
					{/* <div className={styles.headerCenter}>
						<h2>Home</h2>
						<input type="text" placeholder="What's up" />
					</div> */}
					<div className={styles.tweetContainer}>
						<div className={styles.tweet}>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>
				<div className={styles.sectionTrends}>
					<div className={styles.headerTrends}>
						<h2>Trends</h2>
					</div>
					<Hashtag />
					{/* <div className={styles.hashContainer}>
						<p>#exemple</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Tweets;
