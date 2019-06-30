import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      buyItem: [],
      message: "Welcome!",
      editing: false
    };
  }

  addItem = e => {
    e.preventDefault();
    const { buyItem } = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = buyItem.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: "This item is already on the list!"
      });
    } else {
      if (newItem === "") {
        this.setState({
          message: "Input is Empty!"
        });
      } else {
        this.setState({
          buyItem: [...buyItem, newItem],
          message: ""
        });
      }
      this.addForm.reset();
    }
  };
  removeItem = item => {
    const newBuyItem = this.state.buyItem.filter(buyItem => {
      return buyItem !== item;
    });

    this.setState({
      buyItem: [...newBuyItem]
    });

    if (newBuyItem.length === 0) {
      this.setState({
        message: "List is Empty!"
      });
    }
  };

  renameItem = () => {
    this.setState({
      editing: true
    });
  };
  save = () => {
    const renamedItem = this.renamedItem.value;
    const zbuyItem = this.state.buyItem;
    const dbuyItem = this.state.buyItem.map(item => {
      return zbuyItem.remove(item);
    });
    const newBuyItem = this.state.buyItem.filter(buyItem => {
      return buyItem === renamedItem;
    });
    this.setState({
      editing: false,
      buyItem: [...dbuyItem, ...newBuyItem, renamedItem]
    });
  };

  clearList = () => {
    this.setState({
      buyItem: [],
      message: "List is Empty!"
    });
  };

  render() {
    const { buyItem, message, editing } = this.state;
    return (
      <div className="App">
        <div className="center">
          <img
            src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png"
            alt=""
          />
          <h2>Shopping List</h2>
          <form
            ref={input => (this.addForm = input)}
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <input
              ref={input => {
                this.newItem = input;
              }}
              type="text"
              name="product"
              placeholder="Coffee "
            />
            <button id="add" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="table-card">
          {(message !== "" || buyItem.length === 0) && (
            <p className="message center">{message}</p>
          )}
          {buyItem.length > 0 && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {buyItem.map((item, idx) => {
                  return (
                    <tbody key={idx}>
                      <tr className="item-part">
                        <td>{idx + 1}</td>
                        {editing === true && (
                          <>
                            <td className="block">
                              <textarea
                                ref={input => {
                                  this.renamedItem = input;
                                }}
                              >
                                {item}
                              </textarea>
                            </td>
                            <td>
                              <button onClick={this.save}>Save</button>
                            </td>
                          </>
                        )}
                        {editing === false && (
                          <>
                            <td>{item}</td>
                            <td>
                              <button
                                onClick={e => {
                                  this.renameItem(item);
                                }}
                                type="button"
                              >
                                Rename
                              </button>

                              <button
                                onClick={e => {
                                  this.removeItem(item);
                                }}
                                type="button"
                              >
                                Remove
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <div className="right">
                <button
                  onClick={e => {
                    this.clearList();
                  }}
                  type="button"
                >
                  Clear List
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default TodoList;
