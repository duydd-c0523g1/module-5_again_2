import { Component } from "react";

class List extends Component {
  state = {
    listItems: ["Test1", "Test2"],
    item: "",
  };
  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };
  handleAddItem = () => {
    this.setState({
      ...this.state,
      listItems: [...this.state.listItems, this.state.item],
    });
  };
  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>Add</button>
        <table>
          <tr>
            <th>STT</th>
            <th>CÔNG VIỆC</th>
          </tr>
          {this.state.listItems.map((item, index) => (
            <tr key={crypto.randomUUID}>
                <td>{index + 1}</td>
                <td>{item}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
export default List