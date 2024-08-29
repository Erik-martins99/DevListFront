import { useEffect, useState } from "react";
import "./DeshBoard.css"
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DeshBoard() {
    const [developers, setdevelopers] = useState([])

    useEffect(() => {
        const fetchEmployee = async() => {
            try{
                const res = await fetch("http://localhost:8080/developer")
                const data = await res.json();
                
                setdevelopers(data);
            }
            catch (err) {
                console.log("Erro fetch employee: ", err.message)
            }
        }  
            
        fetchEmployee();
    }, [])

    const deleteEmployee = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/developer/${id}`, {  
                method: "DELETE"});

            if(res.ok) {
                setdevelopers((prevEmployee) => 
                    prevEmployee.filter((employee) => employee.id !== id) 
                )
            } 
            
            console.log("Deleted employee with ID ", id)
        } catch (err) {
            console.log("Delete error: ", err.message)
        }
    }

    return (
        <>
            <div className="context">
                <h1 className="title">Developers</h1>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Nickname</th>
                        <th>Email</th>
                        <th>CPF_Criptografado</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {developers.map((developer) => {
                            return <tr key={developer.id}>
                            <td>{developer.name}</td>
                            <td>{developer.nickname}</td>
                            <td>{developer.email}</td>
                            <td>{developer.cpf}</td>
                            <td className="actions-buttons">
                                <Button as={ Link } to="/update" variant="outline-warning">Update</Button>
                                <Button variant="outline-danger" onClick={ () => {
                                    deleteEmployee(developer.id)
                                } }>Delete</Button>
                            </td>
                            </tr>
                        })} 
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default DeshBoard