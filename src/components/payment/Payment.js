import imgCard from '../../assets/img/plastic-card.svg'

import './payment.scss'

const Payment = () => {
    return (
        <main>
            <section className='about-payment container-fluid'>
                <div className='about-payment__wrapper container'>
                    <div className='title'>
                        <h1>Оплата</h1>
                    </div>
                    <div className='payment__list'>
                        <div className='payment__item'>
                            <div className='item__img'>
                                <img src={imgCard} alt='иконка пластиковой карты' />
                            </div>
                            <div className='item__text'>
                                <p>Оплата картой на сайте онлайн</p>
                            </div>
                        </div>
                        <div className='payment__item'>
                            <div className='item__img'>
                                <img src={imgCard} alt='иконка пластиковой карты' />
                            </div>
                            <div className='item__text'>
                                <p>Перевод на карту онлайн</p>
                            </div>
                        </div>
                        <div className='payment__item'>
                            <div className='item__img'>
                                <img src={imgCard} alt='иконка пластиковой карты' />
                            </div>
                            <div className='item__text'>
                                <p>Картой курьеру при получении</p>
                            </div>
                        </div>
                        <div className='payment__item'>
                            <div className='item__img'>
                                <img src={imgCard} alt='иконка пластиковой карты' />
                            </div>
                            <div className='item__text'>
                                <p>Наличными при самовывозе</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Payment
