import React from 'react'
import { useState } from 'react';
import axios from 'axios';




function Creat() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('');
    const [data, setData] = useState([]);

    console.log(fname);
    console.log(lname);
    const getDataFromAPI = () => {
        axios.get(`https://625a77e3cda73d132d1f7592.mockapi.io/subhranshu`)
            .then((response) => {
                return (response.data

                )

            }

            ).then((data) => setData(data))
            .catch((error) =>
                console.log(error)
            )

    };

    const sendDataToAPI = (e) => {
        e.preventDefault()
        axios.post(`https://625a77e3cda73d132d1f7592.mockapi.io/subhranshu`, {
            fname,
            lname
        })
        console.log('sendDataToAPI')
    };



    return (
        <div>
            <h1>This is crud Oprations which are sending data to the Api, and return getting the data from Api</h1>
            <form onSubmit={sendDataToAPI}>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" placeholder='type here'

                    onChange={(e) => setFname(e.target.value)} /><br />

                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" placeholder='type here'
                    onChange={(e) => setLname(e.target.value)} /><br /><br />


                <button type='submit' class="btn btn-dark" >submit</button>
                
            </form>
            <hr />
            <div className="contanier"></div>

               <div>
                   <button className='btn btn-primary' onClick={ getDataFromAPI}>getDataFromAPI </button>
                  
                  <ul>
                      {data.map((ele)=><li>{ele.fname}</li>)}
                  </ul>
                   
               </div>
        </div>
    )
}


export default Creat


