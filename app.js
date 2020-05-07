//Global Variables
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.iwillfearnoevil.com/screen/string.txt";
let dataArray;

//DOM references
let button = document.getElementById('button')
let allData = document.getElementById('all-data');
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')

//fetch data from URL
function fetchData(url) {
    fetch(url)
        .then(res => {
            return res.text();
        })
        .then(data => {
            // console.log("Success:", data);
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
        console.log(result)
    let sorted = result.sort((a, b) => a - b) //sorts data
    let cleanArray = new Set(sorted) //removes dublicates by storing unique values
    return finalArray = [...cleanArray]
}

// event listener to retrieve data
button.addEventListener('click',() => {
    //displays all text data
    allData.textContent = dataArray

    let i = cleanData(dataArray)
    // displays three lowest integers
    one.textContent = i[0]
    two.textContent = i[1]
    three.textContent = i[2]
})