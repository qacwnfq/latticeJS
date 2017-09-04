'use strict';

const lattice = require( './src/lattice' );

//module.exports.lattice = lattice;
const l = new lattice( { dims: [ 3, 4 ] }, { periodic: true } );
l.set( 1, 2 );
console.log( l.point( 2 ) );
console.log( l );
