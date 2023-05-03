import React from 'react'

const Home = () => {

    const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4a9f79d581msh09ccb935b7496dcp1c981bjsn553bf010e600',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    try {
        const response =  fetch(url, options);
        const result =  response.data();
        console.log(result);
    } catch (error) {
        console.error(error);
    }


  return (
   <>
   
   </>
  )
}

export default Home