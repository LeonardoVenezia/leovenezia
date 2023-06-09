'use client'
import Comp from "../Comp";
import styles from './Section.module.scss';

const Section = ({ data }) => {
    return (
        <section className={`${styles.Section} ${styles[data.color]}`}>
            <h2 className={styles.title}>{data.section}</h2>
            {data.content.map((d, i) => {
                return (
                    <Comp
                        key={`${data.section}_${i}`}
                        type={d.type}
                        props={d.props}
                    >
                        {d.content}
                    </Comp>
                )
            })}
        </section>
    );
}

export default Section;
