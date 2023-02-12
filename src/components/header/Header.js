import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTogleBasket } from '../../actions'

import imgMap from '../../assets/img/map-mark.svg'
import imLogo from '../../assets/img/цветник.JPG'
import imgPhone from '../../assets/img/phone-mark.svg'
import imgBasket from '../../assets/img/cart-icon.svg'
import './header.scss'

const Header = () => {
    const { priceBasket } = useSelector((store) => store)
    const [burgerMenu, setBurgerMenu] = useState(false)
    const dispatch = useDispatch()
    let clazzNav = 'nav'
    let clazzBtn = 'burger__btn'
    clazzNav = burgerMenu ? 'nav visible' : clazzNav
    clazzBtn = burgerMenu ? 'burger__btn active' : clazzBtn

    return (
        <header className='header container-fluid'>
            <div className='header__wrapper container'>
                <div className='contacts__link-list'>
                    <div className='contact__item link--map'>
                        <img src={imgMap} alt='Иконка карты' />
                        <a href='https://yandex.ru/profile/-/CCUzuYCcdA' target='_blank' rel='noreferrer'>
                            Казань, ул. Восстания, 67A
                            <br />
                            Ежедневно с 9.00 до 20.00
                        </a>
                    </div>
                    <div className='logo'>
                        <img src={imLogo} alt='Логотип' />
                    </div>
                    <div className='contact__item link--phone'>
                        <img src={imgPhone} alt='Иконка телефона' />
                        <a href='tel:+79600484019' target='_blank' rel='noreferrer'>
                            +7(960)-048-40-19
                        </a>
                    </div>
                </div>
                <div className='header__nav'>
                    <div className={clazzBtn} onClick={() => setBurgerMenu((menu) => !menu)}>
                        <div className='top--stick stick'></div>
                        <div className='btm--stick stick'></div>
                        <div className='btm--stick stick'></div>
                    </div>
                    <nav className={clazzNav}>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink end to='/' onClick={() => setBurgerMenu(false)}>
                                    Главная
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink end to='/payment' onClick={() => setBurgerMenu(false)}>
                                    Оплата
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink end to='/delivery' onClick={() => setBurgerMenu(false)}>
                                    Доставка
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink end to='/contacts' onClick={() => setBurgerMenu(false)}>
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='cart'>
                        <div className='sum--number'>{priceBasket ? priceBasket : '0'} р</div>
                        <img
                            onClick={() => dispatch(changeTogleBasket(true))}
                            src={imgBasket}
                            alt='Иконка корзины товаров цветочного магазина'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
