import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { flowersBasketChange, changePriceBasket } from '../../actions'
import ScrollToTop from '../scroll-to-top/Scroll-to-top'
import OrderItem from './Order-item'

import './order.scss'

const Order = () => {
    const { priceBasket, flowersBasket } = useSelector((store) => store)
    const dispatch = useDispatch()
    const [delivery, setDeliviry] = useState('Доставка 400 рублей')
    const [payment, setPayment] = useState('На карту Сбербанка')
    const [nameBuyer, setNameBuyer] = useState('')
    const [phoneBuyer, setPhoneBuyer] = useState('+7')
    const [nameRecipient, setNameRecipient] = useState('')
    const [phoneRecipient, setPhoneRecipient] = useState('+7')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [adress, setAdress] = useState('')
    const [comment, setComment] = useState('')
    const [loading, setLoading] = useState(false)
    const [clazzName, setClazzName] = useState('input--form')
    const [clazzPhone, setClazzPhone] = useState('input--form')
    const navigate = useNavigate()

    const flowersBasketWithDiscount = JSON.parse(localStorage.getItem('flowersBasket')).map((item) => {
        const newPrice = Math.floor(item.price - 5 * (1 / 100) * item.price)
        item.price = newPrice
        return item
    })
    let priceBasketWithDiscount = flowersBasketWithDiscount.reduce(
        (total, basket) => total + basket.price * basket.quantity,
        0
    )
    const handleSubmit = () => {
        let obj = {}

        if (nameBuyer.length < 1) {
            setClazzName('input--form red')
            return
        } else {
            setClazzName('input--form')
            if (phoneBuyer.length < 9) {
                setClazzPhone('input--form red')
                return
            } else {
                setClazzPhone('input--form')
            }
        }

        if (delivery === 'Доставка 400 рублей') {
            const reciptDelivery = {
                price: 400,
                name: 'Доставка',
                quantity: 1
            }
            priceBasketWithDiscount += 400
            flowersBasketWithDiscount.push(reciptDelivery)
        }
        if (delivery === 'Доставка + открытка 550 рублей') {
            const reciptDelivery = {
                price: 550,
                name: 'Доставка и открытка',
                quantity: 1
            }
            priceBasketWithDiscount += 550
            flowersBasketWithDiscount.push(reciptDelivery)
        }

        // obj.flowers = flowersBasket
        obj.flowers = flowersBasketWithDiscount
        obj.nameBuyer = nameBuyer
        obj.phoneBuyer = phoneBuyer
        obj.nameRecipient = nameRecipient
        obj.phoneRecipient = phoneRecipient
        obj.date = date
        obj.time = time
        obj.adress = adress
        obj.comment = comment
        obj.delivery = delivery
        obj.payment = payment
        obj.numberOrder = Math.round(3000 - 0.5 + Math.random() * (8000 - 3000 + 1))
        obj.status = 'no'

        if (payment === 'Оплата на сайте') {
            //Действия на оплату онлайн
            const descr = flowersBasket.map((item) => item.name).join(', ')

            fetch('../server/pay.php', {
                method: 'POST',
                body: JSON.stringify({
                    priceBasket: priceBasketWithDiscount,
                    description: descr,
                    obj: obj
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((w) => {
                    localStorage.setItem('idPayment', w.id)
                    localStorage.setItem('objectForMailer', JSON.stringify(obj))
                    dispatch(flowersBasketChange([]))
                    localStorage.removeItem('flowersBasket')
                    dispatch(changePriceBasket())
                    if (w.confirmation.confirmation_url) {
                        window.location.href = w.confirmation.confirmation_url
                    } else {
                        navigate('/bad')
                    }
                })
                .catch(() => navigate('/bad'))
        } else {
            //отправка письма
            fetch('../server/server.php', {
                method: 'POST',
                body: JSON.stringify({
                    obj: obj,
                    priceBasket: priceBasketWithDiscount
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(setLoading(true))
                .then((resp) => resp.json())
                .then(setLoading(false))
                .then((w) => (w.result === 'success' ? null : navigate('/bad')))
                .catch(() => navigate('/bad'))

            dispatch(flowersBasketChange([]))
            localStorage.removeItem('flowersBasket')
            dispatch(changePriceBasket())
            navigate('/good')
        }
    }

    return (
        <main>
            {clazzName === 'input--form red' ? <ScrollToTop /> : null}
            {clazzPhone === 'input--form red' ? <ScrollToTop /> : null}
            {flowersBasket && flowersBasket.length > 0 ? (
                <section className='order__section container-fluid'>
                    <div className='order__content container'>
                        <div className='order__content--title'>
                            <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
                        </div>
                        <div className='order-cart-list'>
                            <div className='cart__list'>
                                {flowersBasket.map((el) => (
                                    <OrderItem key={el.id} {...el} />
                                ))}
                            </div>
                        </div>
                        <div className='cart__popup--footer'>
                            <div className='popup-footer__text'>
                                Сумма товаров:{' '}
                                <div className='items--sum'>
                                    {priceBasket} - 5% = {priceBasketWithDiscount} р
                                </div>
                            </div>
                        </div>
                        <div className='order--delivery'>
                            <div className='delivery--title'>
                                <p>Доставка</p>
                            </div>
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn'
                                    type='radio'
                                    name='delivery'
                                    id='center'
                                    value='Доставка 400 рублей'
                                    checked={delivery === 'Доставка 400 рублей' ? true : false}
                                    onChange={(e) => setDeliviry(e.target.value)}
                                />
                                <label htmlFor='center'>Доставка 400 рублей</label>
                            </div>
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn'
                                    type='radio'
                                    id='rayon'
                                    name='delivery'
                                    value='Доставка + открытка 550 рублей'
                                    checked={delivery === 'Доставка + открытка 550 рублей' ? true : false}
                                    onChange={(e) => setDeliviry(e.target.value)}
                                />
                                <label htmlFor='rayon'>Доставка + открытка 550 рублей</label>
                            </div>
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn'
                                    type='radio'
                                    id='otdal'
                                    name='delivery'
                                    value='Отдаленный район (обговаривается отдельно)'
                                    checked={delivery === 'Отдаленный район (обговаривается отдельно)' ? true : false}
                                    onChange={(e) => setDeliviry(e.target.value)}
                                />
                                <label htmlFor='otdal'>Отдаленный район (обговаривается отдельно)</label>
                            </div>
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn'
                                    type='radio'
                                    id='samov'
                                    name='delivery'
                                    value='Самовывоз'
                                    checked={delivery === 'Самовывоз' ? true : false}
                                    onChange={(e) => setDeliviry(e.target.value)}
                                />
                                <label htmlFor='samov'>Самовывоз</label>
                            </div>
                        </div>
                        <div className='form__wrapper'>
                            <form>
                                <div className='form__row'>
                                    <div className='form__input--item'>
                                        <input
                                            className={clazzName}
                                            type='text'
                                            placeholder='Имя заказчика'
                                            required
                                            value={nameBuyer}
                                            onChange={(e) => setNameBuyer(e.target.value)}
                                        />
                                    </div>
                                    <div className='form__input--item'>
                                        <input
                                            className={clazzPhone}
                                            type='tel'
                                            placeholder='Телефон заказчика ...'
                                            required
                                            value={phoneBuyer}
                                            onChange={(e) => setPhoneBuyer(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {delivery === 'Самовывоз' ? null : (
                                    <>
                                        <div className='form__row'>
                                            <div className='form__input--item'>
                                                <input
                                                    className='input--form'
                                                    type='text'
                                                    placeholder='Имя получателя'
                                                    value={nameRecipient}
                                                    onChange={(e) => setNameRecipient(e.target.value)}
                                                />
                                            </div>
                                            <div className='form__input--item'>
                                                <input
                                                    className='input--form'
                                                    type='tel'
                                                    placeholder='Телефон получателя +7...'
                                                    value={phoneRecipient}
                                                    onChange={(e) => setPhoneRecipient(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='form__row'>
                                            <div className='form__input--item'>
                                                <input
                                                    className='input--form'
                                                    type='text'
                                                    placeholder='Дата доставки'
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>
                                            <div className='form__input--item'>
                                                <input
                                                    className='input--form'
                                                    type='text'
                                                    placeholder='Время доставки'
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='form__input--item '>
                                            <input
                                                className='input--form max'
                                                type='text'
                                                placeholder='Адрес доставки'
                                                value={adress}
                                                onChange={(e) => setAdress(e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}
                                <div className='form__input--item'>
                                    <input
                                        className='input--form max'
                                        type='text'
                                        placeholder='Комментарий'
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='order--delivery order--payment'>
                            <div className='delivery--title'>
                                <p>Способ оплаты</p>
                            </div>
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn'
                                    type='radio'
                                    name='payment'
                                    id='transit'
                                    value='На карту Сбербанка'
                                    checked={payment === 'На карту Сбербанка' ? true : false}
                                    onChange={(e) => setPayment(e.target.value)}
                                />
                                <label htmlFor='transit'>На карту Сбербанка</label>
                            </div>
                            {payment === 'На карту Сбербанка' ? (
                                <div className='order__wrapp'>
                                    <div className='order__text'>
                                        Номер карты 4276 6200 2084 8721 Наталья Александровна А.
                                        <br /> Внимание! Перед оплатой дождитесь подтверждения заказа. Менеджер свяжется
                                        с Вами в ближайшее время.
                                    </div>
                                </div>
                            ) : null}
                            <div className='inpit--item'>
                                <input
                                    className='radio--order--btn pay-on-website'
                                    type='radio'
                                    id='web-site'
                                    name='payment'
                                    value='Оплата на сайте'
                                    checked={payment === 'Оплата на сайте' ? true : false}
                                    onChange={(e) => setPayment(e.target.value)}
                                />
                                <label htmlFor='web-site'>Оплата на сайте</label>
                            </div>
                            {payment === 'Оплата на сайте' ? (
                                <div className='order__wrapp'>
                                    <div className='order__text'>
                                        Оплата заказа онлайн, после чего с Вами свяжется менеджер
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <div className='form__button'>
                            <button className='form--btn' onClick={() => handleSubmit()}>
                                {loading ? 'Подождите, загрузка' : 'Подтвердить заказ'}
                            </button>
                            <div className='obrabotka'>
                                Соглашаюсь на{' '}
                                <a href='/obrabotka-personal-data' target='_blank'>
                                    обработку персональных данных
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className='smt-wrong'>У вас нет товаров в корзине</div>
            )}
        </main>
    )
}

export default Order
