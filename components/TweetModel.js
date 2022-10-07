import styles from "../styles/TopArticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function TweetModel(props) {
	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon
					onClick={() => handleBookmarkClick()}
					icon={faBookmark}
					style={iconStyle}
					className={styles.bookmarkIcon}
				/>
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TweetModel;
