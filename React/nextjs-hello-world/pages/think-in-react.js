/**
 * Created by quangh on 9/21/2017.
 */
import React from 'react'

let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductCatRow extends React.Component{
    render(){
        return <tr><th colSpan={2}>{this.props.category}</th></tr>
    }
}

class ProductRow extends React.Component{
    render(){
        let name = this.props.product.stocked? this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;

        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component{
    render(){
        let rows = [];
        let lastCategory = null;
        this.props.product.forEach((product, index)=>{
            //console.log(product.stocked+" "+this.props.inStock);
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStock)) {
                return;
            }

            if (product.category !== lastCategory){
                rows.push(<ProductCatRow
                            category={product.category}
                            key={product.category}
                         />)
            }


            rows.push(<ProductRow
                product={product}
                key = {index}
            />);
            lastCategory = product.category
        });

        return (
            <table>
                <thead>
                    <tr>
                       <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockCheckBoxChange = this.handleInStockCheckBoxChange.bind(this);
    }

    handleFilterTextInputChange(e){
        this.props.onFilterTextInputChange(e.target.value);
    }

    handleInStockCheckBoxChange(e){
        this.props.onCheckBoxInputChange(e.target.checked);
    }

    render(){
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search ..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />

                <p>
                    <input
                        type="checkbox"
                        onChange = {this.handleInStockCheckBoxChange}
                        checked={this.props.inStockOnly}
                    />
                    {' '} Only show products in stock
                </p>
            </form>
        )
    }
}


class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            filterText: '',
            inStockOnly: false
        };
        this.onFilterTextInputChange = this.onFilterTextInputChange.bind(this);
        this.onCheckBoxInputChange = this.onCheckBoxInputChange.bind(this);
    }

    onFilterTextInputChange(new_text){
        this.setState({
            filterText: new_text
        })
    }

    onCheckBoxInputChange(isChecked){
        this.setState({
            inStockOnly: isChecked
        })
    }
    render(){
        return(
            <div style={{margin: '100px', border: "1px solid green", padding: '10px', width: 'fit-content'}}>
                <SearchBar
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    onFilterTextInputChange = {this.onFilterTextInputChange}
                    onCheckBoxInputChange = {this.onCheckBoxInputChange}
                />
                <ProductTable
                    product={PRODUCTS}
                    filterText ={this.state.filterText}
                    inStock = {this.state.inStockOnly}
                />
            </div>
        )
    }
}

export default FilterableProductTable
