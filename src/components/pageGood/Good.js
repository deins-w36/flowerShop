import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './good.scss'

const Good = () => {
    const navigate = useNavigate()

    if (localStorage.getItem('status') && localStorage.getItem('objectForMailer')) {
        const statusPayment = localStorage.getItem('status')
        const obj = JSON.parse(localStorage.getItem('objectForMailer'))
        obj.status = statusPayment

        fetch('../server/server.php', {
            method: 'POST',
            body: JSON.stringify({ obj }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(() => {
                localStorage.removeItem('status')
                localStorage.removeItem('objectForMailer')
                localStorage.removeItem('idPayment')
            })
            .catch(() => navigate('/bad'))
    }

    return (
        <main>
            <section className='container-fluid'>
                <div className='good__text'>Все прошло успешно, наш менеджер свяжется с вами в течении 5 минут!</div>
                <div className='good__text'>
                    <Link to='/'>На главную страницу</Link>
                </div>
            </section>
        </main>
    )
}

export default Good
