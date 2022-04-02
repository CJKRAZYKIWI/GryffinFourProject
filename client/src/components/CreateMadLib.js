import React from "react"
function CreateMadLib(props) {
    const data = props.data

    const renderOptions = () => {
        if (data) {
            return data.map((category, index) => {
                return <option value={category.id} key={index}>{category.name}</option>
            })
        }
    }

    return (
        <div>
            <div className="form">
            <h2>Create a New Madlib</h2>
            <form action="/madlibs" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    required
                />
                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre">
                    {renderOptions()}
                </select>
                <label htmlFor="content">Story Content</label>
                <textarea
                type="text"
                autoComplete="off"
                name="content"
                id="content"
                placeholder="Enter story content"
                required>
                </textarea>
                <label htmlFor="Legend">Click the short codes below</label>
                <ul>
                    <li> 
                        <a href="javascript:return(false);" class = "button-submit button-shortcode" onclick="document.getElementById('content').insertAtCaret('[NOUN]');return(false);">[NOUN]</a>
                    </li>
                    <li> 
                        <a href="javascript:return(false);" class = "button-submit button-shortcode" onclick="document.getElementById('content').insertAtCaret('[ADJECTIVE]');return(false);">[ADJECTIVE]</a>
                    </li>
                    <li> 
                        <a href="javascript:return(false);" class = "button-submit button-shortcode" onclick="document.getElementById('content').insertAtCaret('[VERB]');return(false);">[VERB]</a>
                    </li>
                    <li> 
                        <a href="javascript:return(false);" class = "button-submit button-shortcode" onclick="document.getElementById('content').insertAtCaret('[PERSONS NAME]');return(false);">[PERSONS NAME]</a>
                    </li>
                </ul>
                <label htmlFor= "Custom"> HELLO </label>
                <li>
                    <a href="#" class= "button-submit button-shortcode" onclick="document.getElementById('content').insertAtCaret('['+document.getElementById('custom').value+]');return(false);">[CUSTOM]</a>
                    "-"
                    <input type="text" class= "custom-shortcode" name="custom" id="custom" placeholder="helllo" value></input>
                </li>
                <input type="submit"/>
            </form>
        </div>
    </div>
    )
}

export default CreateMadLib