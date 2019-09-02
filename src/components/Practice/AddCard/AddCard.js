import React, { Component } from "react";
import "./AddCard.scss";
import firebase from "../../../utils/firebase";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      currentItem: "",
      items: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", myItem => {
      let items = myItem.val();
      let newItem = [];
      for (let item in items) {
        newItem.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({ items: newItem });
    });
  }

  handleChangefield = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddCard = event => {
    event.preventDefault();
    const { username, currentItem } = this.state;
    const itemsRef = firebase.database().ref("items");
    const item = {
      user: username,
      title: currentItem
    };
    itemsRef.push(item);
    this.setState({
      username: "",
      currentItem: ""
    });
  };

  removeItem = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  render() {
    const { items, username, currentItem } = this.state;
    return (
      <div className="add-card-conteiner">
        <div className="add-card-header">
          <h3>Add Card Demo</h3>
        </div>
        <div className="add-card-body">
          <section className="add-item">
            <form onSubmit={this.handleAddCard} className="text-center">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Enter title"
                value={username}
                onChange={this.handleChangefield}
              />
              <input
                className="form-control mt-2"
                type="text"
                name="currentItem"
                placeholder="Enter subject content"
                value={currentItem}
                onChange={this.handleChangefield}
              />
              <button
                className="btn btn-success mt-3"
                disabled={username === "" || currentItem === ""}
              >
                Add Item
              </button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {items.map(item => {
                  const { id, title, user } = item;
                  return (
                    <li key={id}>
                      <h4>{user}</h4>
                      <p>{title}</p>
                      <hr />
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.removeItem(id)}
                      >
                        Remove Item
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AddCard;
