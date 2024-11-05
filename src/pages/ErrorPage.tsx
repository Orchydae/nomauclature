import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError() as { statusText?: string; message?: string };
    console.error(error);

    return (
        <div id="error404">
            <h1>Oops!</h1>
            <p> Il semblerait que la page que vous recherchez n'existe pas.</p>
            <span>Error: {error.statusText || error.message}</span>
        </div>
    );
}

export default ErrorPage;