const preInitialState = {
    price: JSON.parse(localStorage.getItem('flowersBasket'))
        ? JSON.parse(localStorage.getItem('flowersBasket')).reduce(
              (total, basket) => total + basket.price * basket.quantity,
              0
          )
        : 0
}

const initialState = {
    filter: 'Все букеты',
    sortMono: '',
    sortMoreLess: '',
    flowersBasket: JSON.parse(localStorage.getItem('flowersBasket')),
    priceBasket: preInitialState.price,
    isOpenBasket: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_CHANGE':
            return {
                ...state,
                filter: action.payload
            }
        case 'SORT_CHANGE':
            return {
                ...state,
                sortMono: action.payload
            }
        case 'SORT_MORE_LESS_CHANGE':
            return {
                ...state,
                sortMoreLess: action.payload
            }
        case 'FLOWERS_BASKET_CHANGE':
            return {
                ...state,
                flowersBasket: action.payload
            }
        case 'IS_OPEN_BASKET':
            return {
                ...state,
                isOpenBasket: action.payload
            }
        case 'CHANGE_PRICE_BASKET':
            return {
                ...state,
                priceBasket: state.flowersBasket
                    ? state.flowersBasket.reduce((total, basket) => total + basket.price * basket.quantity, 0)
                    : 0
            }

        default:
            return state
    }
}

export default reducer
