
export const filterChange = (filter) => {
    return {
        type: 'FILTER_CHANGE',
        payload: filter
    }
}
export const sortChange = (sortMono) => {
    return {
        type: 'SORT_CHANGE',
        payload: sortMono
    }
}
export const sortMoreLessChange = (sortMoreLess) => {
    return {
        type: 'SORT_MORE_LESS_CHANGE',
        payload: sortMoreLess
    }
}
export const flowersBasketChange = (item) => {
    return {
        type: 'FLOWERS_BASKET_CHANGE',
        payload: item
    }
}
export const changeTogleBasket = (bool) => {
    return {
        type: 'IS_OPEN_BASKET',
        payload: bool
    }
}
export const changePriceBasket = () => {
    return {
        type: 'CHANGE_PRICE_BASKET',
    }
}


