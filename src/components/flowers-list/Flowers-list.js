import { useSelector } from 'react-redux'

import Filters from '../filters/Filters'
import FlowersListItem from './Flowers-listI-item'
import FlowerSort from './Flowers-sort'

import './flowers-list.scss'

import data from '../../data.json'

const FlowersList = () => {
    const { filter, sortMono, sortMoreLess } = useSelector((store) => store)

    const filterFlowersss =
        filter === 'Все букеты' ? data.flowers : data.flowers.filter((item) => filter === item.filter) //фильтр

    const filterFlowerss = sortMono ? filterFlowersss.filter((item) => sortMono === item.sort) : filterFlowersss //Сортировка monoБукетов

    let filterFlowers = []
    const temp = JSON.parse(JSON.stringify(filterFlowerss))

    //Сортировка по цене
    if (sortMoreLess === '') {
        filterFlowers = filterFlowerss
    }
    if (sortMoreLess === 'less') {
        filterFlowers = temp.sort((a, b) => (a.price > b.price ? 1 : -1))
    }
    if (sortMoreLess === 'more') {
        filterFlowers = temp.sort((a, b) => (a.price < b.price ? 1 : -1))
    }

    return (
        <main>
            <section className='shop__section container-fluid'>
                <div className='shop__filter--title'>
                    <h2>{filter}</h2>
                </div>

                <Filters filters={data.filters} />

                <div className='shop__wrapper container'>
                    {filter === 'Монобукеты' ? <FlowerSort sort={data.sort} /> : null}

                    <div className='shop__list'>
                        <div className='shop__row row--maxcol3'>
                            {filterFlowers.map((item) => {
                                return (
                                    <FlowersListItem
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        img={item.img}
                                        flowerId={item.id}
                                        item={item}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FlowersList
