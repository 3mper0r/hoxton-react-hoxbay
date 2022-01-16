import { useState } from "react"


const [electronicsItems, setElectronicsItems] = useState('electronics')

function Electronics() {

    return (
        fetch('http://localhost:3000/categories/1')
            .then(resp => resp.json)
            .then(electronicsItems => setElectronicsItems('electronics'))
    )
}

export default Electronics