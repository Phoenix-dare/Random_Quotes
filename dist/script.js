import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: "There are no accidents",
      author: "Master Oogway",

      isLoaded: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
    fetch("https://api.quotable.io/random").
    then(res => res.json()).
    then(data => {
      this.setState({
        quotes: data.content,
        author: data.author,
        isLoaded: true });

    });
  }

  render() {
    const quoted = this.state.quotes;
    const author = this.state.author;
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("blockquote", { id: "text" }, "\"", quoted, " \""), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "- ", author), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet" }, /*#__PURE__*/
      React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: "bi bi-twitter",
        viewBox: "0 0 16 16" }, /*#__PURE__*/

      React.createElement("path", { d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" }))), /*#__PURE__*/



      React.createElement("button", { id: "new-quote", type: "submit", onClick: this.handleClick },
      " ", "New Quote")));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById("root"));