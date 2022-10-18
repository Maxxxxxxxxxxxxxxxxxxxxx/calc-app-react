import "./digitinput.css";

export default function DigitInput({ digit }) {
    return (
        <div className="btn">
            <p className="btn_text">
                {digit} 
            </p>
        </div>
    )
}