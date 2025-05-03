'use strict';

import{simplecalculator} from './utilities/project.js';

document.querySelector('#x1').onclick = function (){
    var data1 = document.getElementById('Number1Input').value;
    var data2 = document.getElementById('Number2Input').value;
    
    data1 = Number(data1);
    data2 = Number(data2);

    var message = '' ;
    var classContent = '';

    if(data1 == '' || data2 == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(data1 < 0 || data2 < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = simplecalculator(data1, data2, '+');
        message = `Answer : ${result} <br />`;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}

document.querySelector('#x2').onclick = function (){
    var data1 = document.getElementById('Number1Input').value;
    var data2 = document.getElementById('Number2Input').value;
    
    data1 = Number(data1);
    data2 = Number(data2);

    var message = '' ;
    var classContent = '';

    if(data1 == '' || data2 == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(data1 < 0 || data2 < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = simplecalculator(data1, data2, '-');
        message = `Answer : ${result} <br />`;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}

document.querySelector('#x3').onclick = function (){
    var data1 = document.getElementById('Number1Input').value;
    var data2 = document.getElementById('Number2Input').value;
    
    data1 = Number(data1);
    data2 = Number(data2);

    var message = '' ;
    var classContent = '';

    if(data1 == '' || data2 == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(data1 < 0 || data2 < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = simplecalculator(data1, data2, '*');
        message = `Answer : ${result} <br />`;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}

document.querySelector('#x4').onclick = function (){
    var data1 = document.getElementById('Number1Input').value;
    var data2 = document.getElementById('Number2Input').value;
    
    data1 = Number(data1);
    data2 = Number(data2);

    var message = '' ;
    var classContent = '';

    if(data1 == '' || data2 == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(data1 < 0 || data2 < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = simplecalculator(data1, data2, '/');
        message = `Answer : ${result} <br />`;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}