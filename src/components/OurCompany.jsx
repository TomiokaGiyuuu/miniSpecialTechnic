import styles from "../styles/home.module.css"
import { FaCheck } from "react-icons/fa";

export const OurCompany = () => {
    return <div className={styles.ourCompany} id='company'>
        <div className={styles.ourCompanyWrapper}>
            <h2>О Компании</h2>
            <hr/>
            <div className={styles.ourCompanyDiv}>
                <div className={styles.ourCompanyDivElemImg}>
                    <img src="/images/usluga2.jpg" alt="" />
                </div>
                <div className={styles.ourCompanyDivElem}>
                    <div className={styles.ourCompanyDivElemText}>
                        <h2>Мини аренда</h2>
                        <h5>Описание</h5>
                        <div>
                            <div className={styles.ourCompanyDetailElem}>
                                <FaCheck style={{color: 'efbe5d', width: '21px', height: '21px'}}/>
                                <h2>Опыт специалистов более 10 лет</h2>
                            </div>
                            <div className={styles.ourCompanyDetailElemTop}></div>
                            <div className={styles.ourCompanyDetailElem}>
                                <FaCheck style={{color: 'efbe5d', width: '21px', height: '21px'}}/>
                                <h2>Подходит для любых услуг</h2>
                            </div>
                            <div className={styles.ourCompanyDetailElemTop}></div>
                            <div className={styles.ourCompanyDetailElem}>
                                <FaCheck style={{color: 'efbe5d', width: '21px', height: '21px'}}/>
                                <h2>Лучшее решения для продвижения</h2>
                            </div>
                            <div className={styles.ourCompanyDetailElemTop}></div>
                            <div className={styles.ourCompanyDetailElem}>
                                <FaCheck style={{color: 'efbe5d', width: '21px', height: '21px'}}/>
                                <h2>Быстрый запуск - всего за 1 день</h2>
                            </div>  
                            <div className={styles.ourCompanyDetailElemTop}></div>
                            <div className={styles.ourCompanyDetailElem}>
                                <FaCheck style={{color: 'efbe5d', width: '21px', height: '21px'}}/>
                                <h2>Современный адаптивный дизайн</h2>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}