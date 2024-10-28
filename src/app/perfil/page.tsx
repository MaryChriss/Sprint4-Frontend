"use client";

import { useEffect, useState } from "react";
import { FaCar, FaTimes } from "react-icons/fa";
import { Button } from "../../components/FormLogin/FormLogin.style";
import { Layout } from "../../components/Layout/Layout";
import { StyledCar, StyledContainer, StyledConteudo, StyledInfosUser, StyledInputsCar } from "./Perfil.style";
import Image from "next/image";

export default function Perfil() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [vehicles, setVehicles] = useState([]);
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        const savedVehicles = localStorage.getItem("vehicles");
        if (savedVehicles) {
            setVehicles(JSON.parse(savedVehicles));
        }
    }, []);

    const handleAddVehicle = () => {
        if (model && brand && year) {
            const newVehicle = { model, brand, year };
            const updatedVehicles = [...vehicles, newVehicle];
            setVehicles(updatedVehicles);
            localStorage.setItem("vehicles", JSON.stringify(updatedVehicles)); // Salva veículos no localStorage
            setModel('');
            setBrand('');
            setYear('');
        }
    };

    const handleRemoveVehicle = (indexToRemove: number) => {
        const updatedVehicles = vehicles.filter((_, index) => index !== indexToRemove);
        setVehicles(updatedVehicles);
        localStorage.setItem("vehicles", JSON.stringify(updatedVehicles)); // Atualiza veículos no localStorage
    };

    return (
        <Layout>
            <StyledContainer>
                <StyledConteudo>
                    <StyledInfosUser>
                        <Image src="/user.png" alt="Usuário" className="image" width={192} height={192}/>
                        <div>
                            <h1 className="h1fi">{user?.name || "Nome do Usuário"}</h1>
                            <p>E-mail: {user?.email || "email@example.com"}</p>
                        </div>
                    </StyledInfosUser>

                    <StyledInputsCar>
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
                            className="botao"
                            onClick={handleAddVehicle}
                            style={{ marginTop: '2rem' }}
                        >
                            Adicionar
                        </Button>
                    </StyledInputsCar>

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
