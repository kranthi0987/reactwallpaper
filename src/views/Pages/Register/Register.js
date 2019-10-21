import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            repeated_Password: '',
            submitted: false,
            loading: false,
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {password, repeated_password, username, email} = this.state;
        // perform all neccassary validations
        if (password !== repeated_password) {
            alert("Passwords don't match");
        } else {
            // make API call
            console.log(username, password, email,);
            this.setState({loading: true});
            let url = 'http://127.0.0.1:8000/account/auth/register/';
            fetch(url, {
                method: "POST",
                headers: ({
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            }).then(response => {
                if (response.status === 201) {
                    console.log(response);
                    this.props.history.push('/login');
                    return response.json()
                } else {
                    console.log("oh no!", response.status === 404)
                }
            }).then(function (data) {
                console.log('request succeeded with JSON response', data)
            })
        }



    }

    render() {
        const {username, password, email, repeated_password, submitted, loading, error} = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <h1>Register</h1>
                                        <p className="text-muted">Create your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" placeholder="Username" autoComplete="username" name="username"
                                                   value={username} onChange={this.handleChange} />
                                            {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                            }
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>@</InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" placeholder="Email" autoComplete="email" name="email" value={email}
                                                   onChange={this.handleChange} />
                                            {submitted && !email &&
                                            <div className="help-block">email is required</div>
                                            }
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" placeholder="Password" autoComplete="new-password"
                                                  name="password" value={password} onChange={this.handleChange} />
                                            {submitted && !password &&
                                            <div className="help-block">password is required</div>
                                            }
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" placeholder="Repeat password" name="repeated_password"
                                                   autoComplete="new-password" value={repeated_password}
                                                   onChange={this.handleChange} />
                                            {submitted && !repeated_password &&
                                            <div className="help-block">repeated_password is required</div>
                                            }
                                        </InputGroup>
                                        <Button color="success" block onClick={this.handleSubmit} >Create
                                            Account</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
