import { useParams } from 'react-router-dom'


function Prodcut_detail() {
    const params = useParams()
    // const history = useHistory()
    return (
        <main>
            <section className="product-detail main-wrapper">
                <img
                    src={params.image}
                    alt={params.title}
                />
                <div className="product-detail__side" style={{ borderColor: "yellow" }}>
                    <h3></h3>
                    <h2>{params.title}</h2>
                    <p>
                        {params.description}
                    </p>
                    <p>£{params.price}</p>
                    {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                    <button
                    // onClick={() => history.push('/basket')}
                    >Add to basket</button>
                </div>
            </section>
        </main>

    )
}

export default Prodcut_detail