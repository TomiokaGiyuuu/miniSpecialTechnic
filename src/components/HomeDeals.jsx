import styles from "../styles/home.module.css"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const HomeDeals = () => {
    return <div className={styles.homeDeals}>
        <div className={styles.homeDealsWrapper}>
            <div className={styles.homeDealsElemWrapper}>
                <div className={styles.homeDealsElem}>
                    <AttachMoneyIcon style={{width: '30px', height: '30px', padding: '2px 0 0 3px'}}/>
                </div>
                <h3>
                    САМЫЕ ЛУЧШИЕ ЦЕНЫ НА РЫНКЕ
                </h3>
            </div>
            <div className={styles.homeDealsElemWrapper}>
                <div className={styles.homeDealsElem}>
                    <CalendarMonthIcon style={{width: '30px', height: '30px', padding: '2px 0 0 3px'}}/>
                </div>
                <h3>
                    РАБОТАЕМ 24/7 БЕЗ ВЫХОДНЫХ
                </h3>
            </div>
            <div className={styles.homeDealsElemWrapper}>
                <div className={styles.homeDealsElem}>
                    <SupportAgentIcon style={{width: '30px', height: '30px', padding: '2px 0 0 3px'}}/>
                </div>
                <h3>
                    БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                </h3>
            </div>
        </div>
    </div>
}