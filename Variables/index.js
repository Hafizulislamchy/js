
//let name = 'sajib';
//console.log(name,name.length);
let names = ['sajib','pollock','hafizul','ahmed'];
let index = -1;
let name = names[++index];
setInterval (() => {
    name = names[index++];
    console.log(name,name.length);

    if(index==names.length){
        index = 0;
    }
},1000);