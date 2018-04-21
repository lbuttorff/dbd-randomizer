//The table in index.html
var table = document.getElementById("table");
//Called by the button on index.html, begins generation of a game board
function generate(){
	clearTable();
    var players = [];
    for(var i=0;i<4;i++){
        players[i] = createPlayer(picker(survivorList()), survivorPerks());
    }
    players[4] = createPlayer(picker(killerList()), killerPerks());
	//console.log(players[0].first);
    createMapTr(picker(mapList()), updateTable);
    createTh(updateTable);
	for(i=0;i<5;i++){
		var p = players[i];
        createTr(p, updateTable);
	}
    document.getElementById("clickText").innerText = "Click the button to generate another board!";
}
//Creates a player object and selects perks for the player
var createPlayer = function(char, array){
    var temp = array.slice();
    var player = {
        char:char,
        first:"",
        second:"",
        third:"",
        fourth:""
    };
    player.first = picker(temp);
    temp.splice(temp.indexOf(player.first), 1);
    player.second = picker(temp);
    temp.splice(temp.indexOf(player.second), 1);
    player.third = picker(temp);
    temp.splice(temp.indexOf(player.third), 1);
    player.fourth = picker(temp);
    return player;
};
//Creates the table row for the map header and map
function createMapTr(map, callback){
    var trH = document.createElement("tr");
    var th = document.createElement("th");
    var tr = document.createElement("tr");
    var pick = document.createElement("td");
    th.colSpan = 5;
    th.innerText = "Map";
    pick.colSpan = 5;
    pick.innerText = map;
    tr.appendChild(pick);
    trH.appendChild(th);
    callback(trH);
    callback(tr);
}
//Creates the table headers
function createTh(callback){
    var headers = document.createElement("tr");
    var char = document.createElement("th");
    var p1 = document.createElement("th");
    var p2 = document.createElement("th");
    var p3 = document.createElement("th");
    var p4 = document.createElement("th");
    char.innerText = "Character";
    p1.innerText = "Perk 1";
    p2.innerText = "Perk 2";
    p3.innerText = "Perk 3";
    p4.innerText = "Perk 4";
    headers.appendChild(char);
    headers.appendChild(p1);
    headers.appendChild(p2);
    headers.appendChild(p3);
    headers.appendChild(p4);
    callback(headers);
}
//Creates the table row for a survivor/killer
function createTr(p, callback){
	var tr = document.createElement("tr");
	var pick = document.createElement("td");
	var perk1 = document.createElement("td");
	var perk2 = document.createElement("td");
	var perk3 = document.createElement("td");
	var perk4 = document.createElement("td");
	//console.log(p);
	pick.innerText = p.char;
	perk1.innerText = p.first;
	perk2.innerText = p.second;
	perk3.innerText = p.third;
	perk4.innerText = p.fourth;
	tr.appendChild(pick);
	tr.appendChild(perk1);
	tr.appendChild(perk2);
	tr.appendChild(perk3);
	tr.appendChild(perk4);

	callback(tr);
}
//Adds a table row to the table on index.html
function updateTable(tr){
	table.appendChild(tr);
}
//Clears the table
function clearTable(){
    table.innerHTML = "";
}