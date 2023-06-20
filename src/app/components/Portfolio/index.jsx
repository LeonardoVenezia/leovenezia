'use client'
import portfolio from "../../mockPortfolio.json";
import Proyect from "../Proyect";
import styles from "./Portfolio.module.scss";
import Modal from "../Modal";
import { useState } from "react";

const Portfolio = ()=> {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleShowModal = (data) => {
        setModalData(data);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleModal = () => {
        if(showModal) {
            return (
                <Modal data={modalData} onClose={handleCloseModal} />
            );
        }
    }

    return (
        <section className={styles.Portfolio}>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.container}>
                {
                    portfolio.data.map(d => {
                        return (
                            <Proyect data={d} handleShowModal={handleShowModal} key={d.name} />
                        );
                    })
                }
            </div>
            {handleModal()}
        </section>
    );
}

export default Portfolio;
