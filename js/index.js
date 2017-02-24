
//for (var i = 100; i >= 1 ; i-2) {
//    if( !(i % 2) ){
//        document.writeln(i +'<br>')
//    }
//}

//var cats = ['Pushok', 'Tuzik', 'Barsik'];
//    cats[15] = 'Marchik'; 

//for (var i = 0; i < cats.length ; i++) {
//        document.writeln(cats[i] +'<br>')
//}

var cats = {
    young: "Pushok",
    old: "Sirko"
}

cats['angry'] = 'Murko';

document.writeln( cats['angry'] +'<br>');

for( var key in cats){
    document.writeln(cats[key]+'<br>');
}

var cat = {
    name: "Pushok",
    color: "black",
    run: function(){
        document.writeln("Cat " + this.name +
        " has run! <br>")
    }
}

function Cat( name, color ){
    this.name = name;
    this.color = color;
    this.run = function(){
        document.writeln("Cat " + this.name +
        " has run! <br>")
    }
    return this;
}



var silvester = new Cat("Silvester"," gray");
cat.run();
silvester.name;
silvester.color;
document.writeln(silvester.name + ' ' +silvester.color);
silvester.run();

for(var i = 0, k = 0; i <= 5; i++){
    k += i; 
    document.writeln(k);
}