import Image from 'next/image';
import styles from './about.module.css';

const AboutSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>“<span style={{color: '#52B6FF'}}>Paixão</span> pelo design, <span style={{color: '#9B6ED3'}}>compromisso</span> com a <span style={{backgroundColor: '#F35A79', color: '#FFFFFF'}}>excelência</span>.”</h1>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>Na <strong>BrandStorm</strong>, não somos apenas designers, somos contadores de histórias visuais.</p>
                        <p>Combinamos a <strong>essência</strong> de seu negócio com nossa paixão pelo design, criando uma identidade visual única que destaca você  no mercado.</p>
                        <p>Nossa <strong>missão</strong> é ir além do convencional, transformando ideias em designs marcantes que deixam uma impressão duradoura.</p>
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

export default AboutSection;