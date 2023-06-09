import Link from "next/link";
import styles from './PostCard.module.scss';

const PostCard = ({ p, index }) => {
    const intro = p.sections[0];
    const content = intro.content.map(c => <p className={styles.p}>{c.content}</p>)

    return (
        <Link className={styles.link} href={`/blog/${index}`}>
            <div className={styles.PostCard} >
                <h1 className={styles.title}>{p.title}</h1>
                {content}
            </div>
        </Link>
    );
}

export default PostCard;
