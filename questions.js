const url = 'http://127.0.0.1:5000/getQs'
fetch(url)
.then(response => response.json())  
.then(json => {
    // this is the response from flask
    console.log(json);
})