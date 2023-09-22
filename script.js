// connect the sections 
const mainList = document.getElementById('main');
const selected = document.getElementById('selected');

// make a list to store the data
const people = [];
// connect the api to the page & show list
async function list(){
    const info = await fetch('https://swapi.dev/api/people');
    const data = await info.json();
    console.log(data);
    mainList.innerHTML=`
    <div>
    <h1> ${data.name} </h1>
    </div>`
};

list();