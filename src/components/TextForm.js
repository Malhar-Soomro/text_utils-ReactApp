import React, { useState } from 'react';

function TextForm(props) {
    const intoUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "converted into UPPERCASE");
    }
    const intoLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "converted into lowercase");
    }

    const intoTitleCase = () => {
        let arrText = text.split(" ").map((currentValue) => {
            let lower = currentValue.toLowerCase();
            let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
            return newText;
        });
        setText(arrText.join(" "));
        props.showAlert("success", "capitalized");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    let counter = 0;
    let textLength = text.split(" ").map((currentValue) => {
        if (currentValue === "") {
            counter = counter + 1;
        }
        return text.split(" ").length - counter;
    });
    const noOfWords = Math.min.apply(null, textLength);

    console.log(text.split(" ").length);
    return (
        <>
            <div className="container my-3">
                <h3 style={{ color: props.darkMode === "dark" ? "white" : "black" }} >{props.heading}</h3>
                <div className="mb-3" >
                    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{ backgroundColor: props.darkMode === "dark" ? "rgb(9 40 73)" : "white", color: props.darkMode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button className={`btn btn-${props.btnColor}`} onClick={intoUpperCase}>UPPERCASE</button>
                <button className={`btn btn-${props.btnColor} mx-2`} onClick={intoLowerCase}>lowercase</button>
                <button className={`btn btn-${props.btnColor}`} onClick={intoTitleCase}>Title Case</button>
            </div>
            <div className="container" style={{ color: props.darkMode === "dark" ? "white" : "black" }}>
                <h2>Text Summary</h2>
                <p>{noOfWords} words and {text.length} characters</p>
                <p>{0.008 * noOfWords} minutes read</p>
                <h3>Previews</h3>
                <p>{text.length === 0 ? "Write something in text box above to preview" : text}</p>
            </div>
        </>
    );
}
export default TextForm;
