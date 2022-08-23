import {useState} from 'react'
import './App.css'
import Transactions from './components/Transactions/Transactions'

function App() {
    const [data, setData] = useState(null)

    return (
        <div className="App">
            <Transactions/>
        </div>
    )
}

export default App
