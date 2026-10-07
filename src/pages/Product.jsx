import { useState } from "react"
import { Card, Table, Form, Modal, Button } from "react-bootstrap"

const dataUser = [
    {
        id: 1,
        name: "Salt bread",
        quantity: "",
        price: 50000,
        status: "active"
    },
    {
        id: 2,
        name: "Dubai Chewy",
        quantity: "",
        price: 48000,
        status: "active"
    },
    {
        id: 3,
        name: "Banhmi",
        quantity: "",
        price: 60000,
        status: "active"
    }
]


const Produk = () => {
    const _initForm = {
        id: null,
        name: "",
        quantity: "",
        price: "",
        status: "active"
    }

    // useState
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState(dataUser)
    const [formData, setFormData] = useState(_initForm)
    const [isEdit, setIsEdit] = useState(false)

    // 

    const handleOpenModal = () => {
        setShowModal(true)
        setShowModal(_initForm)
        setIsEdit(false)
    }

    const handleEditModal = (user) => {
        setShowModal(true)
        setIsEdit(true)
        setFormData(user)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEdit) {
            console.log({ formData })
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)))
        } else {
            const newUser = {
                ...formData, id: Date.now(),
            }
            setUsers([...users, newUser])
        }

        setShowModal(false)
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm('are you sure want to delete this data?')
        if (confirmation) {
            setUsers(users.filter((u) => u.id !== id))
        }
    }
    // 

    return (
        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h4 className="mb-0 fw-bold">Data User</h4>
                        </div>
                        <Button variant="primary" onClick={handleOpenModal}>
                            Create New User
                        </Button>
                    </div>
                    <Table responsive hover bordered className="align-middle mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>status</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.quantity}</td>
                                    <td>{user.price}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <Button onClick={() => handleEditModal(user)} variant="warning" size="sm" className="me-2">Edit</Button>
                                        <Button onClick={() => handleDelete(user.id)} variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Your Name" required
                                value={formData.name} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>quantity</Form.Label>
                            <Form.Control type="text" name="quantity" placeholder="Jumlah yang anda inginkan" required
                                value={formData.quantity} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="text" name="price" placeholder="Masukkan harga" required
                                value={formData.price} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>status</Form.Label>
                            <Form.Select name="status" aria-label="Default select example" value={formData.status} onChange={handleChange}>
                                <option value="0">Open this select menu</option>
                                <option value="active">active</option>
                                <option value="in active">in active</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Produk;