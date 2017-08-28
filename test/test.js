'use strict';

const { expect } = require( 'chai' );
const { lattice } = require( '../index' );

describe( '#latticejs', function() {
   it( 'should create a 1d lattice', function(){
      const lattice1d = new lattice( 1 );
      expect( lattice1d.dim ).to.equal( 1 );
   } );

} );

