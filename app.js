
const consumption = document.getElementById("consumption");
const climate = document.getElementById("climate");
const people = document.getElementById("people");
const resouces = document.getElementById("resources");

consumption.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "do your bitl shop only what you need,eat only what you need and lways save the left overs.";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    consumption.style.backgroundColor = "green";
    climate.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";
};



climate.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22";
    climate.style.backgroundColor = "green";

    consumption.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";





};
resources.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    resources.style.backgroundColor = "green";
    consumption.style.backgroundColor = "transparent";
    climate.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";






};
people.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";


    document.getElementById("save").innerText = "";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Aria";
    people.style.backgroundColor = "green";
    consumption.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
    climate.style.backgroundColor = "transparent";






};
