import styles from "../styles/home.module.css"

export const OurService = () => {
    return <div className={styles.ourService}>
        <div className={styles.ourServiceWrapper}>
            <h2>Наши услуги</h2>
            <hr/>
            <div>
                <div className={styles.ourServiceCards} id="ourServices">
                    <div className={styles.ourServiceCard}>
                        <img src="/images/uslugaCrop1.jpg" alt="" />
                        <hr/>
                        <div style={{backgroundColor: '#f1f1f1', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', padding: '10px 0'}}>
                            <div className={styles.ourServiceRow}>
                                <h2>• Статическая нагрузка опрокидывания</h2>
                                <h3>2 090 кг</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Номинальная грузоподъемность </h2>
                                <h3>1 045 кг</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Усилие отрыва стрелы</h2>
                                <h3>20.3 кН</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Вырывное усилие ковша </h2>
                                <h3>29.8 кН</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Максимальная высота выгрузки</h2>
                                <h3>2 572 мм</h3>
                            </div>
                            <div className={styles.ourServiceRow}>
                                <h2>*при макс. вылете стрелы</h2>
                                <h3>587 мм</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Макс. угол выгрузки на макс. высоте</h2>
                                <h3>39° </h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Макс. высота шарнирного пальца </h2>
                                <h3>3 278 мм</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Запрокидывание ковша на уровне земли</h2>
                                <h3>30°</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Дорожный просвет </h2>
                                <h3>200 мм</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Угол заднего свеса </h2>
                                <h3>27°</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Минимальный радиус поворота <br/> погрузчика по внешней кромке ковша</h2>
                                <h3>2 339 мм</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourServiceCard}>
                        <img src="/images/uslugaCrop2.jpg" alt="" />
                        <hr />
                        <div style={{backgroundColor: '#f1f1f1', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', padding: '10px 0'}}>
                            <div className={styles.ourServiceRow}>
                                <h2>• Статическая нагрузка опрокидывания</h2>
                                <h3>1 430 кг</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Номинальная грузоподъемность </h2>
                                <h3>830 кг</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Усилие отрыва стрелы</h2>
                                <h3>29.8 кН</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Вырывное усилие ковша </h2>
                                <h3>29.8 кН</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Максимальная высота выгрузки</h2>
                                <h3>3 010 мм</h3>
                            </div>
                            <div className={styles.ourServiceRow}>
                                <h2>*при макс. вылете стрелы</h2>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Макс. угол выгрузки на макс. высоте</h2>
                                <h3>39° </h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Макс. высота шарнирного пальца </h2>
                                <h3>2 985 мм</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Запрокидывание ковша на уровне земли</h2>
                                <h3>30°</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Дорожный просвет </h2>
                                <h3>210 мм</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Угол заднего свеса </h2>
                                <h3>25°</h3>
                            </div>
                            <hr/>
                            <div className={styles.ourServiceRow}>
                                <h2>• Радиус передний / задний </h2>
                                <h3>2 027/1 527 мм</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}