import React, { useState } from 'react'
import axios from 'axios'


const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [data,setData]=useState([])
    const frmsubmit = (e) => {
        
        axios.post('mongodb://localhost:27017', { name, age })
    }

const GetData=()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-05-12&sortBy=publishedAt&apiKey=fe814e7619ec425e973b050abe84e21f')
    .then(responce=>responce.json())
    .then(data=>setData(data));
}
    return (
        <>
        <div className="container">
            <form onSubmit={frmsubmit}>
                <h1>Name:<input className='my-2 rows-10' value={name} type="text" onChange={(e) => setName(e.target.value)} /><br /> </h1>
                <h1> Age:<input className='mx-4' type="text" onChange={(e) => setAge(e.target.value)} /></h1>
                <input className='btn btn-success' type="Submit" value="Submit" />
            </form>
            <button onClick={GetData}>Get Data</button>

            {data.map((item, index,id)=>
            <div key={index}>
                <h5>Name:{item.author}</h5>
                <h5>Title:{item.title}</h5>
                <h5>Body:{item.description}</h5>
        </div>
            )}
                </div>
        </>
        )
}

export default Form;