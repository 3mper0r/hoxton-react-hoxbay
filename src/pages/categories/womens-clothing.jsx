import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const [womens, setWomens] = useState('')
const params = useParams()

function Women_clothing() {
    useEffect(() => {
        fetch('http://localhost:3000/categories/4')
            .then(resp => resp.json())
            .then(womens => setWomens(womens))

    }, [])
    return (
        <div>
            <li>
                <Link to="/products/1">
                    <article className="product-item">
                        <img src={params.image} alt={params.title} />
                        <h3>{params.title}</h3>
                    </article>
                </Link>
            </li>
        </div>
    )
}