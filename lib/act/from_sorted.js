'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.from_sorted = from_sorted;

var _aureoomsJsItertools = require('@aureooms/js-itertools');

function from_sorted(numbers) {

	var it = (0, _aureoomsJsItertools.iter)(numbers);

	var e = it.next();

	if (e.done) return -1;

	var f = e.value;

	return (0, _aureoomsJsItertools.reduce)(function (_ref, x) {
		var _ref2 = _slicedToArray(_ref, 2),
		    p = _ref2[0],
		    g = _ref2[1];

		return [x, Math.max(g, x - p)];
	}, it, [f, -1])[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3QvZnJvbV9zb3J0ZWQuanMiXSwibmFtZXMiOlsiZnJvbV9zb3J0ZWQiLCJudW1iZXJzIiwiaXQiLCJlIiwibmV4dCIsImRvbmUiLCJmIiwidmFsdWUiLCJ4IiwicCIsImciLCJNYXRoIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUVnQkEsVyxHQUFBQSxXOztBQUZoQjs7QUFFTyxTQUFTQSxXQUFULENBQXVCQyxPQUF2QixFQUFpQzs7QUFFdkMsS0FBTUMsS0FBSywrQkFBTUQsT0FBTixDQUFYOztBQUVBLEtBQU1FLElBQUlELEdBQUdFLElBQUgsRUFBVjs7QUFFQSxLQUFLRCxFQUFFRSxJQUFQLEVBQWMsT0FBTyxDQUFDLENBQVI7O0FBRWQsS0FBTUMsSUFBSUgsRUFBRUksS0FBWjs7QUFFQSxRQUFPLGlDQUFRLGdCQUFjQyxDQUFkO0FBQUE7QUFBQSxNQUFJQyxDQUFKO0FBQUEsTUFBUUMsQ0FBUjs7QUFBQSxTQUFxQixDQUFFRixDQUFGLEVBQU1HLEtBQUtDLEdBQUwsQ0FBVUYsQ0FBVixFQUFjRixJQUFJQyxDQUFsQixDQUFOLENBQXJCO0FBQUEsRUFBUixFQUE2RFAsRUFBN0QsRUFBa0UsQ0FBRUksQ0FBRixFQUFNLENBQUMsQ0FBUCxDQUFsRSxFQUErRSxDQUEvRSxDQUFQO0FBRUEiLCJmaWxlIjoiZnJvbV9zb3J0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgcmVkdWNlIH0gZnJvbSAnYXVyZW9vbXMtanMtaXRlcnRvb2xzJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tX3NvcnRlZCAoIG51bWJlcnMgKSB7XG5cblx0Y29uc3QgaXQgPSBpdGVyKCBudW1iZXJzICkgO1xuXG5cdGNvbnN0IGUgPSBpdC5uZXh0KCApIDtcblxuXHRpZiAoIGUuZG9uZSApIHJldHVybiAtMSA7XG5cblx0Y29uc3QgZiA9IGUudmFsdWUgO1xuXG5cdHJldHVybiByZWR1Y2UoICggWyBwICwgZyBdICwgeCApID0+IFsgeCAsIE1hdGgubWF4KCBnICwgeCAtIHAgKSBdICwgaXQgLCBbIGYgLCAtMSBdIClbMV0gO1xuXG59XG4iXX0=