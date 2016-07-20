var MainMenu = React.createClass({
  render: function () {
    return (
      <div className="menu">
        Hello, world!
      </div>
    );
  }
});
ReactDOM.render(
  <MainMenu />,
  document.getElementById('content')
);