import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./PostDeveloper.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostDeveloper() {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        name: "",
        nickname: "",
        email: "",
        cpf: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:8080/developer", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataForm)
            });

            console.log("Developer register successfull!")
            navigate("/")
        } catch (err) {
            console.log("Error to register developer: ",err);
        }
    }

    return(
        <>
            <div className='container'>
                <Form className='form-container' onSubmit={handleSubmit}>

                    <h2>Post Developer</h2>

                    <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="name"
                    value={dataForm.name}
                    onChange={handleChange}
                    className='form-container-input'
                    />

                    <Form.Control 
                    type="text" 
                    name="nickname"
                    placeholder="nickname"
                    value={dataForm.nickname}
                    onChange={handleChange}
                    className='form-container-input'
                    /> 

                    <Form.Control 
                    type="text" 
                    name="email"
                    placeholder="email"
                    value={dataForm.email}
                    onChange={handleChange}
                    className='form-container-input'
                    />

                    <Form.Control 
                    type="text" 
                    name="cpf"
                    placeholder="CPF"
                    value={dataForm.cpf}
                    onChange={handleChange}
                    className='form-container-input'
                    /> 

                    <Button variant="outline-light" type='submit' className='form-container-button'>Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default PostDeveloper