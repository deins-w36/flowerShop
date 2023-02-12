import { useDispatch } from 'react-redux'
import { sortChange } from '../../actions'

import './flowers-list.scss'

const FlowerSort = ({ sort }) => {
    const dispatch = useDispatch()
    return (
        <div className='shop__sort'>
            <ul>
                {sort.map((item, index) => (
                    <li onClick={() => dispatch(sortChange(item))} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FlowerSort
