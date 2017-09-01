'use strict';

const lattice = require( './src/lattice' );

//module.exports.lattice = lattice;
const l = new lattice( { dims: [ 3, 2 ] }, { periodic: true } );
//l.set( 1, [ 0, 1 ] );
console.log( l.point( [ 0, 0 ] ) );
console.log( l.point( [ 0, 1 ] ) );
console.log( l.point( [ 1, 0 ] ) );
console.log( l.point( [ 1, 1 ] ) );
console.log( l.point( [ 2, 0 ] ) );
console.log( l.point( [ 2, 1 ] ) );
