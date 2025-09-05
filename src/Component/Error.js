import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
    return (
        <>
            <div className="error-container">
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt="Funny Error"
                    className="error-img"
                />
                <h1>{err.status}</h1>
                <h3>{err.statusText}</h3>
                <h5>{err.data}</h5>
                <p>This is my Error page!</p>
            </div>
        </>
    );
}
export default Error;