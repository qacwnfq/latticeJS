'use strict';

module.exports = lattice;

function lattice( params, options={} ) {
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
   this.point = point.bind( this );
   this.set = set.bind( this );

}

lattice.prototype.inspect = function() {
   let result = '';
   // TODO if this remains, replace with map, reduce combo
   this.dims.forEach( dim => {
      Array.apply( null, Array( dim ) ).map( (_, i ) => { return i; } ).forEach(
         i =>  {
            result += String( this.lattice[ i ] );
            result += ' ';
         } );
      result +=  '\n';
   } )
   return result;
};

function set( value, ...coords ) {
   this.lattice[ coords % this.dim[ coords ] ] = Number( value );
   console.log( this.lattice );
   console.log( "9999" );
}

function point( ...coords ) {
   return this.lattice[ coords % this.dim[ coords ] ];
}
