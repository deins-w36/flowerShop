import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { flowersBasketChange, changePriceBasket } from '../../actions'

import './order.scss'

const OrderItem = ({ name, img, quantity, price, id }) => {
    const { flowersBasket } = useSelector((store) => store)
    const dispatch = useDispatch()

    const handleDelete = () => {
        const temp = flowersBasket.map((el) => el.id)
        const temp2 = temp.indexOf(id)
        const newBasket = flowersBasket.filter((item, i) => i !== temp2)
        dispatch(flowersBasketChange(newBasket))
        localStorage.setItem('flowersBasket', JSON.stringify(newBasket))
        dispatch(changePriceBasket())
    }

    return (
        <div className='order-item'>
            <div className='order-item__delete' onClick={() => handleDelete()}>
                <span className='left'></span>
                <span className='right'></span>
            </div>
            <div className='order-item__img'>
                <Link to={`/flower/${id}`} target='_blank'>
                    <img src={`${process.env.PUBLIC_URL}/flowers_img/${img}`} alt='Букет цветов' />
                </Link>
            </div>
            <div className='order-item__name'>
                <p>{name}</p>
            </div>
            <div className='order-item__price'>
                {quantity >= 2 ? `${price} x ${quantity} = ${price * quantity}` : price} р
            </div>
        </div>
    )
}

export default OrderItem
