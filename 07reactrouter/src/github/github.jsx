import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const[data,setdata] = useState([])
    useEffect(() => {
        fetch('https://github.com/hiteshchoudhary/chai-aur-react/blob/main/07reactRouter/src/components/Contact/Contact.jsx')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setdata(data)
        })
    }, [])
    return (
       <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl '>github followers: {data.followers}  
       <img src={data.avatar_url} alt="git picture" width={300} /></div> 
    )
}

export default Github
