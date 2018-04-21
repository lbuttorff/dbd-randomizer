//Survivor perks, Killer perks, Killers, Survivors all in separate arrays
var sPerks = ["Ace in The Hole","Adrenaline","Alert","Balanced Landing","Bond","Borrowed Time","Botany Knowledge",
    "Calm Spirit","Dark Sense","Dead Hard","Decisive Strike","Deja Vu","Detective's Hunch","Empathy","Hope",
    "Iron Will","Kindred","Leader","Left Behind","Lightweight","Lithe","No Mither","No One Left Behind",
    "Object of Obsession","Open Handed","Pharmacy","Plunderer's Instinct","Premonition","Prove Thyself",
    "Quick & Quiet","Resilience","Saboteur","Self-Care","Slippery Meat","Small Game","Sole Survivor","Spine Chill",
    "Sprint Burst","Stake Out","Streetwise","This Is Not Happening","Technician","Tenacity","Up The Ante",
    "Unbreakable","Urban Evasion","Vigil","Wake Up","We'll Make It","We're Gonna Live Forever"
];
var kPerks = ["A Nurse's Calling","Agitation","Barbecue & Chilli","Beast of Prey","Bitter Murmur","Bloodhound",
    "Blood Warden","Brutal Strength","Deerstalker","Distressing","Dying Light","Enduring","Fire Up",
    "Franklin's Demise","Insidious","Iron Grasp","Hangman's Trick","Hex: Devour Hope","Hex: Huntress Lullaby",
    "Hex: No One Escapes Death","Hex: Ruin","Hex: The Third Seal","Hex: Thrill of the Hunt","Knock Out","Lightborn",
    "Make Your Choice","Monitor & Abuse","Monstrous Shrine","Overcharge","Overwhelming Presence","Remember Me",
    "Play With Your Food","Predator","Save The Best For Last","Shadowborn","Sloppy Butcher",
    "Spies From The Shadows","Stridor","Surveilance","Terrtorial Imperative","Tinkerer","Thanatophobia",
    "Unnerving Presence","Unrelenting","Whispers"
];
var survivor = ["Dwight Fairfield","Meg Thomas","Claudette Morel","Jake Park","Nea Karlsson","Laurie Strode",
    "Ace Visconti","Bill Overbeck","Feng Min","David King","Quentin Smith","David Tapp"
];
var killer = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Cannibal","Nightmare","Pig"];
var maps = ["Coal Tower","Groaning Storehouse","Ironworks of Misery","Shelter Woods","Suffocation Pit",
    "Azarov's Resting Place","Blood Lodge","Gas Heaven","Wretched Shop","Wrecker's Yard","Fractured Cowshed",
    "The Thompson House","Torment Creek","Rancid Abattoir","Rotten Fields","Disturbed Ward","Lampkin Lane",
    "The Pale Rose","Grim Pantry","Treatment Theatre","Mother's Dwelling","Badham Preschool","The Game"
];
//The table in index.html
var table = document.getElementById("table");
//Function to randomly select a survivor perk from the sPerks array
var survivorPerk = function(perks){
	return perks[Math.floor(Math.random() * perks.length)];
};
//Function to randomly select a killer perk from the kPerks array
var killerPerk = function(){
	return kPerks[Math.floor(Math.random() * kPerks.length)];
};
//Function to randomly select a killer from the killer array
var killerPick = function(){
	return killer[Math.floor(Math.random() * killer.length)]
};
//Function to randomly select a survivor from the survivor array
var survivorPick = function(){
    return survivor[Math.floor(Math.random() * survivor.length)];
};
//Function to randomly select a map from the maps array
var mapPick = function(){
    return maps[Math.floor(Math.random() * maps.length)];
};

var createPlayer = function(charF, perkF, array){
    var temp = array.slice();
    var player = {
        char:charF(),
        first:"",
        second:"",
        third:"",
        fourth:""
    };
    player.first = perkF(temp);
    temp.splice(temp.indexOf(player.first), 1);
    player.second = perkF(temp);
    temp.splice(temp.indexOf(player.second), 1);
    player.third = perkF(temp);
    temp.splice(temp.indexOf(player.third), 1);
    player.fourth = perkF(temp);
    return player;
};
//Called by the button on index.html, begins generation of a game board
function generate(){
	clearTable();
    var players = [];
    for(var i=0;i<4;i++){
        players[i] = createPlayer(survivorPick, survivorPerk, sPerks);
    }
    players[4] = createPlayer(killerPick, killerPerk, kPerks);
	//console.log(players[0].first);
    createMapTr(mapPick(), updateTable);
    createTh(updateTable);
	for(i=0;i<5;i++){
		var p = players[i];
        createTr(p, updateTable);
	}
    document.getElementById("clickText").innerText = "Click the button to generate another board!";
}
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