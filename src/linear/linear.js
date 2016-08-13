import { _linear } from './_linear' ;

/**
 * Computes the largest difference of two consecutive input numbers.
 *
 * @param {Number[]} numbers - The input numbers.
 * @returns {Number[2]} - The maximum gap.
 */
export function linear ( numbers ) {

	if ( numbers.length < 2 ) return -1 ;

	if ( numbers.length === 2 ) return Math.abs( numbers[0] - numbers[1] ) ;

	const [ a , b ] = _linear( numbers ) ;

	return numbers[b] - numbers[a] ;

}
