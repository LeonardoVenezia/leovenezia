import Link from "next/link";
import styles from "./CTABlog.module.scss";

const CTABlog = ({link= "https://silicontheway.hashnode.dev/", text="Go to blog", download})=> {
    return (
      <Link className={styles.link} href={link} target="_blank">
        <div className={styles.CTABlog}>
            <h2 className={styles.go}>{text}</h2>
        </div>
      </Link>
    );
}

export default CTABlog;
