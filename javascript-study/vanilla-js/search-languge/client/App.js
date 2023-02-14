import { fetchLanguges } from "./api.js";
import SearchInput from "./SearchInput.js";
import SelectedLanguges from "./SelectedLanguages.js";
import Suggestion from "./Suggestion.js";


export default function App({$target}) {

  this.state = {
    fetchLanguges: [],
    selectedLanguges: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages
    })
    selectedLanguges.setState(this.state.selectedLanguges)
  };

  const selectedLanguges = new SelectedLanguges({
    $target,
    initialState: []
  });

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async keyword => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        })
      } else {
        const languages = await fetchLanguges(keyword);
        this.setState({
          fetchedLanguages: languages
        })
      }
    }
  })

  const suggestion = new Suggestion({
    $target,
    initialState: {
      cursor: 0,
      items: []
    },
    onSelect: language => {
      alert(language)

      // 이미 선택된 언어인 경우, 맨 뒤로 보내버리는 처리
      const nextSelectedLanguages = [...this.state.selectedLanguges]

      const index = nextSelectedLanguages.findIndex((selectedLanguge) => selectedLanguge === language)

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1)
      }
      nextSelectedLanguages.push(language)

      this.setState({
        ...this.state,
        selectedLanguges: nextSelectedLanguages
      })
    }
  })
}
