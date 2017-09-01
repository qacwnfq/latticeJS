'use strict';

const lattice = require( './src/lattice' );

//module.exports.lattice = lattice;
const l = new lattice( { dims: [ 3 ] }, { periodic: true } );
const point = l.point( 2 );
l.set( 1, 1 );
console.log( l.point( 1 ) );
console.log( l.point( 3 ) );
