import { useDispatch } from 'react-redux'
import { filterChange, sortChange } from '../../actions'

import './filters.scss'

const FiltersItem = ({ name, handleChange }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(filterChange(name))
        dispatch(sortChange(''))
        handleChange(false)
    }

    return (
        <li className='filter__list-item variants--flower'>
            <button onClick={() => handleClick()}>{name}</button>
        </li>
    )
}

export default FiltersItem
