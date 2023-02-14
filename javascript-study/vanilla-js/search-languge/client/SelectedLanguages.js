const MAX_DISPLAY_COUNT = 5

export default function SelectedLanguges({
    $target,
    initialState
}) {
    this.$element = document.createElement('div')
    this.$element.className = 'SelectedLanguage'
    this.state = initialState

    $target.appendChild(this.$element)

    this.setState = (nextState) => {
        this.state = nextState
        
        if (this.state.length > MAX_DISPLAY_COUNT) {
            console.log(this.state.length);
            const startPosition = this.state.length - MAX_DISPLAY_COUNT
            console.log(startPosition)
            this.state = this.state.slice(
              startPosition,
              MAX_DISPLAY_COUNT + startPosition
            );
            console.log(this.state)
        }

        this.render();
    }

    this.render = () => {
        this.$element.innerHTML = `
            <ul>
                ${this.state.map((item) => `
                    <li>${item}</li>
                `)}
            </ul>
        `
    }

    this.render()
}