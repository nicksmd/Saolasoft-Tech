'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\quangh\\WebstormProjects\\Saolasoft\\React\\nextjs-hello-world\\pages\\post.js?entry';
/**
 * Created by quangh on 9/19/2017.
 */


// const Content = (props)=>(
//   <div>
//       <h1>{props.url.query.id}</h1>
//       <p>This is post's content</p>
//   </div>
// );
//
// //url prop is only exposed to the page's main component.
// // That's not exposed for other components used in the page
//
// export default (props)=>(
//     <Layout>
//       <Content url={props.url}/>
//     </Layout>
// )

var Post = function Post(props) {
    return _react2.default.createElement(_layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, props.show.name), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }));
};

Post.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var id, res, show;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = context.query.id;

                        console.log(context);
                        _context.next = 4;
                        return fetch('https://api.tvmaze.com/shows/' + id);

                    case 4:
                        res = _context.sent;
                        _context.next = 7;
                        return res.json();

                    case 7:
                        show = _context.sent;

                        console.log('Fetched show: ' + show.name);
                        return _context.abrupt('return', {
                            show: show
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlBvc3QiLCJwcm9wcyIsInNob3ciLCJuYW1lIiwic3VtbWFyeSIsInJlcGxhY2UiLCJpbWFnZSIsIm1lZGl1bSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsQUFBTzs7Ozs7OztBQUhQOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFEOzJCQUNULEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsYUFBSyxBQUFNLEtBRGYsQUFDSSxBQUFnQixBQUNoQix1QkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxhQUFJLEFBQU0sS0FBTixBQUFXLFFBQVgsQUFBbUIsUUFBbkIsQUFBMkIsWUFGbkMsQUFFSSxBQUFJLEFBQXVDLEFBQzNDLDZDQUFLLEtBQUssTUFBQSxBQUFNLEtBQU4sQUFBVyxNQUFyQixBQUEyQjtzQkFBM0I7d0JBSkssQUFDVCxBQUdJO0FBQUE7O0FBSlI7O0FBUUEsS0FBQSxBQUFLLDhCQUFMO3dGQUF1QixpQkFBQSxBQUFlLFNBQWY7cUJBQUE7c0VBQUE7c0JBQUE7aURBQUE7eUJBQ2Y7QUFEZSw2QkFDVixRQUFBLEFBQVEsTUFERSxBQUNJLEFBQ3pCOztnQ0FBQSxBQUFRLElBRmEsQUFFckIsQUFBWTt3Q0FGUzsrQkFHSCx3Q0FIRyxBQUdILEFBQXNDOzt5QkFBbEQ7QUFIZSx1Q0FBQTt3Q0FBQTsrQkFJRixJQUpFLEFBSUYsQUFBSTs7eUJBQWpCO0FBSmUsd0NBS3JCOztnQ0FBQSxBQUFRLHVCQUFxQixLQUxSLEFBS3JCLEFBQWtDOztrQ0FMYixBQU1kLEFBQ0c7QUFESCxBQUNIOzt5QkFQaUI7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFBdkI7O3lCQUFBO2dDQUFBO0FBQUE7QUFXQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3F1YW5naC9XZWJzdG9ybVByb2plY3RzL1Nhb2xhc29mdC9SZWFjdC9uZXh0anMtaGVsbG8td29ybGQifQ==