'use strict';

module.exports = function(Contactinfotb) {
    Contactinfotb.validatesLengthOf('Address', {max: 60, message: {max: 'Longitud de cadena demasiado extensa'}});
    Contactinfotb.validatesLengthOf('City', {max: 50, message: {max: 'Longitud de cadena demasiado extensa'}});
    Contactinfotb.validatesLengthOf('Phone', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Contactinfotb.validatesLengthOf('CelPhone', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Contactinfotb.validatesLengthOf('EmergencyName', {max: 100, message: {max: 'Longitud de cadena demasiado extensa'}});
    Contactinfotb.validatesLengthOf('EmergencyPhone', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
};
