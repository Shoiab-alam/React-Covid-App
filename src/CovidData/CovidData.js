import React, { useEffect, useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const CovidData = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise)
    }


  useEffect(() => {
    getData();
  },[])
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center"><span className="heading-span">INDIA</span> COVID 19 DASHBOARD</h1>
        </div>
        <div className="table-container">
          <table className="table table-hover">
            <thead className='table-dark'>
              <tr>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated on</td>
              </tr>
            </thead>
            <tbody>
              {
                data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.state}</td>
                      <td>{data.confirmed}</td>
                      <td>{data.recovered}</td>
                      <td>{data.deaths}</td>
                      <td>{data.active}</td>
                      <td>{data.lastupdatedtime}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CovidData;