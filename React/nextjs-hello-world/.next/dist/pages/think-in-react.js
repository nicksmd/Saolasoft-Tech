'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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