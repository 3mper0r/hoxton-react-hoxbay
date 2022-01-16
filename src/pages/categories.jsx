import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Categories() {

    const [categories, setCategories] = useState('')
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(resp => resp.json())
            .then(categories => setCategories(categories)
            )
    }, [])

    return (
        <main>
            <section className="categories-container main-wrapper">
                <ul className="categories-container__list">
                    <li><Link to="/categories/1">electronics</Link></li>
                    <li><Link to="/categories/2">jewelery</Link></li>
                    <li><Link to="/categories/3">men's clothing</Link></li>
                    <li><Link to="/categories/4">women's clothing</Link></li>
                </ul>
            </section>
        </main>
    )
}

export default Categories