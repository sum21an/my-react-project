import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardItem: [
        {
          title: "Number count As String",
          content:
            "I have use this code as react count number demo in the form of count as sentance(String)",
          link: "count-as-string"
        },
        {
          title: "Viewport Height Width",
          content:
            "Im using viewport height and viewport width and created random color and using display grid",
          link: "viewport-height-width"
        },
        {
          title: "Accordion Demo",
          content:
            "Making accordion Animated passing content through props inot child component.",
          link: "accordion"
        },
        {
          title: "Emoji Card Demo",
          content: "Created Emoji Collection",
          link: "card-emoji"
        },
        {
          title: "Animation List Reload Remove",
          content: "Animated list",
          link: "list-card"
        },
        {
          title: "Label Input",
          content: "Label input masic",
          link: "label-input"
        },
        {
          title: "Add Card",
          content:
            "I have created add card enter title and content in input field",
          link: "add-card"
        }
      ]
    };
  }

  render() {
    const { cardItem } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-brand outline-none border-0 bg-transparent">
            Suman
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="container">
            <div className="row">
              {cardItem.map((card, index) => {
                const { content, link, title } = card;
                return (
                  <div
                    key={index}
                    className="col-sm-10 col-md-6 col-lg-4 ml-auto mr-auto pt-3"
                  >
                    <div className="card text-center card-shadow">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <Link to={`/${link}`} className="btn btn-secondary">
                          See Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
