'use strict';

module.exports = function lattice( params, options={} ) {
   const {
      dims,
      lattice
   } = params;
   const { periodic } = options;
   this.dims = dims;
   this.dim = dims.length;
   this.lattice = lattice ? lattice: new Array(
      this.dims.reduce( ( a, b ) => a*b )
   ).fill( 0 );
   this.periodic = periodic ? true : false;
   this.point = function( ...coords ) {
      return this.lattice[ coords % this.dim[ coords ] ];
   };
   this.set = function( value, ...coords ) {
      this.lattice[ coords % this.dim[ coords ] ] = value;
   }
}

