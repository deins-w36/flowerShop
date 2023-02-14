import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { flowersBasketChange, changePriceBasket } from '../../actions'
import { useState } from 'react'

import './flowers-item.scss'

import data from '../../data.json'

const FlowersItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isInBasket, setIsInBasket] = useState(false)
    const [counter, setCounter] = useState(1)

    const { flowerId } = useParams()
    const flowerItem = data.flowers[flowerId - 1]

    const checkArray = (array, text) => {
        if (Array.isArray(array)) {
            if (array.length > 0) {
                return array
            } else {
                return [text]
            }
        } else {
            return [text]
        }
    }

    const handleClickBasket = () => {
        let basket = []
        if (localStorage.getItem('flowersBasket')) {
            basket = JSON.parse(localStorage.getItem('flowersBasket'))

            const temp = basket.map((el) => el.id)
            const temp2 = temp.indexOf(flowerItem.id)

            if (temp2 !== -1) {
                basket[temp2].quantity += counter
            } else {
                basket.push(flowerItem)
                basket[basket.length - 1].quantity = counter
            }
        } else {
            basket.push(flowerItem)
            basket[0].quantity = counter
        }

        dispatch(flowersBasketChange(basket))
        localStorage.setItem('flowersBasket', JSON.stringify(basket))
        setIsInBasket(true)
        dispatch(changePriceBasket())
        setCounter(1)
    }

    const counterChange = (num) => {
        if (num < 0) {
            if (counter > 1) {
                setCounter((counter) => counter + num)
            }
        } else {
            setCounter((counter) => counter + num)
        }
    }

    return (
        <main>
            <section className='item__section container-fluid'>
                <div className='item__content container'>
                    <div className='item__img'>
                        <img src={`${process.env.PUBLIC_URL}/flowers_img/${flowerItem.img}`} alt={flowerItem.name} />
                    </div>
                    <div className='item__text'>
                        <div className='text__title'>
                            <h2>{flowerItem.name}</h2>
                        </div>
                        <div className='text__price'>{flowerItem.price} ₽</div>
                        <div className='text__composition'>
                            <p>Состав букета:</p>
                            <ul className='composition__list'>
                                {checkArray(flowerItem.structure, 'Состав не указан').map((item, i) => (
                                    <li className='composition__list__item' key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>Примечания:</p>
                            <ul className='size__list'>
                                {checkArray(flowerItem.note, 'Примечания не указаны').map((item, i) => (
                                    <li className='size__list__item' key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='check-item__counter'>
                            <button className='btn-mines counter--btn' onClick={() => counterChange(-1)}>
                                -
                            </button>
                            <div className='count--number'>{counter}</div>
                            <button className='btn-plus counter--btn' onClick={() => counterChange(1)}>
                                +
                            </button>
                        </div>
                        <div className='check-item__add-to-cart'>
                            <button className='add-to-cart__btn' onClick={() => handleClickBasket()}>
                                {isInBasket ? 'Добавлено' : 'В корзину'}
                            </button>
                        </div>
                        <div className='check-item__back-to-main'>
                            <button className='back-to-main__btn' onClick={() => navigate(-1)}>
                                Вернуться
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FlowersItem
