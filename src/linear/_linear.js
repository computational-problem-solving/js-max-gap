/**
 * Finds the largest difference of two consecutive input numbers. There must be
 * at least two input numbers.
 *
 * @param {Number[]} numbers - The input numbers (at least two).
 * @returns {Number[2]} - The indices of the consecutive numbers that define the maximum gap.
 */
export function _linear ( numbers ) {

	const n = numbers.length ;
	let min = numbers[0] ;
	let max = min ;

	for ( let i = 1 ; i < n ; ++i ) {
		const x = numbers[i] ;
		if ( x < min ) min = x ;
		else if ( x > max ) max = x ;
	}

	const w = max - min ;

	const N = n - 1 ;

	const l = new Array( N ) ; // lower bound of each interval
	const L = new Uint32Array( N ) ; // lower bound index of each interval
	const u = new Array( N ) ; // upper bound of each interval
	const U = new Uint32Array( N ) ; // upper bound index of each interval
	const c = new Uint32Array( N ) ; // check if interval is hit

	for ( let i = 0 ; i < n ; ++i ) {

		const x = numbers[i] ;

		const j = Math.floor( N * ( ( x - min ) / w ) ) ;

		if ( c[j] === 0 ) {
			l[j] = u[j] = x ;
			L[j] = U[j] = i ;
			c[j] = 1 ;
		}

		else if ( x < l[j] ) {
			l[j] = x ;
			L[j] = i ;
		}

		else if ( x > u[j] ) {
			u[j] = x ;
			U[j] = i ;
		}

	}

	let q = 1 ;

	// because min and max are included in the buckets
	// we know that c[0] and c[N-1] contain something
	while ( c[q] === 0 ) ++q ;

	let gap = l[q] - u[0] ;

	let a = U[0] ;
	let b = L[q] ;

	for ( let j = q + 1 ; j < N ; ++j ) {

		while ( c[j] === 0 ) ++j ;

		const g = l[j] - u[q] ;

		if ( g > gap ) {
			gap = g ;
			a = U[q] ;
			b = L[j] ;
		}

		q = j ;

	}

	return [ a , b ] ;

}
