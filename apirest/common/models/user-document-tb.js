'use strict';

module.exports = function(Userdocumenttb) {
    Userdocumenttb.validatesLengthOf('Document', {max: 20, message: {max: 'Longitud de cadena demasiado extensa'}});
    Userdocumenttb.validatesLengthOf('placeExpedition', {max: 60, message: {max: 'Longitud de cadena demasiado extensa'}});
};
