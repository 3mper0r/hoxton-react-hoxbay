import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Prodcut_detail() {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/products/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])

    function addItemToBasket() {
        fetch('http://localhost:3000/basket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...product, quantity: 1 })
        }).then(resp => {
            if (resp.ok) {
                navigate('/basket')
            } else {

                navigate('/basket')
            }
        })
    }

    if (product === null) return <p>loading page..</p>

    if (product.id === undefined) return <p>product not foud</p>
    return (
        <main>
            <section className="product-detail main-wrapper">
                <img src={params.image} alt={params.title} />
                <div className="product-detail__side" style={{ borderColor: "yellow" }}>
                    <h2>{params.title}</h2>
                    <p>
                        {params.description}
                    </p>
                    <p>£{params.price}</p>
                    {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                    <button
                        onClick={() => navigate.push('/basket')}
                    >Add to basket</button>
                </div>
            </section>
        </main>

    )
}

export default Prodcut_detail