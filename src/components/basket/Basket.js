import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeTogleBasket } from '../../actions'

import BasketItem from './Basket-item'

import './basket.scss'

const Basket = () => {
    const { isOpenBasket, priceBasket, flowersBasket } = useSelector((store) => store)
    const dispatch = useDispatch()
    // const contentWrapperRef = useRef(null)
    const contentNoWrapperRef = useRef(null)
    let clazzBasket = 'cart__popup'
    clazzBasket = isOpenBasket ? (clazzBasket += '_active') : clazzBasket
    useEffect(() => {
        // const contentWraper = contentWrapperRef.current
        const contentNoWrapper = contentNoWrapperRef.current

        // contentWraper.addEventListener('wheel', handleScrolling)
        contentNoWrapper.addEventListener('click', handleClick)

        return () => {
            // contentWraper.removeEventListener('wheel', handleScrolling)
            contentNoWrapper.removeEventListener('click', handleClick)
        }
        // eslint-disable-next-line
    }, [])

    // function handleScrolling(e) {
    //     e.preventDefault()
    //     e.stopPropagation()
    // }
    function handleClick() {
        dispatch(changeTogleBasket(false))
    }

    return (
        <div className={clazzBasket} /* ref={contentWrapperRef} */>
            <div className='popup__wrapper'>
                <div className='popup__close-btn' onClick={() => dispatch(changeTogleBasket(false))}>
                    <span className='left'></span>
                    <span className='right'></span>
                </div>
                <div className='cart__list'>
                    {flowersBasket && flowersBasket.length > 0 ? (
                        flowersBasket.map((item) => (
                            <BasketItem
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                            />
                        ))
                    ) : (
                        <div className='cart-item__name center'>У вас пока что нет товаров в корзине</div>
                    )}
                </div>
                <div className='cart__popup--footer'>
                    <div className='popup-footer__text'>
                        Сумма товаров: <div className='items--sum'>{priceBasket ? priceBasket : '0'} р</div>
                    </div>
                    {flowersBasket && flowersBasket.length > 0 ? (
                        <Link to={'/order'} onClick={() => dispatch(changeTogleBasket(false))}><div className='popup-footer__btn'>ОФОРМИТЬ ЗАКАЗ</div></Link>
                    ) : null}
                </div>
            </div>
            <div className='cart__overlay' ref={contentNoWrapperRef}></div>
        </div>
    )
}

export default Basket
