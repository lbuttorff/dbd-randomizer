var sPerks = ["Ace in The Hole","Adrenaline","Alert","Balanced Landing","Bond","Borrowed Time","Botany Knowledge","Calm Spirit","Dark Sense","Dead Hard","Decisive Strike","Deja Vu","Detective's Hunch","Empathy","Hope","Iron Will","Kindred","Leader","Left Behind","Lightweight","Lithe","No Mither","No One Left Behind","Object of Obsession","Open Handed","Pharmacy","Plunderer's Instinct","Premonition","Prove Thyself","Quick & Quiet","Resilience","Saboteur","Self-Care","Slippery Meat","Small Game","Sole Survivor","Spine Chill","Sprint Burst","Stake Out","Streetwise","This Is Not Happening","Technician","Tenacity","Up The Ante","Unbreakable","Urban Evasion","Vigil","Wake Up","We'll Make It","We're Gonna Live Forever"];
var killer = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Cannibal","Nightmare","Pig"];
var kPerks = ["A Nurse's Calling","Agitation","Barbecue & Chilli","Beast of Prey","Bitter Murmur","Bloodhound","Blood Warden","Brutal Strength","Deerstalker","Distressing","Dying Light","Enduring","Fire Up","Franklin's Demise","Insidious","Iron Grasp","Hangman's Trick","Hex: Devour Hope","Hex: Huntress Lullaby","Hex: No One Escapes Death","Hex: Ruin","Hex: The Third Seal","Hex: Thrill of the Hunt","Knock Out","Lightborn","Make Your Choice","Monitor & Abuse","Monstrous Shrine","Overcharge","Overwhelming Presence","Remember Me","Play With Your Food","Predator","Save The Best For Last","Shadowborn","Sloppy Butcher","Spies From The Shadows","Stridor","Surveilance","Terrtorial Imperative","Tinkerer","Thanatophobia","Unnerving Presence","Unrelenting","Whispers"];
var table = document.createElement("table");

var survivorPerk = function(){
	return sPerks[Math.floor(Math.random() * sPerks.length)];
};

var killerPerk = function(){
	return killer[Math.floor(Math.random() * killer.length)];
};

function generate(){
	var players = [];
	players[0] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[1] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[2] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[3] = {first:survivorPerk(), second:survivorPerk(), third:survivorPerk(), fourth:survivorPerk()};
	players[4] = {first:killerPerk(), second:killerPerk(), third:killerPerk(), fourth:killerPerk()};
	console.log(players);
}

function generateTable(){
	
	table.innerHTML = "";

}