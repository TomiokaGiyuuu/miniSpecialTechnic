import { Achievements } from "../components/Achievements"
import { DoubleDiv } from "../components/doubleDiv"
import { Footer } from "../components/Footer"
import { FooterDeals } from "../components/FooterDeals"
import { Header } from "../components/Header"
import { HomeDeals } from "../components/HomeDeals"
import { OurCompany } from "../components/OurCompany"
import { OurService } from "../components/ourService"
import styles from "../styles/home.module.css"

export const HomePage = () => {
    return <div className={styles.homeWrapper}>
        <Header/>   
        <DoubleDiv/>
        <HomeDeals/>
        <OurService/>
        <Achievements/>
        <OurCompany/>
        <FooterDeals/>
        <Footer/>
    </div>
}