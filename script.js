var sPerks = ["Ace in The Hole","Adrenaline","Alert","Balanced Landing","Bond","Borrowed Time","Botany Knowledge","Calm Spirit","Dark Sense","Dead Hard","Decisive Strike","Deja Vu","Detective's Hunch","Empathy","Hope","Iron Will","Kindred","Leader","Left Behind","Lightweight","Lithe","No Mither","No One Left Behind","Object of Obsession","Open Handed","Pharmacy","Plunderer's Instinct","Premonition","Prove Thyself","Quick & Quiet","Resilience","Saboteur","Self-Care","Slippery Meat","Small Game","Sole Survivor","Spine Chill","Sprint Burst","Stake Out","Streetwise","This Is Not Happening","Technician","Tenacity","Up The Ante","Unbreakable","Urban Evasion","Vigil","Wake Up","We'll Make It","We're Gonna Live Forever"];
var killer = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Cannibal","Nightmare","Pig"];
var kPerks = ["A Nurse's Calling","Agitation","Barbecue & Chilli","Beast of Prey","Bitter Murmur","Bloodhound","Blood Warden","Brutal Strength","Deerstalker","Distressing","Dying Light","Enduring","Fire Up","Franklin's Demise","Insidious","Iron Grasp","Hangman's Trick","Hex: Devour Hope","Hex: Huntress Lullaby","Hex: No One Escapes Death","Hex: Ruin","Hex: The Third Seal","Hex: Thrill of the Hunt","Knock Out","Lightborn","Make Your Choice","Monitor & Abuse","Monstrous Shrine","Overcharge","Overwhelming Presence","Remember Me","Play With Your Food","Predator","Save The Best For Last","Shadowborn","Sloppy Butcher","Spies From The Shadows","Stridor","Surveilance","Terrtorial Imperative","Tinkerer","Thanatophobia","Unnerving Presence","Unrelenting","Whispers"];
var table = document.getElementById("table");
var players = [];
var survivorPerk = function(){
	return sPerks[Math.floor(Math.random() * sPerks.length)];
};

var killerPerk = function(){
	return kPerks[Math.floor(Math.random() * kPerks.length)];
};

function generate(callback){
	table.innerHTML = "";
	players[0] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[1] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[2] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[3] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[4] = {first:killerPerk(), second:killerPerk(), third:killerPerk(), fourth:killerPerk()};
	console.log(players[0].first);
	for(i=0;i<5;i++){
		var p = players[i];
		callback(p, generateTable);
	}
}

function createTr(p, callback){
	var tr = document.createElement("tr");
	var perk1 = document.createElement("td");
	var perk2 = document.createElement("td");
	var perk3 = document.createElement("td");
	var perk4 = document.createElement("td");
	console.log(p);
	perk1.innerText = p.first;
	perk2.innerText = p.second;
	perk3.innerText = p.third;
	perk4.innerText = p.fourth;
	tr.appendChild(perk1);
	tr.appendChild(perk2);
	tr.appendChild(perk3);
	tr.appendChild(perk4);

	callback(tr);
}

function generateTable(tr){
	table.appendChild(tr);
}