webpackHotUpdate(5,{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\quangh\\WebstormProjects\\Saolasoft\\React\\nextjs-hello-world\\pages\\think-in-react.js?entry';
/**
 * Created by quangh on 9/21/2017.
 */


var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

var ProductCatRow = function (_React$Component) {
    (0, _inherits3.default)(ProductCatRow, _React$Component);

    function ProductCatRow() {
        (0, _classCallCheck3.default)(this, ProductCatRow);

        return (0, _possibleConstructorReturn3.default)(this, (ProductCatRow.__proto__ || (0, _getPrototypeOf2.default)(ProductCatRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProductCatRow, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('th', { colSpan: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, this.props.category));
        }
    }]);

    return ProductCatRow;
}(_react2.default.Component);

var ProductRow = function (_React$Component2) {
    (0, _inherits3.default)(ProductRow, _React$Component2);

    function ProductRow() {
        (0, _classCallCheck3.default)(this, ProductRow);

        return (0, _possibleConstructorReturn3.default)(this, (ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProductRow, [{
        key: 'render',
        value: function render() {
            var name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement('span', { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, this.props.product.name);

            return _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('td', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, name), _react2.default.createElement('td', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, this.props.product.price));
        }
    }]);

    return ProductRow;
}(_react2.default.Component);

var ProductTable = function (_React$Component3) {
    (0, _inherits3.default)(ProductTable, _React$Component3);

    function ProductTable() {
        (0, _classCallCheck3.default)(this, ProductTable);

        return (0, _possibleConstructorReturn3.default)(this, (ProductTable.__proto__ || (0, _getPrototypeOf2.default)(ProductTable)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProductTable, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var rows = [];
            var lastCategory = null;
            this.props.product.forEach(function (product, index) {
                //console.log(product.stocked+" "+this.props.inStock);
                if (product.name.indexOf(_this4.props.filterText) === -1 || !product.stocked && _this4.props.inStock) {
                    return;
                }

                if (product.category !== lastCategory) {
                    rows.push(_react2.default.createElement(ProductCatRow, {
                        category: product.category,
                        key: product.category,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    }));
                }

                rows.push(_react2.default.createElement(ProductRow, {
                    product: product,
                    key: index,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }));
                lastCategory = product.category;
            });

            return _react2.default.createElement('table', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Price'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, rows));
        }
    }]);

    return ProductTable;
}(_react2.default.Component);

var SearchBar = function (_React$Component4) {
    (0, _inherits3.default)(SearchBar, _React$Component4);

    function SearchBar(props) {
        (0, _classCallCheck3.default)(this, SearchBar);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));

        _this5.handleFilterTextInputChange = _this5.handleFilterTextInputChange.bind(_this5);
        _this5.handleInStockCheckBoxChange = _this5.handleInStockCheckBoxChange.bind(_this5);
        return _this5;
    }

    (0, _createClass3.default)(SearchBar, [{
        key: 'handleFilterTextInputChange',
        value: function handleFilterTextInputChange(e) {
            this.props.onFilterTextInputChange(e.target.value);
        }
    }, {
        key: 'handleInStockCheckBoxChange',
        value: function handleInStockCheckBoxChange(e) {
            this.props.onCheckBoxInputChange(e.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('form', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('input', {
                type: 'text',
                placeholder: 'Search ...',
                value: this.props.filterText,
                onChange: this.handleFilterTextInputChange,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('input', {
                type: 'checkbox',
                onChange: this.handleInStockCheckBoxChange,
                checked: this.props.inStockOnly,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }), ' ', ' Only show products in stock'));
        }
    }]);

    return SearchBar;
}(_react2.default.Component);

var FilterableProductTable = function (_React$Component5) {
    (0, _inherits3.default)(FilterableProductTable, _React$Component5);

    function FilterableProductTable(props) {
        (0, _classCallCheck3.default)(this, FilterableProductTable);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (FilterableProductTable.__proto__ || (0, _getPrototypeOf2.default)(FilterableProductTable)).call(this, props));

        _this6.state = {
            filterText: '',
            inStockOnly: false
        };
        _this6.onFilterTextInputChange = _this6.onFilterTextInputChange.bind(_this6);
        _this6.onCheckBoxInputChange = _this6.onCheckBoxInputChange.bind(_this6);
        return _this6;
    }

    (0, _createClass3.default)(FilterableProductTable, [{
        key: 'onFilterTextInputChange',
        value: function onFilterTextInputChange(new_text) {
            this.setState({
                filterText: new_text
            });
        }
    }, {
        key: 'onCheckBoxInputChange',
        value: function onCheckBoxInputChange(isChecked) {
            this.setState({
                inStockOnly: isChecked
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: { margin: '100px', border: "1px solid green", padding: '10px', width: 'fit-content' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement(SearchBar, {
                filterText: this.state.filterText,
                inStockOnly: this.state.inStockOnly,
                onFilterTextInputChange: this.onFilterTextInputChange,
                onCheckBoxInputChange: this.onCheckBoxInputChange,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }), _react2.default.createElement(ProductTable, {
                product: PRODUCTS,
                filterText: this.state.filterText,
                inStock: this.state.inStockOnly,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }));
        }
    }]);

    return FilterableProductTable;
}(_react2.default.Component);

exports.default = FilterableProductTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0aGluay1pbi1yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBST0RVQ1RTIiwiY2F0ZWdvcnkiLCJwcmljZSIsInN0b2NrZWQiLCJuYW1lIiwiUHJvZHVjdENhdFJvdyIsInByb3BzIiwiQ29tcG9uZW50IiwiUHJvZHVjdFJvdyIsInByb2R1Y3QiLCJjb2xvciIsIlByb2R1Y3RUYWJsZSIsInJvd3MiLCJsYXN0Q2F0ZWdvcnkiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbmRleE9mIiwiZmlsdGVyVGV4dCIsImluU3RvY2siLCJwdXNoIiwiU2VhcmNoQmFyIiwiaGFuZGxlRmlsdGVyVGV4dElucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZUluU3RvY2tDaGVja0JveENoYW5nZSIsImUiLCJvbkZpbHRlclRleHRJbnB1dENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25DaGVja0JveElucHV0Q2hhbmdlIiwiY2hlY2tlZCIsImluU3RvY2tPbmx5IiwiRmlsdGVyYWJsZVByb2R1Y3RUYWJsZSIsInN0YXRlIiwibmV3X3RleHQiLCJzZXRTdGF0ZSIsImlzQ2hlY2tlZCIsIm1hcmdpbiIsImJvcmRlciIsInBhZGRpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFPOzs7Ozs7O0FBSFA7Ozs7O0FBS0EsSUFBSSxXQUFXLENBQ1gsRUFBQyxVQUFELEFBQVcsa0JBQWtCLE9BQTdCLEFBQW9DLFVBQVUsU0FBOUMsQUFBdUQsTUFBTSxNQURsRCxBQUNYLEFBQW1FLGNBQ25FLEVBQUMsVUFBRCxBQUFXLGtCQUFrQixPQUE3QixBQUFvQyxTQUFTLFNBQTdDLEFBQXNELE1BQU0sTUFGakQsQUFFWCxBQUFrRSxjQUNsRSxFQUFDLFVBQUQsQUFBVyxrQkFBa0IsT0FBN0IsQUFBb0MsVUFBVSxTQUE5QyxBQUF1RCxPQUFPLE1BSG5ELEFBR1gsQUFBb0UsZ0JBQ3BFLEVBQUMsVUFBRCxBQUFXLGVBQWUsT0FB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QUNHLEFBRXBCO0FBSGlCLEFBQ1Y7Ozs7aUNBR0EsQUFDSjttQ0FDSSxjQUFBLFNBQUssT0FBTyxFQUFDLFFBQUQsQUFBUyxTQUFTLFFBQWxCLEFBQTBCLG1CQUFtQixTQUE3QyxBQUFzRCxRQUFRLE9BQTFFLEFBQVksQUFBcUU7OEJBQWpGO2dDQUFBLEFBQ0k7QUFESjthQUFBLGdDQUNJLEFBQUM7NEJBQ2lCLEtBQUEsQUFBSyxNQUR2QixBQUM2QixBQUN6Qjs2QkFBZSxLQUFBLEFBQUssTUFGeEIsQUFFOEIsQUFDMUI7eUNBQTJCLEtBSC9CLEFBR29DLEFBQ2hDO3VDQUF5QixLQUo3QixBQUlrQzs7OEJBSmxDO2dDQURKLEFBQ0ksQUFNQTtBQU5BO0FBQ0ksOENBS0osQUFBQzt5QkFBRCxBQUNhLEFBQ1Q7NEJBQWEsS0FBQSxBQUFLLE1BRnRCLEFBRTRCLEFBQ3hCO3lCQUFXLEtBQUEsQUFBSyxNQUhwQixBQUcwQjs7OEJBSDFCO2dDQVJSLEFBQ0ksQUFPSSxBQU9YO0FBUFc7QUFDSTs7Ozs7RUFoQ2lCLGdCQUFNLEEsQUF5QzNDOztrQkFBQSxBQUFlIiwiZmlsZSI6InRoaW5rLWluLXJlYWN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3F1YW5naC9XZWJzdG9ybVByb2plY3RzL1Nhb2xhc29mdC9SZWFjdC9uZXh0anMtaGVsbG8td29ybGQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\quangh\\WebstormProjects\\Saolasoft\\React\\nextjs-hello-world\\pages\\think-in-react.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\quangh\\WebstormProjects\\Saolasoft\\React\\nextjs-hello-world\\pages\\think-in-react.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/think-in-react")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kODBkNDM4ODNhOGUzNTRiYjU2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGhpbmstaW4tcmVhY3QuanM/ZmY1YjE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBxdWFuZ2ggb24gOS8yMS8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxubGV0IFBST0RVQ1RTID0gW1xyXG4gICAge2NhdGVnb3J5OiAnU3BvcnRpbmcgR29vZHMnLCBwcmljZTogJyQ0OS45OScsIHN0b2NrZWQ6IHRydWUsIG5hbWU6ICdGb290YmFsbCd9LFxyXG4gICAge2NhdGVnb3J5OiAnU3BvcnRpbmcgR29vZHMnLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2tlZDogdHJ1ZSwgbmFtZTogJ0Jhc2ViYWxsJ30sXHJcbiAgICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDI5Ljk5Jywgc3RvY2tlZDogZmFsc2UsIG5hbWU6ICdCYXNrZXRiYWxsJ30sXHJcbiAgICB7Y2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsIHByaWNlOiAnJDk5Ljk5Jywgc3RvY2tlZDogdHJ1ZSwgbmFtZTogJ2lQb2QgVG91Y2gnfSxcclxuICAgIHtjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJywgcHJpY2U6ICckMzk5Ljk5Jywgc3RvY2tlZDogZmFsc2UsIG5hbWU6ICdpUGhvbmUgNSd9LFxyXG4gICAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQxOTkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnTmV4dXMgNyd9XHJcbl07XHJcblxyXG5jbGFzcyBQcm9kdWN0Q2F0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDx0cj48dGggY29sU3Bhbj17Mn0+e3RoaXMucHJvcHMuY2F0ZWdvcnl9PC90aD48L3RyPlxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9kdWN0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLnByb2R1Y3Quc3RvY2tlZD8gdGhpcy5wcm9wcy5wcm9kdWN0Lm5hbWUgOlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICA8L3NwYW4+O1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnByb2R1Y3QucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2R1Y3RUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCByb3dzID0gW107XHJcbiAgICAgICAgbGV0IGxhc3RDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0LmZvckVhY2goKHByb2R1Y3QsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3Quc3RvY2tlZCtcIiBcIit0aGlzLnByb3BzLmluU3RvY2spO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEgfHwgKCFwcm9kdWN0LnN0b2NrZWQgJiYgdGhpcy5wcm9wcy5pblN0b2NrKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5jYXRlZ29yeSAhPT0gbGFzdENhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCg8UHJvZHVjdENhdFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e3Byb2R1Y3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJvd3MucHVzaCg8UHJvZHVjdFJvd1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleH1cclxuICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJUZXh0SW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbHRlclRleHRJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5TdG9ja0NoZWNrQm94Q2hhbmdlID0gdGhpcy5oYW5kbGVJblN0b2NrQ2hlY2tCb3hDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGaWx0ZXJUZXh0SW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlclRleHRJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5TdG9ja0NoZWNrQm94Q2hhbmdlKGUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGVja0JveElucHV0Q2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlsdGVyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJUZXh0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUluU3RvY2tDaGVja0JveENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5pblN0b2NrT25seX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9IE9ubHkgc2hvdyBwcm9kdWN0cyBpbiBzdG9ja1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRmlsdGVyYWJsZVByb2R1Y3RUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICBmaWx0ZXJUZXh0OiAnJyxcclxuICAgICAgICAgICAgaW5TdG9ja09ubHk6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyVGV4dElucHV0Q2hhbmdlID0gdGhpcy5vbkZpbHRlclRleHRJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGVja0JveElucHV0Q2hhbmdlID0gdGhpcy5vbkNoZWNrQm94SW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbHRlclRleHRJbnB1dENoYW5nZShuZXdfdGV4dCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZpbHRlclRleHQ6IG5ld190ZXh0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrQm94SW5wdXRDaGFuZ2UoaXNDaGVja2VkKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5TdG9ja09ubHk6IGlzQ2hlY2tlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxMDBweCcsIGJvcmRlcjogXCIxcHggc29saWQgZ3JlZW5cIiwgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJ2ZpdC1jb250ZW50J319PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRleHQgPSB7dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGluU3RvY2tPbmx5ID0ge3RoaXMuc3RhdGUuaW5TdG9ja09ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJUZXh0SW5wdXRDaGFuZ2UgPSB7dGhpcy5vbkZpbHRlclRleHRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrQm94SW5wdXRDaGFuZ2UgPSB7dGhpcy5vbkNoZWNrQm94SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e1BST0RVQ1RTfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRleHQgPXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5TdG9jayA9IHt0aGlzLnN0YXRlLmluU3RvY2tPbmx5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJhYmxlUHJvZHVjdFRhYmxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3RoaW5rLWluLXJlYWN0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQUpBOzs7OztBQUtBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRkE7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBVkE7QUFDQTtBQWVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUFqQ0E7QUFDQTtBQXdDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOzs7OztBQTNCQTtBQUNBO0FBc0NBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBR0E7QUFGQTs7OztBQUlBO0FBQ0E7QUFHQTtBQUZBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7Ozs7O0FBaENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==