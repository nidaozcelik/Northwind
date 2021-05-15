import React, { Component } from 'react'
import { connect } from "react-redux"

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <h3>{this.props.currentCategory.categoryName}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

export default connect(mapStateToProps)(ProductList)