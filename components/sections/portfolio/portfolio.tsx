import Image from 'next/image';
import styles from './portfolio.module.css';

const PortfolioSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>“<span style={{color: '#B6FF58'}}>Design</span> em <span style={{backgroundColor: '#F35A79', color: '#FFFFFF'}}>ação</span>, veja nosso <span style={{color: '#FECC1B'}}>portfólio</span>.”</h1>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>Nosso portfólio é o reflexo da nossa <strong>dedicação</strong> ao design.</p>
                        <p>Explore casos de sucesso onde transformamos ideias em realidade, impulsionando a <strong>presença</strong> e <strong>impacto</strong> de nossos clientes.</p>
                        {/* <a className={styles.button}>Saiba mais</a> */}
                    </div>
                    <div className={styles.imageContainer}>
                        {/* <Image
                            src="/logo.svg"
                            width={500}
                            height={270}
                            alt="logo"
                            className={styles.logo}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;