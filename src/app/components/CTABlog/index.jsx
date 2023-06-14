import Link from "next/link";
import styles from "./CTABlog.module.scss";

const CTABlog = ()=> {
    return (
        
      <Link className={styles.link} href="https://silicontheway.hashnode.dev/">
        <div className={styles.CTABlog}>
            <h2 className={styles.go}>GO TO BLOG</h2>
        </div>
      </Link>
    );
}

export default CTABlog;
