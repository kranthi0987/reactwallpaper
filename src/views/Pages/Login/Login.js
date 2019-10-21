import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
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
        const {username, password, returnUrl} = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
//http://127.0.0.1:8000/account/auth/login/

        console.log(username, password);

        this.setState({loading: true});
        // userService.login(username, password)
        //     .then(
        //         user => {
        //           const { from } = this.props.location.state || { from: { pathname: "/" } };
        //           this.props.history.push(from);
        //         },
        //         error => this.setState({ error, loading: false })
        //     );
        let url = 'http://127.0.0.1:8000/account/auth/login/';
        // let data = new FormData();
        // data.append('username', username);
        // data.append('password', password);
        // var axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         // "Access-Control-Allow-Origin": "*",
        //         'Accept': '*',
        //     }
        // };
        // axios.post(url+'/account/auth/login/', {
        //     'username': 'username',
        //     'password': 'password'
        // }, axiosConfig)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // componentDidMount()
        // {
        fetch(url, {
            method: "POST",
            headers: ({
                "Accept": "application/json",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if (response.status === 200) {
                console.log(response);
                this.props.history.push('/dashboard')
                return response.json()
            } else {
                console.log("oh no!", response.status === 404)
            }
        }).then(function (data) {
            localStorage.setItem("token", data.token);
            console.log('request succeeded with JSON response', data)
        })
    }

    // }

    // fetch(url, {
    //     method: 'POST',
    //    mode: "no-cors",
    //     body: JSON.stringify({
    //         username: username,
    //         password: password
    //     })
    // }).then((response) => {
    //     return response.json();
    // })
    //     .then((myJson) => {
    //         console.log(myJson);
    //     })
    //     .then(function (data) {
    //         console.log('request succeeded with JSON response', data)
    //     })
    //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    render() {
        const {username, password, submitted, loading, error} = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form>
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="Username" autoComplete="username"
                                                       name="username" value={username} onChange={this.handleChange}/>
                                                {submitted && !username &&
                                                <div className="help-block">Username is required</div>
                                                }
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" placeholder="Password"
                                                       autoComplete="current-password" name="password" value={password}
                                                       onChange={this.handleChange}/>
                                                {submitted && !password &&
                                                <div className="help-block">Password is required</div>
                                                }
                                            </InputGroup>
                                            <Row>
                                                <Col xs="6">
                                                    <Button color="primary" className="px-4"
                                                            onClick={this.handleSubmit}>Login</Button>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <Button color="link" className="px-0">Forgot password?</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                            <Link to="/register">
                                                <Button color="primary" className="mt-3" active tabIndex={-1}>Register
                                                    Now!</Button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
