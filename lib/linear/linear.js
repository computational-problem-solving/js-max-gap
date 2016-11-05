'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.linear = linear;

var _linear4 = require('./_linear');

/**
 * Computes the largest difference of two consecutive input numbers.
 *
 * @param {Number[]} numbers - The input numbers.
 * @returns {Number[2]} - The maximum gap.
 */
function linear(numbers) {

  if (numbers.length < 2) return -1;

  if (numbers.length === 2) return Math.abs(numbers[0] - numbers[1]);

  var _linear2 = (0, _linear4._linear)(numbers),
      _linear3 = _slicedToArray(_linear2, 2),
      a = _linear3[0],
      b = _linear3[1];

  return numbers[b] - numbers[a];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saW5lYXIvbGluZWFyLmpzIl0sIm5hbWVzIjpbImxpbmVhciIsIm51bWJlcnMiLCJsZW5ndGgiLCJNYXRoIiwiYWJzIiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBUWdCQSxNLEdBQUFBLE07O0FBUmhCOztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0Qjs7QUFFbEMsTUFBS0EsUUFBUUMsTUFBUixHQUFpQixDQUF0QixFQUEwQixPQUFPLENBQUMsQ0FBUjs7QUFFMUIsTUFBS0QsUUFBUUMsTUFBUixLQUFtQixDQUF4QixFQUE0QixPQUFPQyxLQUFLQyxHQUFMLENBQVVILFFBQVEsQ0FBUixJQUFhQSxRQUFRLENBQVIsQ0FBdkIsQ0FBUDs7QUFKTSxpQkFNaEIsc0JBQVNBLE9BQVQsQ0FOZ0I7QUFBQTtBQUFBLE1BTTFCSSxDQU4wQjtBQUFBLE1BTXRCQyxDQU5zQjs7QUFRbEMsU0FBT0wsUUFBUUssQ0FBUixJQUFhTCxRQUFRSSxDQUFSLENBQXBCO0FBRUEiLCJmaWxlIjoibGluZWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2xpbmVhciB9IGZyb20gJy4vX2xpbmVhcicgO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBsYXJnZXN0IGRpZmZlcmVuY2Ugb2YgdHdvIGNvbnNlY3V0aXZlIGlucHV0IG51bWJlcnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJbXX0gbnVtYmVycyAtIFRoZSBpbnB1dCBudW1iZXJzLlxuICogQHJldHVybnMge051bWJlclsyXX0gLSBUaGUgbWF4aW11bSBnYXAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXIgKCBudW1iZXJzICkge1xuXG5cdGlmICggbnVtYmVycy5sZW5ndGggPCAyICkgcmV0dXJuIC0xIDtcblxuXHRpZiAoIG51bWJlcnMubGVuZ3RoID09PSAyICkgcmV0dXJuIE1hdGguYWJzKCBudW1iZXJzWzBdIC0gbnVtYmVyc1sxXSApIDtcblxuXHRjb25zdCBbIGEgLCBiIF0gPSBfbGluZWFyKCBudW1iZXJzICkgO1xuXG5cdHJldHVybiBudW1iZXJzW2JdIC0gbnVtYmVyc1thXSA7XG5cbn1cbiJdfQ==