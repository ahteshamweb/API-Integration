import React, { useEffect } from 'react'

function Stories() {
    let API="https://hn.algolia.com/api/v1/search?query=html";
    let isLoading=true;
    const fetchApiData= async(url)=>{
        try {
            const res= await fetch(url);
            const data=await res.json();
            console.log(data);
            // isLoading=false;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API)
    },[]);
    // if(isLoading){
    //     return <>
    //     <h1>Loading.......</h1>
    //     </>
    // }
  return (
     <>
     Api Integration In Console
     </>
  )
}

export default Stories