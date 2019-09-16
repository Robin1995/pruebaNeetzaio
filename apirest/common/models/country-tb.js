'use strict';

module.exports = function(Countrytb) {
    Countrytb.validatesLengthOf('CountryCode', {max: 4, message: {max: 'Longitud de codigo extendida'}});
    Countrytb.validatesLengthOf('CountryName', {max: 100, message: {max: 'Cadena muy larga'}});
    //Countrytb.hasMany(Contactinfotb, {as: 'contactsinfotb', foreignKey: 'countryId'});
};
