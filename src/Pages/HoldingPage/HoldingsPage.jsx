import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import axios from 'axios'

const HoldingsPage = () => {

  const[data,setData] = useState([])
  const [datatoShow,setDatatoShow] = useState([])
 const assetClasses = [...new Set(data.map(item => item.asset_class))];
//  console.log(assetClasses)
 const[show,setShow] = useState()
 const[visible,setVisible] = useState(false)


  useEffect(()=>{
    async function getData(){

      const response = await axios.get("https://canopy-frontend-task.vercel.app/api/holdings")
      setData(response.data.payload)
    }
    getData()
  }
  ,[])

  const filterData = (category)=>{
    const filter = data.filter(item=>item.asset_class==category);
    setDatatoShow(filter);
    setShow(category);
    setVisible(v=>!v)
  }
  return (
    <div className='w-full flex flex-col justify-center'>
      {
        assetClasses.map((item,index)=><>
        <span key={index} onClick={()=>filterData(item)} className=' cursor-pointer text-gray-600 font-bold p-3 mx-4 shadow-md'>{item} {
          visible && show == item?
        <p>
           &#9650;
          </p>
        :
        <p>
       
        &#9660;
        </p>

        }
          
</span>
        {
          show == item && visible ? 
          <Table data={datatoShow} />
          :
          <></>
        }
        </>)
      }
    </div>
  )
}

export default HoldingsPage
