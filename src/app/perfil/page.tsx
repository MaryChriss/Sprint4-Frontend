"use client";

import { useState } from "react";
import { FaCar, FaTimes } from "react-icons/fa";
import { Button } from "../../components/FormLogin/FormLogin.style";
import { Layout } from "../../components/Layout/Layout";
import { StyledCar, StyledContainer, StyledConteudo, StyledInfosUser } from "./Perfil.style";
import Image from "next/image";

export default function Perfil() {
    const [vehicles, setVehicles] = useState([]);
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');

    const handleAddVehicle = () => {

        if (model && brand && year) {
            const newVehicle = { model, brand, year };
            setVehicles([...vehicles, newVehicle]);
            setModel('');
            setBrand('');
            setYear('');
        }
    };

    const handleRemoveVehicle = (indexToRemove) => {

        const updatedVehicles = vehicles.filter((_, index) => index !== indexToRemove);
        setVehicles(updatedVehicles);
    };

    return (
        <Layout>
            <StyledContainer>
                <StyledConteudo>
                    <StyledInfosUser>
                        <Image src="/user.png" alt="Usuário" className="image" width={192} height={192}/>
                        <div>
                            <h1 className="h1fi">Fulano de tal tal e tal</h1>
                            <p>E-mail:</p>
                        </div>
                    </StyledInfosUser>

                    <div>
                        <h3>Veículos:</h3>
                        <div>
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Modelo"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Marca"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            <input
                                className="inputcar"
                                type="text"
                                placeholder="Ano"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={handleAddVehicle}
                            style={{ marginTop: '2rem', marginLeft: "10rem", marginBottom: "2rem" }}
                        >
                            Adicionar
                        </Button>
                    </div>

                    <StyledCar>
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="card">
                                <div>
                                    <p><strong>Modelo:</strong> {vehicle.model}</p>
                                    <p><strong>Marca:</strong> {vehicle.brand}</p>
                                    <p><strong>Ano:</strong> {vehicle.year}</p>
                                </div>

                                <div className="icons">
                                    <FaCar style={{ fontSize: '3rem', color: '#007bff', marginLeft: "3rem" }} />
                                    <FaTimes
                                        style={{
                                            fontSize: '1.2rem',
                                            color: 'red',
                                            cursor: 'pointer',
                                            marginLeft: '1rem'
                                        }}
                                        onClick={() => handleRemoveVehicle(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </StyledCar>
                </StyledConteudo>
            </StyledContainer>
        </Layout>
    );
}
