import { useState } from "react";
import styles from "../styles/home.module.css"
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className={styles.header}>
        <div className={styles.headerWrapper}>
            <div className={styles.headerFirst}>КОМПАНИЯ</div>
            <div className={styles.headerSecond}>
                <a className={styles.headerSecondElem} href="#ourServices">НАШИ УСЛУГИ</a>
                <a className={styles.headerSecondElem} href="#company">О КОМПАНИИ</a>
                <a className={styles.headerSecondElem} href="#results">ПОКАЗАТЕЛИ</a>
                <a className={styles.headerSecondElem} href="#footer">ПРЕИМУЩЕСТВА</a>
            </div>
            <div className={styles.headerSecondTablet} onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon style={{fontSize: '40px', cursor: 'pointer'}}/>
            </div>
        </div>
        {
            isOpen && 
            <div className={styles.headerSecondTabletBars}>
                <hr/>
                <a onClick={() => setIsOpen(false)} className={styles.headerSecondElem} href="#ourServices">НАШИ УСЛУГИ</a>
                <a onClick={() => setIsOpen(false)} className={styles.headerSecondElem} href="#company">О КОМПАНИИ</a>
                <a onClick={() => setIsOpen(false)} className={styles.headerSecondElem} href="#results">ПОКАЗАТЕЛИ</a>
                <a onClick={() => setIsOpen(false)} className={styles.headerSecondElem} href="#footer">ПРЕИМУЩЕСТВА</a>
            </div>
        }
        
    </div>
}