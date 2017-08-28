'use strict';

exports.point = function point( value, coords ){
   this.dim = coords.length; 
   this.coords = coords;
   this.value = value;
}
