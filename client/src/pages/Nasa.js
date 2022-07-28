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
    //let explanation = document.createTextNode(`${data.explanation}`);
   theDiv.innerHTML =  `<img src="${data.url}"`;
   // theDiv.appendChild(explanation);
    
    console.log(data.explanation);
    //document.querySelector("#content").innerHTML = data.explanation
   // document.querySelector("#content").innerHTML = `<img src="${data.url}"`
  }

  return (
    <div>
      <h1>
      API Template
    </h1>
    <input id="searchTerm" type="text" placeholder="Enter search term" />
    <button id="search" onClick={handleClick}
>
      Search
    </button>
    <div id="content"></div>

    </div>
  )
}


//Add an event listener to the button that runs the function sendApiRequest when it is clicked

export default Nasa;