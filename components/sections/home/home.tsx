import Image from 'next/image';
import styles from './home.module.css';

const HomeSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>“Transforme sua visão em realidade
                        com um design excepcional.”</h1>
                    <p>Bem-vindo à BrandStorm, onde ideias ganham vida através do poder do design. Seja a mudança que seus clientes desejam ver no mundo.</p>
                    <a className={styles.button}>Saiba mais</a>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/logo.svg"
                        width={500}
                        height={270}
                        alt="logo"
                        className={styles.logo}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSection;