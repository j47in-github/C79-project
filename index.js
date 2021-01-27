var menu = ["Chicken Tandoori Pizza", "Deluxe Veggie Pizza", "Paneer Tikka", "Veg Extravaganza Pizza", "Veg Supreme Pizza"];
var htmldata;
var recommendedmenu = [];
var finalmenu = [];

function showMenu(){
    console.log("This code is getting executed (showMenu(line 4: console.log())))");
    htmldata = "<ol class='menulist'>"
    menu.sort();
    menu.forEach(menuItem => {
        htmldata += "<li>" + "<button id='menuitem'>" + menuItem + "</button>" + "</li>"
    });
    htmldata += "</ol>";
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItemToMenu(){
    if(document.getElementById("menuInput").value.split("").length === 0) return;
    var args = document.getElementById("menuInput").value.split("");
    args.forEach(item => {
        if(item[0] === " "){
            return;
        }
        else if(item[0] === ""){
            return;
        }
    });

    if(!recommendedmenu.includes(document.getElementById("menuInput").value + " (Recommended)")){
        recommendedmenu.push(document.getElementById("menuInput").value);
    }
    
    htmldata = "<ol class='menulist'>"
    recommendedmenu.forEach(menuItem => {
        if(!menuItem.split(" ").includes("(Recommended)")){
            recommendedmenu[recommendedmenu.indexOf(menuItem)] = menuItem + " (Recommended)";
        }        
    });
    finalmenu = menu.concat(recommendedmenu);
    finalmenu.sort();
    finalmenu.forEach(menuItem => {
        htmldata += "<li>" + "<button id='menuitem'>" + menuItem + "</button>" + "</li>"
    });
    htmldata += "</ol>";
    document.getElementById("displayMenu").innerHTML = htmldata;
}