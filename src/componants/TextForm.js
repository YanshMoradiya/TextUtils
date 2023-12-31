import React, { useState } from 'react'

export default function TextForm({ heading, mode, showalert }) {
    const [text, setText] = useState('');

    const hendleUpClickU = () => {
        let newText = text.toUpperCase();
        showalert("success", "Converted to Upper case...");
        setText(newText);
    }
    const hendleUpClickL = () => {
        let newText = text.toLowerCase();
        showalert("success", "Converted to lower Case...");
        setText(newText);
    }

    const hendleOnChange = (event) => {
        setText(event.target.value);
        console.log('hendleOnChange');
    }

    const clearText = () => {
        setText('');
        showalert("success", "Text cleared...");
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(text);
        showalert("success", "text copied on clipboard...");
    }

    const trimText = () => {
        setText(text.replace(/\s+/g, ' '));
        showalert("success", "successful remove space...");
    }

    return (
        <>
            <div className={`container mt-3 ${mode === 'light' ? 'text-dark' : 'text-light'}`}>
                <h3>{heading}</h3>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" onChange={hendleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-1 mr-1" style={{margin:.2rem 0}} onClick={hendleUpClickU} >Convert to Uppercase</button>
                <button className="btn btn-primary my-1 mx-1" style={{margin:.2rem 0}} onClick={hendleUpClickL} >Convert to Lowercase</button>
                <button className="btn btn-primary my-1 mx-1" style={{margin:.2rem 0}} onClick={clearText} >Clear text</button>
                <button className="btn btn-primary my-1 mx-1" style={{margin:.2rem 0}} onClick={copyToClipBoard} >Copy to clipboard</button>
                <button className="btn btn-primary my-1 mx-1" style={{margin:.2rem 0}} onClick={trimText} >Remove Extra space</button>
            </div>
            <div className={`container my-3 ${mode === 'light' ? 'text-dark' : 'text-light'}`}>
                <h3>Your Text summary</h3>
                <p>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length} words and {text.split('').filter((Element) => Element !== " ").length} characters</p>
                <p>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length * 0.008} Minutes required for read words.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview Here!'}</p>
            </div>
        </>
    );
}
