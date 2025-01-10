import styles from "../styles/home.module.css"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';

export const FooterDeals = () => {
    return <div className={styles.footerDeals} id='footer'>
        <div className={styles.footerDealsWrapper}>
            <div className={styles.footerDealsElemWrapper}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.footerDealsElem}>
                        <CurrencyExchangeIcon style={{fontSize: '50px', padding: '30px', color: '#efbe5d'}}/>
                    </div>
                </div>
                <h3>
                    ЭКОНОМИЯ ВРЕМЕНИ И ДЕНЕГ
                </h3>
            </div>
            <div className={styles.footerDealsElemWrapper}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.footerDealsElem}>
                        <EmojiObjectsRoundedIcon style={{fontSize: '50px', padding: '30px', color: '#efbe5d'}}/>
                    </div>
                </div>
                <h3>
                    КОМПЛЕКСНЫЕ РЕШЕНИЯ
                </h3>
            </div>
            <div className={styles.footerDealsElemWrapper}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.footerDealsElem}>
                        <EventAvailableIcon style={{fontSize: '50px', padding: '30px', color: '#efbe5d'}}/>
                    </div>
                </div>
                <h3>
                    СОБЛЮДЕНИЕ ВСЕХ СРОКОВ
                </h3>
            </div>
            <div className={styles.footerDealsElemWrapper}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.footerDealsElem}>
                        <PersonIcon style={{fontSize: '50px', padding: '30px', color: '#efbe5d'}}/>
                    </div>
                </div>
                <h3>
                    КОМАНДА ПРОФЕССИОНАЛОВ
                </h3>
            </div>
        </div>
    </div>
}