import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { flowersBasketChange, changePriceBasket } from '../../actions'

import './flowers-list.scss'

const FlowersListItem = ({ name, price, img, flowerId, item }) => {
    const dispatch = useDispatch()
    const [isInBasket, setIsInBasket] = useState(false)

    const handleClickBasket = () => {
        let basket = []
        if (localStorage.getItem('flowersBasket')) {
            basket = JSON.parse(localStorage.getItem('flowersBasket'))

            const temp = basket.map((el) => el.id)
            const temp2 = temp.indexOf(item.id)

            if (temp2 !== -1) {
                basket[temp2].quantity++
            } else {
                basket.push(item)
                basket[basket.length - 1].quantity = 1
            }
        } else {
            basket.push(item)
            basket[0].quantity = 1
        }
        dispatch(flowersBasketChange(basket))
        localStorage.setItem('flowersBasket', JSON.stringify(basket))
        dispatch(changePriceBasket())
        setIsInBasket(true)
    }

    return (
        <div className='shop__item'>
            <div className='item__img img__flower'>
                <Link to={`/flower/${flowerId}`}>
                    <img src={`${process.env.PUBLIC_URL}/flowers_img/${img}`} alt='Изображение букета' />
                </Link>
            </div>
            <div className='item__title as'>
                <h3>{name}</h3>
            </div>
            <div className='item__price'>{price} ₽</div>
            <button className='item__btn add--btn' onClick={() => handleClickBasket()}>
                {isInBasket ? 'Добавлено' : 'В корзину'}
            </button>
        </div>
    )
}

export default FlowersListItem
