import Image from "next/image";
import styles from "./Modal.module.scss";
import Tags from "../Tags";
import Link from "next/link";

const Modal = ({ data, onClose }) => {
    const { name, company, img, description, link, tecnologies } = data;

    return (
        <div onClick={onClose} className={styles.Modal}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src={img}
                        fill
                        style={{ objectFit: "cover" }}
                        alt={name}
                    />
                </div>
                <div className={styles.dataContainer} >
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.company}>Company: <span>{company}</span></p>
                    {
                        description.map(d => <p key={d} className={styles.description}>{d}</p>)
                    }
                    <Tags tags={tecnologies} />
                </div>
                <div className={styles.closeContainer}>
                    <p onClick={onClose} className={styles.close}>X</p>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={link} className={styles.link}>Go to project</Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;
