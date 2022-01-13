function heading(){
    let head = document.getElementById("heading");
    head.innerHTML = "Content Changed";
}

function Nani(){
    document.getElementById("para").style.fontSize = "30px";
}

function Visible(){
    document.getElementById("visible").style.display = "none";
}

function datum(){
    let table = document.getElementById("value");
    let tableRow = table.insertRow();
    let tableCol1 = tableRow.insertCell();
    let tableCol2 = tableRow.insertCell();
    tableCol1.innerHTML = "Cell1";
    tableCol2.innerHTML = "Cell2";


}