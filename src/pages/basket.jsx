import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"

const [basket, setBasket] = useState('')

function Basket() {

    const params = useParams()
    useEffect(() => {
        fetch('http://localhost:3000/basket')
            .then(resp => resp.json())
            .then(basket => setBasket(basket))
    }, [])
    return (
        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    <li>
                        <article className="basket-container__item">
                            <img
                                src={params.image}
                                alt={params.title}
                                width={90}
                            />
                            <p>{params.title}</p>
                            <p>
                                Qty:
                                <select>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select >
                            </p>

                            <p>{params.price}</p>
                        </article>
                    </li>

                </ul>

                <h3>Your total: £109.95</h3>
            </section>
        </main>

    )
}

export default Basket