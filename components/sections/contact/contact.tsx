import Image from 'next/image';
import styles from './contact.module.css';
import { HTMLInputTypeAttribute } from 'react';

interface IInput {
    title: string;
    placeholder: string;
    isRequired: boolean;
    type?: 'text' | 'textarea';
    maxLength?: number;
}
const Input = ({ title, placeholder, isRequired, type = 'text', maxLength = 20 }: IInput) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{isRequired ? `${title} *` : title}</label>
            {type === 'textarea'
                ? <textarea maxLength={maxLength} className={styles.input} placeholder={placeholder} required={isRequired}></textarea>
                : <input maxLength={maxLength} className={styles.input} placeholder={placeholder} type={type} required={isRequired} />
            }
        </ div>
    )
}

const Inputs = [
    {
        title: 'Nome completo',
        placeholder: 'Seu nome',
        isRequired: true,
        maxLength: 40
    },
    {
        title: 'Nome da empresa',
        placeholder: 'Nome da sua empresa',
        isRequired: false,
        maxLength: 40
    },
    {
        title: 'Telefone (Whatsapp)',
        placeholder: '(00) 00000-0000',
        isRequired: true,
        maxLength: 40,
    },
    {
        title: 'E-mail',
        placeholder: 'seuemail@exemplo.com',
        isRequired: false,
        maxLength: 40
    },
    {
        title: 'Sua mensagem',
        placeholder: 'Digite aqui sua mensagem...',
        isRequired: false,
        maxLength: 40,
    },
]

const ContactSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Entre em <span style={{ color: '#FF984D' }}>contato</span> agora e comece a <span style={{ color: '#7270FF' }}>mudança</span> que <span style={{ backgroundColor: '#F35A79', color: '#FFFFFF' }}>sua empresa</span> <span style={{ color: '#3992FF' }}>precisa</span></h1>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>Na <strong>BrandStorm</strong>, não somos apenas designers, somos contadores de histórias visuais.</p>
                        {/* <a className={styles.button}>Saiba mais</a> */}
                        {
                            Inputs.map((input) => {
                                return (
                                    <Input {...input} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/aboutsvg.svg"
                            width={500}
                            height={500}
                            alt="background"
                            className={styles.logo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;