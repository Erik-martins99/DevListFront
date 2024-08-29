import Alert from 'react-bootstrap/Alert';
import "./NotFound.css"

function NotFound() {
    return (
        <>
            <Alert variant="danger"dismissible className='context-alert'>
            <Alert.Heading>Error 404 - Not Found</Alert.Heading>
            <p>
            Please return to home page!
            </p>
            </Alert>
        </>
    )
}

export default NotFound