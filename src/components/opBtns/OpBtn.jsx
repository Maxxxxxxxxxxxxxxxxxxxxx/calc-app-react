import "./opBtn.css";

export default function OpBtn({ type }) {
    const classname = `btn-op ${type}`;
    switch (type) {
        case "add":
            return (
                <div className={classname}>
                    <p className="btn_text">
                        +
                    </p>
                </div>
            )
        case "subtract":
            return (
                <div className={classname}>
                    <p className="btn_text">
                        -
                    </p>
                </div>
            )
        case "multiply":
            return (
                <div className={classname}>
                    <p className="btn_text">
                        &#215;
                    </p>
                </div>
            )
        case "divide":
            return (
                <div className={classname}>
                    <p className="btn_text">
                        &#247;
                    </p>
                </div>
            )
    }
}