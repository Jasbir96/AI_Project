async function fetchImagesArr(prompt) {
    // url
    const apiUrl = 'https://api.openai.com/v1/images/generations';
    // api key 
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    // headers -> what kind of data is in body
    // key you are sending
    const requestHeaders = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    // number of elements
    const requestBody = {
        // prompt 
        prompt,
        n: 4,
        size: "256x256"
    }
    // browser -> to make the request 
    console.log("made the request with api key")
    const response = await fetch(apiUrl,
        {
            method: "POST", body: JSON.stringify(requestBody),
            headers: requestHeaders
        });
    const data = await response.json();
    console.log("got the result")
    return data.data;

}

export default fetchImagesArr;