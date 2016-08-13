import test from 'ava' ;

import { linear , act } from '../../src' ;

import { range } from 'aureooms-js-itertools' ;

test( 'all' , t => {

	t.deepEqual( linear( [] ) , -1 ) ;
	t.deepEqual( act( [] ) , -1 ) ;

	t.deepEqual( linear( [1] ) , -1 ) ;
	t.deepEqual( act( [1] ) , -1 ) ;

	t.deepEqual( linear( [0,9] ) , 9 ) ;
	t.deepEqual( act( [0,9] ) , 9 ) ;

	t.deepEqual( linear( [9,0] ) , 9 ) ;
	t.deepEqual( act( [9,0] ) , 9 ) ;

	const x = [ 1 , 19 , 10 , 2 , -9 , 23 , -11 , 13 ] ;
	const y = Array.from( x ) ;

	t.deepEqual( linear( x ) , 10 ) ;
	t.deepEqual( act( x ) , 10 ) ;

	t.deepEqual( x , y , 'input unchanged' ) ;

	const w = [ ] ;

	for ( const _ of range( 10000 ) ) w.push( Math.random( ) ) ;

	t.deepEqual( linear( w ) , act( w ) ) ;

});
