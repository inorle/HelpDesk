import React from 'react'

const App = () => {
    const clicked = async () => {
        const test = fetch('/api').then((data) => data.json()).then(data=> console.log(data))
        return test
    }
     
    return(
        <div>
            <button onClick={clicked}> HI </button>
        </div>

    )
}
export default App;