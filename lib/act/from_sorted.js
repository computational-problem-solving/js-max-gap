'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.from_sorted = from_sorted;

var _jsItertools = require('@aureooms/js-itertools');

function from_sorted(numbers) {

	var it = (0, _jsItertools.iter)(numbers);

	var e = it.next();

	if (e.done) return -1;

	var f = e.value;

	return (0, _jsItertools.reduce)(function (_ref, x) {
		var _ref2 = _slicedToArray(_ref, 2),
		    p = _ref2[0],
		    g = _ref2[1];

		return [x, Math.max(g, x - p)];
	}, it, [f, -1])[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3QvZnJvbV9zb3J0ZWQuanMiXSwibmFtZXMiOlsiZnJvbV9zb3J0ZWQiLCJudW1iZXJzIiwiaXQiLCJlIiwibmV4dCIsImRvbmUiLCJmIiwidmFsdWUiLCJ4IiwicCIsImciLCJNYXRoIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUVnQkEsVyxHQUFBQSxXOztBQUZoQjs7QUFFTyxTQUFTQSxXQUFULENBQXVCQyxPQUF2QixFQUFpQzs7QUFFdkMsS0FBTUMsS0FBSyx1QkFBTUQsT0FBTixDQUFYOztBQUVBLEtBQU1FLElBQUlELEdBQUdFLElBQUgsRUFBVjs7QUFFQSxLQUFLRCxFQUFFRSxJQUFQLEVBQWMsT0FBTyxDQUFDLENBQVI7O0FBRWQsS0FBTUMsSUFBSUgsRUFBRUksS0FBWjs7QUFFQSxRQUFPLHlCQUFRLGdCQUFjQyxDQUFkO0FBQUE7QUFBQSxNQUFJQyxDQUFKO0FBQUEsTUFBUUMsQ0FBUjs7QUFBQSxTQUFxQixDQUFFRixDQUFGLEVBQU1HLEtBQUtDLEdBQUwsQ0FBVUYsQ0FBVixFQUFjRixJQUFJQyxDQUFsQixDQUFOLENBQXJCO0FBQUEsRUFBUixFQUE2RFAsRUFBN0QsRUFBa0UsQ0FBRUksQ0FBRixFQUFNLENBQUMsQ0FBUCxDQUFsRSxFQUErRSxDQUEvRSxDQUFQO0FBRUEiLCJmaWxlIjoiZnJvbV9zb3J0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgcmVkdWNlIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbV9zb3J0ZWQgKCBudW1iZXJzICkge1xuXG5cdGNvbnN0IGl0ID0gaXRlciggbnVtYmVycyApIDtcblxuXHRjb25zdCBlID0gaXQubmV4dCggKSA7XG5cblx0aWYgKCBlLmRvbmUgKSByZXR1cm4gLTEgO1xuXG5cdGNvbnN0IGYgPSBlLnZhbHVlIDtcblxuXHRyZXR1cm4gcmVkdWNlKCAoIFsgcCAsIGcgXSAsIHggKSA9PiBbIHggLCBNYXRoLm1heCggZyAsIHggLSBwICkgXSAsIGl0ICwgWyBmICwgLTEgXSApWzFdIDtcblxufVxuIl19