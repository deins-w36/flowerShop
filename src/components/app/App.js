import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Contacts from '../contacts/Contacts'
import Payment from '../payment/Payment'
import Delivery from '../delivery/Delivery'
import FlowersList from '../flowers-list/Flowers-list'
import FlowersItem from '../flowers-item/Flowers-item'
import Basket from '../basket/Basket'
import Order from '../order/Order'
import Page404 from '../page404/Page404'
import Good from '../pageGood/Good'
import Bad from '../pageBad/Bad'
import PolitikaConf from '../politika-conf/Politika-conf'
import PersonalData from '../personal-data/Personal-data'
import DogovorOfert from '../dogovor-ofert/Dogovor-ofert'
import PageLoadingForPayment from '../page-loading-for-payment/Page-loading-for-payment'
import PageReFetch from '../page-refetch/Page-refetch'
import ScrollToTop from '../scroll-to-top/Scroll-to-top'

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route exact path='/' element={<FlowersList />} />
                <Route exact path='/contacts' element={<Contacts />} />
                <Route exact path='/payment' element={<Payment />} />
                <Route exact path='/delivery' element={<Delivery />} />
                <Route exact path='/order' element={<Order />} />
                <Route exact path='/good' element={<Good />} />
                <Route exact path='/obrabotka-personal-data' element={<PersonalData />} />
                <Route exact path='/bad' element={<Bad />} />
                <Route exact path='/politika-conf' element={<PolitikaConf />} />
                <Route exact path='/dogovor-ofert' element={<DogovorOfert />} />
                <Route exact path='/page-loading-for-payment' element={<PageLoadingForPayment />} />
                <Route exact path='/page-re-fetch' element={<PageReFetch />} />
                <Route path='/flower/:flowerId' element={<FlowersItem />} />
                <Route exact path='*' element={<Page404 />} />
            </Routes>
            <Basket />
            <Footer />
        </Router>
    )
}

export default App
