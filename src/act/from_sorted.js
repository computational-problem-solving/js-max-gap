import { iter , reduce } from '@aureooms/js-itertools' ;

export function from_sorted ( numbers ) {

	const it = iter( numbers ) ;

	const e = it.next( ) ;

	if ( e.done ) return -1 ;

	const f = e.value ;

	return reduce( ( [ p , g ] , x ) => [ x , Math.max( g , x - p ) ] , it , [ f , -1 ] )[1] ;

}
