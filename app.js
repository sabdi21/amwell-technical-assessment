//Global Variables
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.iwillfearnoevil.com/screen/string.txt";
let dataArray;

//DOM references
let button = document.getElementById('button')
let allData = document.getElementById('all-data');


//fetch data from URL
function fetchData(url) {
    fetch(url)
        .then(res => {
            return res.text();
        })
        .then(data => {
            console.log("Success:", data);
            dataArray = data
        })
        .catch((err) => {
        console.log("Something went wrong.", err);
        });
}
//Sending the request through a proxy
fetchData(proxyUrl + url)

// helper function to clean and sort the data
function cleanData(data) {
    let result = []
    let string = data.split((/\r?\n/))
    for (let i = 0; i < string.length; i++) {
        result.push(parseInt(string[i]))  
    }
      // allData.textContent = dataArray
    let sorted = result.sort((a, b) => a - b)
    const cleanArray = new Set(sorted)
    return finalArray = [...cleanArray]
}

// event listener to retrieve data
button.addEventListener('click',() => {
    allData.textContent = dataArray
    console.log('testing', cleanData(dataArray))
})