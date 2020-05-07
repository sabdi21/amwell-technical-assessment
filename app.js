//Global Variables
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.iwillfearnoevil.com/screen/string.txt";
let dataArray;


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

