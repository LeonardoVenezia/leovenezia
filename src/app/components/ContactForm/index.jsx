"use client";
import styles from "./ContactForm.module.scss";
import { useForm, ValidationError } from '@formspree/react';
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
                    <SocialIcon fgColor="#ffffff" url="https://linkedin.com/in/leovenezia" />
                    <SocialIcon fgColor="#ffffff" url="https://github.com/SilicOnTheWay" />
                </div>
                <div className={styles.rowSocial}>
                    <SocialIcon fgColor="#ffffff" url="https://instagram.com/silicontheway" />
                    <SocialIcon fgColor="#ffffff" url="https://tiktok.com/SilicOnTheWay" />
                    <SocialIcon fgColor="#ffffff" url="https://twitter.com/silicOnTheWay" />
                    <SocialIcon fgColor="#ffffff" url="https://youtube.com/SilicOnTheWay" />
                </div>

            </div>

        </section>
    );
}

export default ContactForm;