import { useState, useEffect } from 'react'

import imgWhats from '../../assets/img/watsapp.svg'
import imgVk from '../../assets/img/vk.png'
import imgInst from '../../assets/img/inst.png'

import './footer.scss'

const Footer = () => {
    useEffect(() => {
        if (!localStorage.getItem('cookieOnlyOne')) {
            setCookie(true)
        }
    }, [])

    const [cookie, setCookie] = useState(false)
    let clazz = 'cookies'
    clazz = cookie ? clazz : 'cookies disable'

    const handleClick = () => {
        setCookie(false)
        localStorage.setItem('cookieOnlyOne', 'true')
    }

    return (
        <footer className='container-fluid'>
            <div className='footer__wrapper container'>
                <div className='footer__row'>
                    <div className='footer__col documents--col'>
                        <ul className='document__list'>
                            <li className='document__item'>
                                <a href='/dogovor-ofert' target='_blank'>
                                    Договор оферты
                                </a>
                            </li>
                            <li className='document__item'>
                                <a href='/politika-conf' target='_blank'>
                                    Политика конфиденциальности
                                </a>
                            </li>
                            <li className='document__item'>
                                <a href='/obrabotka-personal-data' target='_blank'>
                                    Обработка персональных данных
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__col filter--links'>
                        <ul className='footer-filter__list'>
                            <li className='list__item filter--links'>
                                <a href='/'>День рождения</a>
                            </li>
                            <li className='list__item filter--links'>
                                <a href='/'>14 февраля</a>
                            </li>
                            <li className='list__item filter--links'>
                                <a href='/'>23 февраля</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__col filter--links'>
                        <ul className='footer-filter__list'>
                            <li className='list__item filter--links'>
                                <a href='/'>8 марта</a>
                            </li>
                            <li className='list__item filter--links'>
                                <a href='/'>День учителя</a>
                            </li>
                            <li className='list__item filter--links'>
                                <a href='/'>День матери</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__col social--links'>
                        <div className='title__text'>
                            <h4>Мы в соц.сетях</h4>
                        </div>
                        <div className='media__list'>
                            <a
                                href='https://wa.me/79600484019?text=Здравствуйте! Хочу заказать у вас букет. '
                                className='media__link link--block'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={imgWhats} alt='Иконка ватаспа для заказа букета' />
                            </a>
                            <a
                                href='https://vk.com/cvetnikflo'
                                className='media__link link--block'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={imgVk} alt='Иконка vkontakte для заказа букета' />
                            </a>
                            <a href='/' className='media__link link--block' target='_blank' rel='noreferrer'>
                                <img src={imgInst} alt='Иконка instagram для заказа букета' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={clazz}>
                <div className='cookies__text'>Мы используем файлы cookies, чтобы сайтом было пользоваться удобно</div>
                <button className='cookies__btn' onClick={() => handleClick()}>
                    Хорошо
                </button>
            </div>
        </footer>
    )
}

export default Footer
