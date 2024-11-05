import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error404">
            <h1>Oops!</h1>
            <p> Il semblerait que la page que vous recherchez n'existe pas.</p>
        </div>
    );
}

export default ErrorPage;