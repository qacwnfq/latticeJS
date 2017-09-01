'use strict';

const { expect } = require( 'chai' );
const lattice = require( '../src/lattice.js' );

describe( '#latticejs', () => {
   it( 'should create a 1d lattice', () => {
      const lattice1d = new lattice( { dims: [ 3 ] } );
      expect( lattice1d.dim ).to.equal( 1 );
   } );

   it( 'should create a non-periodic 1d lattice', () => {
      const lattice1d = new lattice( { dims: [ 3 ] } );
      expect( lattice1d.periodic ).to.equal( false );
   } );

   it( 'should create a periodic 1d lattice', () => {
      const periodicLattice1d = new lattice( { dims: [ 3 ] }, { periodic: true } );
      expect( periodicLattice1d.periodic ).to.equal( true );
      periodicLattice1d.set( 1, 1 );
      expect( periodicLattice1d.point( 3 ) ).to.equal( periodicLattice1d.point( 0 ) );
      expect( periodicLattice1d.point( 4 ) ).to.equal( periodicLattice1d.point( 1 ) );
   } );

   it( 'should create a periodic 2d lattice', () => {
      const periodicLattice1d = new lattice( { dims: [ 3, 2 ] }, { periodic: true } );
      expect( periodicLattice1d.periodic ).to.equal( true );
      periodicLattice1d.set( 1, [ 0, 1 ] );
      expect( periodicLattice1d.point( [ 3, 3 ] ) ).to.equal( periodicLattice1d.point( [ 0, 1 ] ) );
   } );

   it( 'should correctly calculate needed size for given parameters', () => {
      const lattice1d = new lattice( { dims: [ 6 ] } );
      expect( lattice1d.lattice.length ).to.equal( 6 );
      const lattice2d = new lattice( { dims: [ 6, 4 ] } );
      expect( lattice2d.lattice.length ).to.equal( 24 );
      const lattice3d = new lattice( { dims: [ 3, 2, 2 ] } );
      expect( lattice3d.lattice.length ).to.equal( 12 );
      const lattice4d = new lattice( { dims: [ 6, 4, 10, 9 ] } );
      expect( lattice4d.lattice.length ).to.equal( 2160 );
    } );
} );

