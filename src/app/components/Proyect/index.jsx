import Image from "next/image";
import styles from "./Proyect.module.scss";

const Proyect = ({ data, handleShowModal }) => {
    const handleClick = () => {
        handleShowModal(data);
    }
    return (
        <div onClick={handleClick} className={styles.Proyect}>
            <div className={styles.nameContainer}>
                <h3 className={styles.name}>{data.name}</h3>
            </div>
            <div className={styles.filter}>
                <div className={styles.mask} />
                <Image src={data.img} fill style={{ objectFit: "cover" }} alt={data.name} />
            </div>
        </div>
    );
}

export default Proyect;
