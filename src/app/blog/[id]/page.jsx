import data from '../../data.json';
import Section from '@/app/components/Section';
import Image from 'next/image';
import styles from './post.module.scss';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ subsets: ['latin'], weight: ["600"], })

const Post = ({ params }) => {
    const d = data.posts[params.id];
    return (
        <>
            <header className={styles.header}>
                <div className={styles.titleContainer}>
                    <h1 className={`${styles.title} ${arimo.className}`}>{d.title}</h1>
                </div>
                <Image className={styles.img} src={d.img} fill />
            </header>
            {
                d.sections.map(s => <Section data={s} />)
            }
        </>
    );
}


export default Post;
