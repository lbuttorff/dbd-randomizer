//Returns an array of survivor perks
function survivorPerks(){
    return ["Ace in The Hole","Adrenaline","Alert","Balanced Landing","Bond","Borrowed Time","Botany Knowledge",
        "Calm Spirit","Dark Sense","Dead Hard","Decisive Strike","Deja Vu","Detective's Hunch","Empathy","Hope",
        "Iron Will","Kindred","Leader","Left Behind","Lightweight","Lithe","No Mither","No One Left Behind",
        "Object of Obsession","Open Handed","Pharmacy","Plunderer's Instinct","Premonition","Prove Thyself",
        "Quick & Quiet","Resilience","Saboteur","Self-Care","Slippery Meat","Small Game","Sole Survivor","Spine Chill",
        "Sprint Burst","Stake Out","Streetwise","This Is Not Happening","Technician","Tenacity","Up The Ante",
        "Unbreakable","Urban Evasion","Vigil","Wake Up","We'll Make It","We're Gonna Live Forever","Dance With Me",
        "Windows Of Opportunity","Boil Over"
    ];
}
//Returns an array of killer perks
function killerPerks(){
    return ["A Nurse's Calling","Agitation","Barbecue & Chilli","Beast of Prey","Bitter Murmur","Bloodhound",
        "Blood Warden","Brutal Strength","Deerstalker","Distressing","Dying Light","Enduring","Fire Up",
        "Franklin's Demise","Insidious","Iron Grasp","Hangman's Trick","Hex: Devour Hope","Hex: Huntress Lullaby",
        "Hex: No One Escapes Death","Hex: Ruin","Hex: The Third Seal","Hex: Thrill of the Hunt","Knock Out","Lightborn",
        "Make Your Choice","Monitor & Abuse","Monstrous Shrine","Overcharge","Overwhelming Presence","Remember Me",
        "Play With Your Food","Predator","Save The Best For Last","Shadowborn","Sloppy Butcher",
        "Spies From The Shadows","Stridor","Surveilance","Terrtorial Imperative","Tinkerer","Thanatophobia",
        "Unnerving Presence","Unrelenting","Whispers","Bamboozle","Coulrophobia","Pop Goes The Weasel"
    ];
}
//Returns a list of survivors
function survivorList() {
    return ["Dwight Fairfield","Meg Thomas","Claudette Morel","Jake Park","Nea Karlsson","Laurie Strode",
        "Ace Visconti","Bill Overbeck","Feng Min","David King","Quentin Smith","David Tapp","Kate Denson"
    ];
}
//Returns a list of killers
function killerList(){
    return ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Cannibal","Nightmare","Pig","Clown"];
}
//Returns a list of maps
function mapList(){
    return ["Coal Tower","Groaning Storehouse","Ironworks of Misery","Shelter Woods","Suffocation Pit",
        "Azarov's Resting Place","Blood Lodge","Gas Heaven","Wretched Shop","Wrecker's Yard","Fractured Cowshed",
        "The Thompson House","Torment Creek","Rancid Abattoir","Rotten Fields","Disturbed Ward","Father Campbell's Chapel","Lampkin Lane",
        "The Pale Rose","Grim Pantry","Treatment Theatre","Mother's Dwelling","Badham Preschool","The Game"
    ];
}
//Picker, it selects an item from an array
function picker(items){
    return items[Math.floor(Math.random() * items.length)];
}