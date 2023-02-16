import EmployeeItem from "./EmployeeItem";

export default function EmployeeList({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "EmployeeList";
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
            <table>
                    <th>
                        <td>name</td>
                        <td>title</td>
                        <td>email</td>
                        <td>role</td>
                    </th>
                ${this.state.map(
                  (item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.title}</td>
                        <td>${item.email}</td>
                        <td>${item.role}</td>
                    </tr>
                `
                )}
            </table>
        `;
  };

  this.render();
}
