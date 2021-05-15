import React, { Component } from 'react'
import { connect } from "react-redux"
import { ListGroup, ListGroupItem, Table } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
    }
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <h3>{this.props.currentCategory.categoryName}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>categoryId</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td >{product.categoryId}</td>
                                <td >{product.productName}</td>
                                <td >{product.quantityPerUnit}</td>
                                <td >{product.unitPrice}</td>
                                <td > {product.unitsInStock}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)