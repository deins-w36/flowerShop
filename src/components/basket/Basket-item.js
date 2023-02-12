import { useSelector, useDispatch } from 'react-redux'
import { flowersBasketChange, changePriceBasket } from '../../actions'
import { Link } from 'react-router-dom'

import './basket.scss'

const BasketItem = ({ img, name, price, quantity, id }) => {
    const { flowersBasket } = useSelector((store) => store)
    const dispatch = useDispatch()

    const saveData = (array) => {
        dispatch(flowersBasketChange(array))
        localStorage.setItem('flowersBasket', JSON.stringify(array))
        dispatch(changePriceBasket())
    }

    const handleDelete = () => {
        const temp = flowersBasket.map((el) => el.id)
        const temp2 = temp.indexOf(id)
        const newBasket = flowersBasket.filter((item, i) => i !== temp2)
        saveData(newBasket)
    }

    const counterChange = (num) => {
        const temp = flowersBasket.map((el) => el.id)
        const temp2 = temp.indexOf(id)
        if (num < 0) {
            if (quantity > 1) {
                flowersBasket[temp2].quantity += num
                saveData(flowersBasket)
            }
        } else {
            flowersBasket[temp2].quantity += num
            saveData(flowersBasket)
        }
    }

    return (
        <div className='cart__item'>
            <div className='cart-item__delete' onClick={() => handleDelete()}>
                <span className='left'></span>
                <span className='right'></span>
            </div>
            <div className='cart-item__img'>
                <Link to={`/flower/${id}`} target='_blank'>
                    <img src={`${process.env.PUBLIC_URL}/flowers_img/${img}`} alt='Цветок' />
                </Link>
            </div>

            <div className='cart-item__wrapp'>
                <div className='cart-item__name'>
                    <p>{name}</p>
                </div>

                <div className='cart-item__counter'>
                    <button className='cart-btn-mines cart-counter--btn count_center' onClick={() => counterChange(-1)}>
                        <div className='count_center'>-</div>
                    </button>
                    <div className='cart-count--number count_center'>
                        <div className='cart-count--number-item '>{quantity}</div>
                    </div>
                    <button className='cart-btn-plus cart-counter--btn count_center' onClick={() => counterChange(1)}>
                        <div className='count_center'>+</div>
                    </button>
                </div>
            </div>

            <div className='cart-item__price'>
                {quantity >= 2 ? `${price} x ${quantity} = ${price * quantity}` : price} р
            </div>
        </div>
    )
}

export default BasketItem
