import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOrders } from './actions/orderAction';
import ListBlock from './components/ListBlock'; 
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orderList } = this.props;
    const orders = orderList.orders || [];
    return (
      <div className="App">
        <ListBlock title="處理中" list={orders.filter(order => (order.status.code === 1 || order.status.code === 2))} />
        <ListBlock title="已完成" list={orders.filter(order => (order.status.code === 3 || order.status.code === 4))} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
