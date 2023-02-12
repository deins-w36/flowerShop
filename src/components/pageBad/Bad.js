import { Link } from 'react-router-dom'

import './bad.scss'

const Bad = () => {
    return (
        <main>
            <section className='container-fluid'>
                <div className='bad__text'>К сожалению что то пощло не так, попробуйте повторить заказ позже </div>
                <div className='bad__text'>
                    <Link to='/'>На главную страницу</Link>
                </div>
            </section>
        </main>
    )
}

export default Bad
