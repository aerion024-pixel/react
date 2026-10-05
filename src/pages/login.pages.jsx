import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// const login = () => {

// }
// export default login { 

// }
export default function Login() {
    const navigate = useNavigate()
    const _initialForm = {
        email: "",
        password: "",
    }
    const [fromData, setFormData] = useState(_initialForm)
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [isLoading, setIsloading] = useState(false)

    const handleChange = (e) => {

        //prev : parameter
        console.log(`Input change ${e.target.name} = ${e.target.value}`)
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        // setFormData(function(prev){})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setIsloading(true)
        setTimeout(() => {
            setIsloading(false)
            navigate("/dashboard")
            
        }, 1000)
    }

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">

            {/* <p>Email : {FormData.email}</p>
            <p>Password : {FormData.password}</p> */}
            <div className="w-100 d-flex align-items-center justify-content-center">
                <Card className="shadow" style={{ width: "400px" }}>
                    <Card.Body className="p-4">
                        <h2 className="font-weight-bold text-center mb-4">
                            Login Form
                        </h2>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    value={FormData.email}
                                    onChange={handleChange}
                                    type="email" required></Form.Control>
                            </Form.Group>
                            {/* SSO : */}
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    value={FormData.password}
                                    onChange={handleChange}
                                    type="password" required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit" className="w-100" onClick={handleLogin}>
                                    {isLoading ? "Loading" : "SignIn"}
                                </Button>
                            </Form.Group>
                        </Form>

                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
