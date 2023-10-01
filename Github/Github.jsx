import React, { useEffect, useState } from 'react'

 function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/prasaddsahil07')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>Github followers: <span className="text-green-300 italics">prasaddsahil07 - {data.followers}</span>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prasaddsahil07')
    return response.json()
}