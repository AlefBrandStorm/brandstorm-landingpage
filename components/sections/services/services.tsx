import Image from 'next/image';
import styles from './services.module.css';

interface IServiceData {
    title: string;
    description: string;
}

interface IServiceItemProps {
    service: IServiceData;
}

const ServicesData: IServiceData[] = [
    {
        title: 'Criação de Logo',
        description: 'Transformamos sua identidade em um símbolo poderoso. Sua marca, encapsulada em um design único que fala volumes.'
    },
    {
        title: 'Identidade Visual',
        description: 'Vamos além do logo, construindo uma identidade visual coesa. Cores, tipografia e elementos gráficos que definem quem você é.'
    },
    {
        title: 'Posts para Redes Sociais',
        description: 'Conteúdo visual envolvente para suas plataformas sociais. Cada post é uma narrativa visual que cativa seu público.'
    },
    {
        title: 'Banners',
        description: 'Destaque-se com banners impactantes. Combinamos design criativo e mensagens persuasivas para atrair atenção instantânea.'
    },
    {
        title: 'Folders',
        description: 'Informações importantes, apresentadas de forma cativante. Folders que contam sua história de maneira atraente.'
    },
    {
        title: 'Cardápios',
        description: 'Cardápios irresistíveis que estimulam o apetite antes mesmo da primeira mordida. Design que faz a comida saltar das páginas.'
    },
    {
        title: 'Landing Pages',
        description: 'A primeira impressão online é crucial. Criamos landing pages que não apenas impressionam, mas convertem visitantes em clientes.'
    },
    {
        title: 'Websites',
        description: 'Sua presença online começa aqui. Websites personalizados que destacam seus serviços, conquistando confiança desde a primeira visita.'
    },
    {
        title: 'Aplicativos',
        description: 'Vamos além do comum. Desenvolvemos aplicativos intuitivos e visualmente atraentes que elevam a experiência do usuário.'
    }
]


const ServiceItem: React.FC<IServiceItemProps> = ({ service }) => {
    const { title, description } = service;

    return (
        <div className={styles.cardContainer}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>“<span style={{ color: '#3FB950' }}>Desenvolva</span> sua <span style={{ color: '#FEA31B' }}>marca</span>, <span style={{ backgroundColor: '#F35A79', color: '#FFFFFF' }}>domine</span> seu <span style={{ color: '#3992FF' }}>espaço</span>.”</h1>
                <div className={styles.textContainer}>
                    <p>Na <strong>BrandStorm</strong>, oferecemos uma gama completa de serviços de design que abrangem desde a criação de logos exclusivos até o desenvolvimento de interfaces envolventes para seus aplicativos e sites.</p>
                    <p>
                        Com nossa <strong>expertise</strong>, transformamos sua visão em designs impactantes, cativando seu público-alvo e impulsionando o sucesso do seu negócio.</p>
                    {/* <a className={styles.button}>Saiba mais</a> */}
                </div>
                <div className={styles.gridServices}>
                    {
                        ServicesData.map((service, index) => {
                            return (
                                <ServiceItem service={service} key={index} />
                            )
                        })
                    }
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
    )
}

export default ServicesSection;