function load() {
    console.log("hej");
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        let test = data[0].id;
        console.log(test);
})};