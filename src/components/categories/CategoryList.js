import React, { Component } from 'react'
import { connect } from "react-redux"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory = (category) => {
        this.props.actions.changeCategory(category)
    }
    render() {
        return (
            <div>
                <h3>Categories</h3>
                <ListGroup>
                    {this.props.categories.map(category => (
                        <ListGroupItem key={category.id} active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)} >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
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

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)