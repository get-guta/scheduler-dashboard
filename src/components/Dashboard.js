import React, { Component } from "react";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null,
    };
    this.selectPanel = this.selectPanel.bind(this);
  }

  selectPanel = (id) => {
    this.setState((previousState) => ({
      focused: previousState.focused !== null ? null : id,
    }));
  };
  
  componentDidMount() {
    const focused = JSON.parse(localStorage.getItem("focused"));

    if (focused) {
      this.setState({ focused });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.focused !== this.state.focused) {
      localStorage.setItem("focused", JSON.stringify(this.state.focused));
    }
  }

  render() {
    const { focused } = this.state;
    const panels = data
      .filter((panel) => (focused ? panel.id === focused : true))
      .map((panel) => (
        <Panel
        key={panel.id}
        label={panel.label}
        value={panel.value}
        onSelect={event => this.selectPanel(panel.id)}
      />
      ));

    return <main className="dashboard">{panels}</main>;
  }
}


export default Dashboard;
