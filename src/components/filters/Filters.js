import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortMoreLessChange } from '../../actions'

import FiltersItem from './Filters-item'

import './filters.scss'

const Filters = ({ filters }) => {
    const dispatch = useDispatch()
    const { filter } = useSelector((store) => store)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)

    const handleChange = (trigger) => {
        setCheck1((check) => trigger)
    }

    return (
        <aside className='shop__filter'>
            <div className='filter__wrapper'>
                <div className='filter__item filter--buket'>
                    <input
                        type='checkbox'
                        name='filter_1'
                        className='filter__input'
                        id='filter_1'
                        checked={check1}
                        onChange={() => setCheck1((check) => !check)}
                    />
                    <label htmlFor='filter_1' className='filter__label'>
                        {filter}
                    </label>
                    <div className='filter__list'>
                        <ul>
                            {filters.map((filter) => (
                                <FiltersItem key={filter} name={filter} handleChange={handleChange} />
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <div className='filter__item filter--color'>
                    <input type='checkbox' name='filter_2' className='filter__input' id='filter_2' />
                    <label htmlFor='filter_2' className='filter__label'>
                        Цвет
                    </label>
                    <div className='filter__list'>
                        <ul className='list__tems-color'>
                            <li>
                                <div className='red circle'></div>
                            </li>
                            <li>
                                <div className='white circle'></div>
                            </li>
                            <li>
                                <div className='blue circle'></div>
                            </li>
                            <li>
                                <div className='yellow circle'></div>
                            </li>
                            <li>
                                <div className='green circle'></div>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div className='filter__item filter--style'>
                    <input
                        type='checkbox'
                        name='filter_3'
                        className='filter__input'
                        id='filter_3'
                        checked={check2}
                        onChange={() => setCheck2((check2) => !check2)}
                    />
                    <label htmlFor='filter_3' className='filter__label'>
                        Сортировка
                    </label>
                    <div className='filter__list'>
                        <ul>
                            <li className='filter__list-item variants--flower'>
                                <button
                                    onClick={() => {
                                        setCheck2((check2) => !check2)
                                        dispatch(sortMoreLessChange(''))
                                    }}
                                >
                                    По умолчанию
                                </button>
                            </li>
                            <li className='filter__list-item variants--flower'>
                                <button
                                    onClick={() => {
                                        setCheck2((check2) => !check2)
                                        dispatch(sortMoreLessChange('less'))
                                    }}
                                >
                                    Сначала дешевые
                                </button>
                            </li>
                            <li className='filter__list-item variants--flower'>
                                <button
                                    onClick={() => {
                                        setCheck2((check2) => !check2)
                                        dispatch(sortMoreLessChange('more'))
                                    }}
                                >
                                    Сначала дорогие
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Filters
