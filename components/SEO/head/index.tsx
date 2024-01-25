import { Helmet } from 'react-helmet';
interface ISEOHelmetProps {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
}

const SEOHelmet = ({ title, description, url, imageUrl }: ISEOHelmetProps) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="RDS" />
        <meta
            name="keywords"
            content="
                Desenvolvimento de software personalizado,
                Soluções de software sob demanda,
                Empresa de desenvolvimento de software,
                Desenvolvimento de aplicativos personalizados,
                Serviços de programação de software,
                Desenvolvimento ágil de software,
                Terceirização de serviços de TI,
                Empresa de terceirização de TI,
                Equipe de TI dedicada,
                Terceirização de desenvolvimento de TI,
                Especialistas em TI terceirizados,
                Suporte técnico terceirizado,
                Integração de sistemas de TI,
                Consultoria em tecnologia da informação,
                Serviços de infraestrutura de TI,
                Soluções de segurança de TI,
                Migração de dados e serviços de armazenamento,
                Desenvolvimento em React,
                Soluções em Node.js,
                Serviços de desenvolvimento Angular,
                Especialistas em Python,
                Desenvolvimento de software Java,
                Soluções em nuvem,
                Desenvolvimento de Blockchain,
                Desenvolvimento Lean de software,
                Metodologia Scrum em TI,
                DevOps e automação de processos,
                Testes de software e QA,
                Soluções de TI para saúde,
                Software para fintech,
                Desenvolvimento de TI para e-commerce,
                Tecnologia educacional,
                Software para startups,
                Soluções de TI para o setor público,
                Empresa de software Araraquara,
                Terceirização de TI Araraquara,
                Desenvolvedores de software Araraquara,
                Inteligência artificial em software,
                Machine Learning como serviço,
                Big Data e análise de dados,
                Internet das Coisas (IoT) soluções,
                Software como serviço (SaaS)
            "
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FF653F" />
    </Helmet>
);

export default SEOHelmet;
