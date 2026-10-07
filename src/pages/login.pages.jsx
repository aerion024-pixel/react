import { useState } from "react";
// import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

// const login = () => {

// }
// export default login { 

// }
export default function Login() {
    const _initialForm = {
        email: "",
        password: "",
    }
    const navigate = useNavigate()
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
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4 bg-gray-800">
            <div className="w-full max-w-md">
                <div className="mb-6 flex flex-col items-center">
                    <div className="mb-2 flex h-32 w-32 items-start justify-center overflow-hidden rounded-lg shadow
                    bg-[url(/src/components/gambar/ive128.jpg)]"
                    >

                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-400">ppkd jp </h1>
                    <p className="text-sm text-muted">point of sales</p>
                </div>
                <Card className="rounded-lg shadow-lg border-border">
                    <CardHeader className="mx-auto p-4 space-y-1 font-semibold">
                        <CardTitle className="text-lg font-semibold">sign in  to your account</CardTitle>
                        <CardDescription>enter your credential</CardDescription>
                    </CardHeader>

                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-4 p-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input id="email" name="email" type="text" value={fromData.email} onChange={handleChange} placeholder="enter your email" required autoFocus/>
                            </div>
                            <div className="space-y-2">
                                <Label>password</Label>
                                <Input id="password" name="password" type="text" value={fromData.password} onChange={handleChange} placeholder="enter your password" required/>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3 p-3">
                            <Button type="submit" className="w-full">
                                sign in
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
        // <Container className="d-flex align-items-center justify-content-center min-vh-100">

        //     {/* <p>Email : {FormData.email}</p>
        //     <p>Password : {FormData.password}</p> */}
        //     <div className="w-100 d-flex align-items-center justify-content-center">
        //         <Card className="shadow" style={{ width: "400px" }}>
        //             <Card.Body className="p-4">
        //                 <h2 className="font-weight-bold text-center mb-4">
        //                     Login Form
        //                 </h2>

        //                 <Form>
        //                     <Form.Group className="mb-3">
        //                         <Form.Label>Email</Form.Label>
        //                         <Form.Control
        //                             name="email"
        //                             value={FormData.email}
        //                             onChange={handleChange}
        //                             type="email" required></Form.Control>
        //                     </Form.Group>
        //                     {/* SSO : */}
        //                     <Form.Group className="mb-3">
        //                         <Form.Label>Password</Form.Label>
        //                         <Form.Control
        //                             name="password"
        //                             value={FormData.password}
        //                             onChange={handleChange}
        //                             type="password" required></Form.Control>
        //                     </Form.Group>
        //                     <Form.Group>
        //                         <Button variant="primary" type="submit" className="w-100" onClick={handleLogin}>
        //                             {isLoading ? "Loading" : "SignIn"}
        //                         </Button>
        //                     </Form.Group>
        //                 </Form>

        //             </Card.Body>
        //         </Card>
        //     </div>
        // </Container>
    )
}
