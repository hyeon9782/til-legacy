export default function Dropdown({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "Dropdown";
  $target.appendChild(this.$element);

  this.state = {
    selectedIndex: 0,
    items: initialState.items,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {};

  this.render();
}
