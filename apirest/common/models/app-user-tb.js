'use strict';
module.exports = function(Appusertb) {
    Appusertb.validatesLengthOf('LastName', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Appusertb.validatesLengthOf('Name', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Appusertb.validatesLengthOf('LastName', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Appusertb.validatesLengthOf('LastName', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Appusertb.validatesLengthOf('LastName', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Appusertb.validatesFormatOf('email', {with: re, message: 'Proporcione un email valido'});  
};
