import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

const [products, setProducts] = useState('')
function Products() {
    const params = useParams()
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(products => setProducts(products))
    }, [])
    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    <li>
                        <Link to="/products/1">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/2">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/3">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/4">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/5">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/6">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/7">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/8">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/9">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/10">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/11">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/12">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/13">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/14">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/15">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/16">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/17">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/18">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/19">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/20">
                            <article className="product-item">
                                <img src={params.image} alt={params.title} />
                                <h3>{params.title}</h3>
                            </article>
                        </Link>
                    </li>
                </ul>
            </section>
        </main>

    )
}

export default Products