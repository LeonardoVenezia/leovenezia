import Link from "next/link";
import styles from "./CTABlog.module.scss";

const CTABlog = ()=> {
    return (
        
      <Link className={styles.link} href="/blog">
        <div className={styles.CTABlog}>
            <p className={styles.go}>GO TO BLOG</p>
        </div>
      </Link>
    );
}

export default CTABlog;
