import posts from "../data.json";
import styles from "./blog.module.scss";
import { Arimo } from 'next/font/google';
import PostCard from "../components/PostCard";

const arimo = Arimo({ subsets: ['latin'], weight: ["600"], })

const Posts = () => {
    return (
        <main className={styles.Posts}>
            <header className={styles.header}>
                <h1 className={`${styles.title} ${arimo.className}`}>All posts</h1>
            </header>
            <section className={styles.section}>
                {
                    posts.posts.map((p, index) => {
                        return (
                            <PostCard p={p} index={index} />
                        );
                    })
                }
            </section>
        </main>
    );
}

export default Posts;
