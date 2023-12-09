// the dog api documentation can be found at this url: https://kinduff.github.io/dog-api/
// the api call will return one random dog fact each time it is called 

function getDogFact()
{
    fetch('https://dog-api.kinduff.com/api/facts?number=1')
    .then((response) => response.json())
    .then((result) => 
        {
            document.getElementById("apiResult").innerHTML = result.facts[0];
        })
    .catch((error) => {
        document.getElementById("apiResult").innerHTML = 'Error! please refresh and try again: ' + error;
    });
}