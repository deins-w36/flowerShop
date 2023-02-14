import { useNavigate } from 'react-router-dom'

import '../pageBad/bad.scss'

const PageReFetch = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        const idPayment = localStorage.getItem('idPayment')
        fetch('../server/checkPayment.php', {
            method: 'POST',
            body: JSON.stringify({
                idPayment: idPayment
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((w) => {
                if (w.status === 'canceled') {
                    navigate('/bad')
                    return
                }
                if (w.status === 'pending') {
                    navigate(0)
                    return
                }
                if (w.status === 'succeeded') {
                    localStorage.setItem('status', w.status)
                    navigate('/good')
                    return
                }
            })
            .catch(() => navigate('/bad'))
    }

    return (
        <main>
            <section className='container-fluid'>
                <div className='bad__text'>
                    К сожалению Вы не завершили оплату. Если считаете, что это ошибка и деньги с карты у Вас списались,
                    нажмите на кнопку ниже. Мы отправим еще один запрос, если после нажатия ничего не поменялось, значит
                    оплата все еще не совершена.
                </div>
                <div className='bad__text'>
                    <button onClick={() => handleClick()}>Нажать сюда</button>
                </div>
            </section>
        </main>
    )
}

export default PageReFetch
