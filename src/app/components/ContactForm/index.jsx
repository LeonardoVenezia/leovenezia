"use client";
import styles from "./ContactForm.module.scss";
import { useForm, ValidationError } from '@formspree/react';
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xlekykoy");
    if (state.succeeded) {
        return <p className={styles.succeeded}>Thanks for reach me!</p>;
    }
    return (
        <section className={styles.ContactForm}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Contact me</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johnDue@johnDue.com"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        className={styles.textarea}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        disabled={state.submitting}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className={styles.socialContainer}>
                <div className={styles.rowSocial}>
                    <SocialIcon url="https://linkedin.com/in/leovenezia" />
                    <SocialIcon url="https://github.com/jaketrent" />
                    {/* <Image width={40} height={40} alt="linkedin" src="/icons/linkedin.svg" />
                    <Image width={40} height={40} alt="github" src="/icons/github.svg" /> */}
                </div>
                <div className={styles.rowSocial}>
                    <SocialIcon url="https://instagram.com/jaketrent" />
                    <SocialIcon url="https://tiktok.com/jaketrent" />
                    <SocialIcon url="https://twitter.com/jaketrent" />
                    <SocialIcon url="https://gityoutubehub.com/jaketrent" />
                    {/* <Image width={40} height={40} alt="instagram" src="/icons/instagram.svg" />
                    <Image width={40} height={40} alt="tiktok" src="/icons/tiktok.svg" />
                    <Image width={40} height={40} alt="twitter" src="/icons/twitter.svg" />
                    <Image width={40} height={40} alt="youtube" src="/icons/youtube.svg" /> */}
                </div>

            </div>

        </section>
    );
}

export default ContactForm;