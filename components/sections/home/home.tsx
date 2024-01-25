import Image from 'next/image';
import styles from './home.module.css';
import AboutSection from '../about/about';
import { HomeBackgroundSvg } from '@/components/HomeBackgroundSvg';
import SEOHelmet from '@/components/SEO/head';

const HomeSection = () => {
    return (
        <>
            {/* <SEOHelmet
                title="BrandStorm - Soluções em Design e Desenvolvimento"
                description="BrandStorm é uma empresa especializada em soluções voltadas ao Design e Desenvolvimento."
                url="https://www.brandstorm.com.br"
                imageUrl="https://www.brandstorm.com/logo.png"
            /> */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>“<span style={{ color: '#B6FF58' }}>Transforme</span> sua <span style={{ backgroundColor: '#F35A79', color: '#FFFFFF' }}>visão</span> em realidade
                            com um <span style={{ color: '#52B6FF' }}>design</span> <span style={{ color: '#FFB444' }}>excepcional</span>.”</h1>
                        <p>Bem-vindo à <strong>BrandStorm</strong>, onde ideias ganham vida através do poder do design. Seja a mudança que seus clientes desejam ver no mundo.</p>
                        <a className={styles.button}>Saiba mais</a>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                        src="/homesvg.svg"
                        width={1000}
                        height={1000}
                        alt="background"
                        className={styles.logo}
                    />
                        {/* <HomeBackgroundSvg/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection;