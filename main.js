//pseudo code
// Goal: Display data returned from an api
//look for a free working api 
//after securing api key read through documentation fo figure out how to use it in the url
//check on postman if its working if not look for another one
//after getting the api 
//start coding and run the api on the console to see what data it shows 
//choose the data i want and create my html based on it to make it easy the display on dom
//work on js file using event listener to run my function
//inside my function create my variables inside
//start my fetch to get my json res
//turn it into readable data 
//grab it from the html and display it on the dom using the data i got back on my console
//create my catch for errors  
//after making my app working i will style iti in css
//push into github
//https://api.thecatapi.com/v1/images/0XYvRd7oD?Api=live_961r9DKGemqoKojNOvaRAq0cYKv0XaUlIEADq4dwY3kLyFv6J4ImwFU6Rd839RFd

document.querySelector('button').addEventListener('click', getPic)

function getPic() {
    // const pic = document.querySelector('input').value;
    const url = `https://api.thecatapi.com/v1/images/0XYvRd7oD?ApiKey=live_961r9DKGemqoKojNOvaRAq0cYKv0XaUlIEADq4dwY3kLyFv6J4ImwFU6Rd839RFd`



    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.url
            document.querySelector('p').innerText = data.breeds[0].description
            document.querySelector('h3').innerText = data.breeds[0].origin
              document.querySelector('h4').innerText = data.height
           

        })
}
