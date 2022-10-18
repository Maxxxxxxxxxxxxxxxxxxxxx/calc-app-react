import React from "react";
import DigitInput from "../calcButton/DigitInput";
import InputField from "../inputfield/InputField";
import OpBtn from "../opBtns/OpBtn";
import "./app.css";

function App() {
    const digits_order = [7,8,9,4,5,6,1,2,3,0,","];
    // const digits = [...Array(9).keys()].map(number => <DigitInput digit={number} /> );
    const digits = digits_order.map(number => <DigitInput digit={number} /> );

    return (
        <div className="calculator-app">
            <div className="calc-container">
                <InputField />
                <div className="keys_field">
                    <div className="digit_inputs">
                        {digits}
                    </div>
                    <div className="op_inputs">
                        <OpBtn type="multiply" />
                        <OpBtn type="add" />
                        <OpBtn type="subtract" />
                        <OpBtn type="divide" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;
