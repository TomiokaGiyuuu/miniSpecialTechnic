import styles from "../styles/home.module.css"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import { FaCheck } from "react-icons/fa";

export const Achievements = () => {
    return <div className={styles.achievements} id='results'>
        <div className={styles.achievementsWrapper}>
            <div className={styles.container}>
                <div className={styles.achievementElem}>
                    <EmojiEventsIcon style={{color: '#EFBE5D', fontSize: '64px'}}/>
                    <div className={styles.achievementElemText}>
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <h2>15</h2>
                            <h4>+</h4>
                        </div>
                        <h3>ЛEТ НА РЫНКЕ</h3>
                    </div>
                </div>
                <div className={styles.achievementElem}>
                    <EngineeringIcon style={{color: '#EFBE5D', fontSize: '64px'}}/>
                    <div className={styles.achievementElemText}>
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <h2>20</h2>
                            <h4>+</h4>
                        </div>
                        <h3>СПЕЦИАЛИСТОВ</h3>
                    </div>
                </div>
                <div className={styles.achievementElem}>
                    <DoneRoundedIcon style={{color: '#EFBE5D', fontSize: '64px'}}/>
                    <div className={styles.achievementElemText}>
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <h2>7,000</h2>
                            <h4>+</h4>
                        </div>
                        <h3>ВЫПОЛНИЛИ РАБОТ</h3>
                    </div>
                </div>
                <div className={styles.achievementElem}>
                    <SentimentSatisfiedRoundedIcon style={{color: '#EFBE5D', fontSize: '64px'}}/>
                    <div className={styles.achievementElemText}>
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <h2>10,000</h2>
                            <h4>+</h4>
                        </div>
                        <h3>ДОВОЛЬНЫХ КЛИЕНТОВ</h3>
                    </div>
                </div>
            </div>
        </div> 
    </div>
}