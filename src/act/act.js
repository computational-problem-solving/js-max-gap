import { sorted } from 'aureooms-js-itertools' ;
import { increasing } from 'aureooms-js-compare' ;

import { from_sorted } from './from_sorted' ;

export function act ( numbers ) {

	return from_sorted( sorted( increasing , numbers ) ) ;

}
