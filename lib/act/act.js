'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.act = act;

var _jsItertools = require('@aureooms/js-itertools');

var _jsCompare = require('@aureooms/js-compare');

var _from_sorted = require('./from_sorted');

function act(numbers) {

	return (0, _from_sorted.from_sorted)((0, _jsItertools.sorted)(_jsCompare.increasing, numbers));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3QvYWN0LmpzIl0sIm5hbWVzIjpbImFjdCIsIm51bWJlcnMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxHLEdBQUFBLEc7O0FBTGhCOztBQUNBOztBQUVBOztBQUVPLFNBQVNBLEdBQVQsQ0FBZUMsT0FBZixFQUF5Qjs7QUFFL0IsUUFBTyw4QkFBYSxnREFBcUJBLE9BQXJCLENBQWIsQ0FBUDtBQUVBIiwiZmlsZSI6ImFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNvcnRlZCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IGluY3JlYXNpbmcgfSBmcm9tICdAYXVyZW9vbXMvanMtY29tcGFyZScgO1xuXG5pbXBvcnQgeyBmcm9tX3NvcnRlZCB9IGZyb20gJy4vZnJvbV9zb3J0ZWQnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdCAoIG51bWJlcnMgKSB7XG5cblx0cmV0dXJuIGZyb21fc29ydGVkKCBzb3J0ZWQoIGluY3JlYXNpbmcgLCBudW1iZXJzICkgKSA7XG5cbn1cbiJdfQ==