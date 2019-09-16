'use strict';

module.exports = function(Typedocumenttb) {
    Typedocumenttb.validatesLengthOf('NameTypeDocument', {max: 50, message: {max: 'Longitud de demasiado extensa'}});
    };
