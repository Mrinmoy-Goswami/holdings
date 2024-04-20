import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import axios from 'axios'

const HoldingsPage = () => {

  const[data,setData] = useState([])
  let store = new Set();


  useEffect(()=>{
    async function getData(){

      const response =await axios.get("https://canopy-frontend-task.vercel.app/api/holdings")
      setData(response.data.payload)
    }
    getData()
  }
  ,[])
  return (
    <div className='w-full flex flex-row justify-center'>
      <Table data={data}/>
    </div>
  )
}

export default HoldingsPage
