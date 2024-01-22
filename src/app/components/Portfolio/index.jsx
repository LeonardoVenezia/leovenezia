'use client'
import portfolio from "../../mockPortfolio.json";
import Proyect from "../Proyect";
import styles from "./Portfolio.module.scss";
import Modal from "../Modal";
import { useState } from "react";

        // {
        //     "name": "Learn Programming",
        //     "company": "Me",
        //     "img": "/portfolio/learnPrograming.jpg",
        //     "description": ["This project aims to help novice programmers learn the most sought-after skills in each stage of their careers.", "I build Learn Programming with Ionic + React, and its only able for Android.", "The biggest challenge was uploading the app to Google Play. I had to learn how to build and deploy using Android Studio, and I also learned Ionic from scratch. It was a very enriching project for me.", "In the future, I will create more apps like this—simple but useful."],
        //     "link": "https://play.google.com/store/apps/details?id=com.learnprograming.learnprograming",
        //     "tecnologies": ["Ioic", "Javascript", "React", "Redux"]
        // }

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
            <p className={styles.among}>Among others<span className={styles.one}> .</span><span className={styles.two}> .</span><span className={styles.three}> .</span></p>
            
            {handleModal()}
        </section>
    );
}

export default Portfolio;
