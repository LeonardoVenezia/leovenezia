import styles from './Layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Layout = ({ children }) => {
    return (
        <main className={styles.Layout}>
            <nav className={styles.nav}>
                <Link href="/">
                    <Image className={styles.profile} src="/profile.png" height={58} width={58} />
                </Link>
                <ul className={styles.links}>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://linkedin.com/leovenezia" />
                    </li>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://github.com/SilicOnTheWay" />
                    </li>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://instagram.com/silicontheway" />
                    </li>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://tiktok.com/SilicOnTheWay" />
                    </li>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://twitter.com/silicOnTheWay" />
                    </li>
                    <li>
                        <SocialIcon fgColor="#ffffff" url="https://youtube.com/SilicOnTheWay" />
                    </li>
                </ul>
            </nav>
            {children}
        </main>
    );
}

export default Layout;
