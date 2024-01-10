import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // Error
    const handleTitleCaseClick = () => {
        let newText = text.titleCase();
        setText(newText);
    }
    // Error
    const handleBoldClick = () => {
        console.log(text);
        let newText = text.bold();
        setText(newText);
    }
    // Speak
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    // Remove extra spaces
    const handleExtraSpaces = () => {
        let tempText = text.split(' ');
        console.log(tempText)
        let newText = tempText.join(" ");
        setText(newText);
    }
    // Clear Text
    const clearText = () => {
        let newText = '';
        setText(newText);
    }
    // Handle Copy
    const handleCopy = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    // Main function 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
            <div>
                <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" style={{backgroundColor:props.mode==='light'?'white':'#495057', color: props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={speak} type='submit'>Speak</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleTitleCaseClick}>Convert to Titlecase</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleBoldClick}>Convert to Bold</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={clearText}>Clear Text</button>
                <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters and {text.split("\n").length} paragraph.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter Heading"
}