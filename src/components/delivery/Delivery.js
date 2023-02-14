import imgPhoneContact from '../../assets/img/phone-contact.svg'
import imgTime from '../../assets/img/time.svg'
import imgMap from '../../assets/img/map.svg'

import './delivery.scss'

const Delivery = () => {
    return (
        <main>
            <section className='contacts-hero container-fluid'>
                <div className='hero__content container'>
                    <div className='contacts-page__title'>
                        <h1>Доставка</h1>
                    </div>
                    <div className='contacts__wrapper delivery--wrapper'>
                        <div className='contacts__row'>
                            <div className='contacts__item'>
                                <div className='item__title'>Стоимость по городу</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img
                                            src={imgPhoneContact}
                                            alt='Иконка телефона интернет магазина букетов в Казани'
                                        />
                                    </div>
                                    <div className='item__row--text'>
                                        <p>
                                            <strong>Бесплатно</strong> доставим при заказе от 6000 руб.
                                            <br />
                                            <strong>400 руб.</strong> при заказе до 6000 руб.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='contacts__item'>
                                <div className='item__title'>Круглосуточная доставка</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img src={imgTime} alt='Иконка часов интернет магазина букетов в Казани' />
                                    </div>
                                    <div className='item__row--text'>
                                        <p>
                                            Мы осуществляем доставку круглосуточно. Время приема заказов с 9.00 до
                                            20.00.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contacts__row'>
                            <div className='contacts__item'>
                                <div className='item__title'>Отдалённые районы</div>
                                <div className='item__row'>
                                    <div className='item__row--img'>
                                        <img src={imgMap} alt='Иконка карты интернет магазина букетов в Казани' />
                                    </div>
                                    <div className='item__row--text'>
                                        <p>
                                            Стоимость доставки в отдаленные районы от 500 руб. Точную стоимость
                                            уточняйте по телефону. При заказе от 6000 руб. в отдаленный район скидка 400
                                            руб.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Delivery
