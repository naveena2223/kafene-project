import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      showNew: true,
      showPacked: true,
      showInTransit: true,
      showDelivered: true,
    };
  }

  componentDidMount() {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
      .then((response) => response.json())
      .then((data) => this.setState({ orders: data }));
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    const {
      orders,
      showNew,
      showPacked,
      showInTransit,
      showDelivered,
    } = this.state;

    const filteredOrders = orders.filter(
      (order) =>
        (showNew && order.orderStatus === "New") ||
        (showPacked && order.orderStatus === "Packed") ||
        (showInTransit && order.orderStatus === "InTransit") ||
        (showDelivered && order.orderStatus === "Delivered")
    );

    return (
        <div id="orders" className="order">         
            <h1>Orders</h1>
            <div id="filter-order-wrapper">
            <aside id="filter-item-wrapper">
            <h3>Filters</h3>
            <div id="filter-option-wrapper">
            <div id="order-count">Count: {filteredOrders.length}</div>
            <label class="filter-option-label">
            <input class="filter-opt-checkbox"
                type="checkbox"
                name="showNew"
                checked={showNew}
                onChange={this.handleCheckboxChange}
            />New</label>
            <label class="filter-option-label">
            <input class="filter-opt-checkbox"
                    type="checkbox"
                    name="showInTransit"
                    checked={showInTransit}
                    onChange={this.handleCheckboxChange}
            />Packed</label>
            <label class="filter-option-label">
                <input class="filter-opt-checkbox"
                    type="checkbox"
                    name="showPacked"
                    checked={showPacked}
                    onChange={this.handleCheckboxChange}
                    />InTransit</label>
                <label class="filter-option-label">
                <input class="filter-opt-checkbox"
                    type="checkbox"
                    name="showDelivered"
                    checked={showDelivered}
                    onChange={this.handleCheckboxChange}
                    />Delivery</label>
            </div>
            </aside>

                <table id="table">
                     <tr class="table-heading-row">
                         <th class="table-heading">ID</th>
                         <th class="table-heading">Consumer</th>
                         <th class="table-heading">Data</th>
                         <th class="table-heading">Amount</th>
                         <th class="table-heading">Status</th>
                     </tr>

                     <tbody id="table-body">
                             {filteredOrders.map((order) => (
                        <tr
                        key={order.id}
                        className="order-item-wrapper"
                        id={`${order.orderStatus}-${order.id}`}
                      >
                        <td className="table-data-fade">{order.id}</td>
                        <td className="table-data">{order.customerName}</td>
                        <td className="table-data">
                          {order.orderDate} <span>{order.orderTime}</span>
                        </td>
                        <td className="table-data-fade">${order.amount}</td>
                        <td className="table-data">{order.orderStatus}</td>
                      </tr>
                    ))}
                    </tbody> 

                </table>
            </div>
        </div>
    );
  }
}

export default Order;
