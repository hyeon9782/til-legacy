import SearchInput from "./SearchInput";

export default function App({$target}) {

  this.state = {
    fetchLanguges: [],
    selectedLanguges: [],
  };

  this.setState = (nextState) => {
    // TODO: 구현해야함
  };

  const searchInput = new SearchInput({
    $target,
    initialState: ''
  })
}
