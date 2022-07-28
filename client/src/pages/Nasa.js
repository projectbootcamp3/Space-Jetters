import React from "react";


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data



const Nasa = () => {

  const handleClick = () => {
    SendApiRequest()
  }
  
  async function SendApiRequest(){
    let API_KEY = "U1aqZztofic6kowdhekYhQtUpbjGDemCLmFkr0VC"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json()
    useApiData(data)
  }

  function useApiData(data){
    let theDiv = document.getElementById("content");
    let explanation = document.createTextNode(`${data.explanation}`);
   let img = theDiv.innerHTML = `<div className="nasa-img-box"><img src="${data.url}"</div>`
   theDiv.appendChild(explanation);
   theDiv.appendChild(img);
    
    console.log(data.explanation);
    //document.querySelector("#content").innerHTML = data.explanation
   // document.querySelector("#content").innerHTML = `<img src="${data.url}"`
  }

  return (
    <div className="nasa-wrapper ">
      <h1 className="sub-title">
      NASA PICTURE OF THE DAY
    </h1>
    <div className="btn-nasa-box">
    <button id="search-nasa" className="nasa-btn btn-secondary" onClick={handleClick}
>
      Search
    </button>
    </div>
    <div id="content"></div>

    </div>
  )
}


//Add an event listener to the button that runs the function sendApiRequest when it is clicked

export default Nasa;