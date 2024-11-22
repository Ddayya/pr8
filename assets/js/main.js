'use strict';

btn.addEventListener('mousedown', function(){
    btn.style.background = 'black';
})
btn.addEventListener('mouseup', function(){
    btn.style.background = '';
})
btn.addEventListener('dblclick', function(){
    btn.style.width = '300px';
    btn.style.height = '300px';
})
btn.addEventListener('mouseover', function(){
    btn.style.color = 'white'
})
btn.addEventListener('mouseout', function(){
    btn.style.color = '';
})

document.body.addEventListener('keydown', function(event){
    if(event.key == 'r'){
        document.body.style.background = 'red';
    }
})
document.body.addEventListener('keydown', function(event){
    if(event.key == 'R'){
        document.body.style.background = 'red';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'r'){
        document.body.style.background = '';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'R'){
        document.body.style.background = '';
    }
})


document.body.addEventListener('keydown', function(event){
    if(event.key == 'g'){
        document.body.style.background = 'green';
    }
})
document.body.addEventListener('keydown', function(event){
    if(event.key == 'G'){
        document.body.style.background = 'green';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'g'){
        document.body.style.background = '';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'G'){
        document.body.style.background = '';
    }
})


document.body.addEventListener('keydown', function(event){
    if(event.key == 'b'){
        document.body.style.background = 'blue';
    }
})
document.body.addEventListener('keydown', function(event){
    if(event.key == 'B'){
        document.body.style.background = 'blue';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'b'){
        document.body.style.background = '';
    }
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'B'){
        document.body.style.background = '';
    }
})