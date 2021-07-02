function Name(props) {
    const setName = (e) => {
        const input = document.getElementById('name_field')
        const name = input.value
        if (name) {
            props.set(name)
        } else {
            input.classList.add("is-error")
        }
    }

    return (
        <div className="gg-center">
            <div className="nes-field nes-container is-dark">
                <label htmlFor="name_field">Your pseudo</label>
                <input type="text" id="name_field" className="nes-input" />
            </div>
            <button className="nes-btn is-success" onClick={setName}>Continue</button>
        </div>
    )
}

export default Name