import styles from "../styles/home.module.css"
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const DoubleDiv = () => {
    return <div className={styles.doubleDiv}>
        <div className={styles.flexElem}>
            <img src="/images/mainPhotoNew.jpg" alt="" />
        </div>
        <div className={styles.flexElem}>
            <div className={styles.mainInformation}>
                <h2>
                    Мини-Спецтехника
                </h2>
                <hr/>
                <h3>
                Аренда мини погрузчика с оператором и ГСМ   <br/>
                3,2 т / 3,5 т <br/>
                Ковш 0,4 и 0,6 <br/>
                Выполняет работы: погрузка ковшом, планировка участка, перевозка груза в ковше, уборка территории, разгрузка груза в полетах и т.д. Возможности погрузчика позволяют использовать его в ограниченном пространстве за счет бортового разворота на месте на 360 градусов. Также есть навесное оборудование 
                <br/>1. Вилы паллетные 
                <br/>2. ⁠Коммунальная щетка 
                <br/>3. ⁠Дорожная фреза
                </h3>
                <div style={{display: 'flex', marginTop: '40px'}}>
                    <a href="tel:%20+77023633338" style={{borderRadius: '20px'}}>
                        <button className={styles.callButton}>
                            <CallIcon className={styles.iconsWelcome}/>
                            <h4>+7 702 363 33 38</h4>
                        </button>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=77023633338" style={{borderRadius: '20px'}}>
                        <button className={styles.whatsappButton}>
                            <WhatsAppIcon className={styles.iconsWelcome}/>
                            <h4>Написать What's App</h4>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
}