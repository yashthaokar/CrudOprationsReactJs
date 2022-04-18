import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Read() {
  const [getApi, setGetApi] = useState([]);
  useEffect(() => {
    axios.get(`https://625d22a94c36c753576fa98c.mockapi.io/Yash`)
      .then((getData) => {
        setGetApi(getData.data);
      })
  })

  return (
    <div>
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Id</th>
            <th scope="col">update</th>
            <th scope="col">delet</th>
          </tr>
        </thead>
        <tbody>
          {getApi.map((data) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.id}</td>
                <td>
                  <Link to='/update'>
                  <button className='btn btn-warning'>update</button>
                  </Link>
                </td>
                <td>
                <Link to='/delet'>
                  <button className='btn btn-danger'>delet</button>
                  </Link>
                </td>

              </tr>

            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default Read