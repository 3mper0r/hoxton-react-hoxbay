import { useState } from "react"
import { useEffect } from "react/cjs/react.development"


const [electronicsItems, setElectronicsItems] = useState('electronics')

function Electronics() {
    useEffect(() => {
        fetch('http://localhost:3000/categories/1')
            .then(resp => resp.json())
            .then(electronicsItems => setElectronicsItems(electronicsItems))

    }, [])

    return (
        <div>electronics</div>
    )
}

export default Electronics