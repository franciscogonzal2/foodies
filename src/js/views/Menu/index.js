import React, { Component } from 'react';
import FoodiesHeader from '../../components/Header/FoodiesHeader';
import Loader from '../../components/Loader/Loader';
import FoodiesMenu from '../../components/Menu/Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMenuAsync } from '../../actions/Menu';
import { getCategoriesAsync } from '../../actions/Categories';
import ItemMenu from '../../components/Item/ItemMenu';
import './Menu.css';


const mapStateToProps = (state) => {
  return {
    menu: state.menu.get('menuInfo'),
    category: state.categories.get('categories'),
  };
}
class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    }
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMenuAsync());
    dispatch(getCategoriesAsync())
  }

  renderMenu() {
    return (
      <div>
        <FoodiesMenu />
      </div>
    )
  }

  renderHeader() {
    return (
        <FoodiesHeader
          title={"Un nuevo sabor esta en"}
          subtitle={"la ciudad"}
          description={"Estamos a punto de descubrir un mundo llenode sabores"}
        />
    );
  }

  renderItem() {
    const { menu, category } = this.props;
    return (
      <div>
        <ItemMenu
          dataMenu={menu}
          dataCategory={category}
        />
      </div>
    );

  }
  render() {
    const { menu } = this.props;
    return menu ? (
      <div>
        {this.renderMenu()}
        {this.renderHeader()}
        {this.renderItem()}
      </div>
    ) : <Loader />;
  }
}

Menu.propTypes = {
  menu: PropTypes.object,
  dispatch: PropTypes.func,
  category: PropTypes.object,
};

export default connect(mapStateToProps)(Menu);