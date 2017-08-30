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
   );
   this.periodic = periodic ? true : false;

}

