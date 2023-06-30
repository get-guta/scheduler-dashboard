import React, { Component } from "react";
import classNames from "classnames";

class Panel extends Component {
  handleClick = () => {
    const { id, onSelect } = this.props;
    onSelect(id); // Call the onSelect function with the id of the panel
  };

  render() {
    const { id, label, value, onSelect } = this.props;

    return (
      <section className="dashboard__panel" onClick={() => onSelect(id)}>
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>)
  }
}
export default Panel;