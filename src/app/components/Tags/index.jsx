import styles from "./Tags.module.scss";

const Tags = ({ tags }) => {

    return (
        <ul className={styles.Tags}>
            {
                tags.map(t => {
                    return (
                        <li className={styles.tag} key={t}>{t}</li>
                    );
                })
            }
        </ul>
    );
}

export default Tags;
