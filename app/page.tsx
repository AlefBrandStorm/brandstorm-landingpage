import Image from 'next/image'
import styles from './page.module.css'
import Footer from '@/components/footer'
import HomeSection from '@/components/sections/home/home'
import AboutSection from '@/components/sections/about/about'
import PortfolioSection from '@/components/sections/portfolio/portfolio'
import ServicesSection from '@/components/sections/services/services'
import ContactSection from '@/components/sections/contact/contact'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Image
        src="/logo.svg"
        width={500}
        height={270}
        alt="logo"
        className={styles.logo}
      />
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 24}}>
        <p style={{ fontWeight: 'bold', fontSize: 64 }}>Em breve</p>
        <p style={{ fontWeight: 'normal', fontSize: 20 }}>A solução que você precisa está mais perto do que imagina...</p>
        <p style={{ fontWeight: 'lighter', fontSize: 18 }}>Acompanhe nossas redes sociais para mais detalhes do lançamento da solução que sua empresa precisa!</p>
      </div> */}
      {/* <CustomCursor /> */}
      {/* <CustomCursor /> */}
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
