var names = new Array();
names[0] = "John";
names[1] = "Jen";
names[2] = "Jason";
names[3] = "Paul";
names[4] = "Frank";
names[5] = "Larry";
names[6] = "Paula";
names[7] = "Laura";
names[8] = "Jim";

for (var i = 0; i < names.length; i++) {
    //console.log(names[i]);
    if(names[i].charAt(0)==='J' || names[i].charAt(0)=='j'){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}