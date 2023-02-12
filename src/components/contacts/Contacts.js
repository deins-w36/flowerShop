import imgPhoneContact from '../../assets/img/phone-contact.svg'
import imgTime from '../../assets/img/time.svg'
import imgMap from '../../assets/img/map.svg'
import imgMail from '../../assets/img/mail.svg'

import './contacts.scss'

const Contacts = () => {
    return (
        <main>
            <section className='contacts-hero container-fluid'>
                <div className='hero__content container'>
                    <div className='contacts-page__title'>Контакты</div>
                    <div className='contacts__wrapper'>
                        <div className='contacts__row'>
                            <div className='contacts__item'>
                                <div className='item__title'>Наш телефон</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img
                                            src={imgPhoneContact}
                                            alt='Иконка телефона интернет магазина букетов в Казани'
                                        />
                                    </div>
                                    <div className='item__row--text'>
                                        <a href='tel:+79600484019'>+7(960)-048-40-19</a>
                                    </div>
                                </div>
                            </div>
                            <div className='contacts__item'>
                                <div className='item__title'>Время работы</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img src={imgTime} alt='Иконка часов интернет магазина букетов в Казани' />
                                    </div>
                                    <div className='item__row--text'>
                                        <p>
                                            Прием заказов
                                            <br />
                                            с 9.00 до 20.00
                                            <br />
                                            Доставка круглосуточная
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contacts__row'>
                            <div className='contacts__item'>
                                <div className='item__title'>Адрес магазина</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img src={imgMap} alt='Иконка карты интернет магазина букетов в Казани' />
                                    </div>
                                    <div className='item__row--text'>
                                        <a href='https://yandex.ru/profile/-/CCU7aGxDoB'>
                                            Восстания, 67А
                                            <br />
                                            Казань
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='contacts__item'>
                                <div className='item__title'>Email</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img src={imgMail} alt='Иконка Почты интернет магазина букетов в Казани' />
                                    </div>
                                    <div className='item__row--text'>
                                        <a href='mailto:info@pochta.ru'>cvetnikflo@yandex.ru</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contacts-page__map container-fluid'>
                <div className='content--map-yandex container'>
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a
                            href='https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps'
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                        >
                            Казань
                        </a>
                        <a
                            href='https://yandex.ru/maps/43/kazan/house/ulitsa_vosstaniya_67a/YEAYdgFoSkYDQFtvfXRyc3hgbQ==/?ll=49.068335%2C55.832440&utm_medium=mapframe&utm_source=maps&z=16'
                            style={{ color: '#eee', fonSize: '12px', position: 'absolute', top: '14px' }}
                        >
                            Улица Восстания, 67А на карте Казани, ближайшее метро Яшьлек — Яндекс Карты
                        </a>
                        <iframe
                            src='https://yandex.ru/map-widget/v1/?ll=49.068335%2C55.832440&mode=whatshere&whatshere%5Bpoint%5D=49.068334%2C55.832439&whatshere%5Bzoom%5D=17&z=16'
                            allowFullScreen={true}
                            style={{ position: 'relative', border: '1px' }}
                            title='map'
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacts
