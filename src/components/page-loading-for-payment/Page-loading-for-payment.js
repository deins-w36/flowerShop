import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../page404/page404.scss'

const PageLoadingForPayment = () => {

    const navigate = useNavigate()

    useEffect(() => {
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
                localStorage.removeItem('idPayment')
                if (w.status === 'canceled') {
                    navigate('/bad')
                    return
                }
                localStorage.setItem('status', w.status)
                navigate('/good')
            })
            .catch(() => navigate('/bad'))
        //eslint-disable-next-line
    }, [])

    return (
        <main>
            <section className='container-fluid'>
                <div className='page404__text'>Подождите, загрузка !</div>
            </section>
        </main>
    )
}

export default PageLoadingForPayment
