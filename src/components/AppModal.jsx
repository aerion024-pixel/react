//props

// import { Modal, Button, Form } from "react-bootstrap";

const AppModal = ({ show, onClose, size = "md", title, children, onSubmit, submitLabel = "simpan", cancelLabel = "batal", isLoading= false, showFooter= true }) => {
    return (
        <Modal show={show} onHide={onClose} size={size}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
            <Modal.Body>{children}</Modal.Body>
            {showFooter && (
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    {cancelLabel}
                </Button>
                <Button type="submit" variant="primary" disabled={isLoading}>
                    { isLoading ? 'simpan...' : submitLabel}
                </Button>
            </Modal.Footer>
            )}
            </Form>
        </Modal>
    )
}

export default AppModal