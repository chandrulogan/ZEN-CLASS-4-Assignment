let request = new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload = () => {
    console.log("from onload");
    console.log(request.response);
    let a = JSON.parse(request.response);
    for (let index = 0; index < a.length; index++) {
        console.log(a[index]);
    }
};

request.onerror =() => {
    console.error("something went wrong");
};