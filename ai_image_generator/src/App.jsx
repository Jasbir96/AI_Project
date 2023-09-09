import './App.css';
import React, { useState } from "react";
import fetchImagesArr from './fetchImageData';
function App() {
// get the input
  const [searchItem, setSearchItem] = useState("");
// style application-> loader
  const [isLoadingVisible, setisLoadingVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  // is used ot store the result of images
  const [imagesArr, setImagesArr] = useState([]);

  const handleInput = async () => {
    setisLoadingVisible(true);
    setLoading(true);
    console.log("getting the data:  and making the request", searchItem);
    const arr = await fetchImagesArr(searchItem);
    setLoading(false);
    setisLoadingVisible(false);
  
    setImagesArr(arr);
  }



  const styleObject = { display: isLoadingVisible === true ? "block" : "none" };
  return (
    <>
      <h1>Image Generator</h1>
      <div className="container">
        <div className="input_wrapper" >
          <input type="text" id="text-input" value={searchItem}
            onChange={(e) => { setSearchItem(e.target.value) }}
          />
          <button id="generate-button" onClick={handleInput}>
            Generate</button>
        </div>
        <div className="image-grid">
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[0].url} ></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[1].url} ></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject} >...loading</div> : <img src={imagesArr[2].url}></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject} >...loading</div> : <img src={imagesArr[3].url} ></img>}
          </div>

        </div>
      </div>



    </>

  )
}


export default App
