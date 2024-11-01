"use client";

import { useEffect, useState } from "react";
import { FaCar, FaTimes } from "react-icons/fa";
import { Button } from "../../components/FormLogin/FormLogin.style";
import { Layout } from "../../components/Layout/Layout";
import { StyledCar, StyledContainer, StyledConteudo, StyledInfosUser, StyledInputsCar } from "./Perfil.style";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema de validação com yup
const schema = yup.object().shape({
    model: yup.string().required("Modelo é obrigatório").min(2, "Modelo deve ter no mínimo 2 caracteres"),
    brand: yup.string().required("Marca é obrigatória").min(2, "Marca deve ter no mínimo 2 caracteres"),
    year: yup
        .number()
        .typeError("Ano deve ser um número")
        .required("Ano é obrigatório")
        .min(1886, "Ano deve ser maior ou igual a 1886") // Primeiros automóveis datam de 1886
        .max(new Date().getFullYear(), "Ano deve ser menor ou igual ao ano atual"),
});

export default function Perfil() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [vehicles, setVehicles] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

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

    const onSubmit = (data: any) => {
        const newVehicle = { model: data.model, brand: data.brand, year: data.year };
        const updatedVehicles = [...vehicles, newVehicle];
        setVehicles(updatedVehicles);
        localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
        reset(); // Limpa os campos do formulário
    };

    const handleRemoveVehicle = (indexToRemove: number) => {
        const updatedVehicles = vehicles.filter((_, index) => index !== indexToRemove);
        setVehicles(updatedVehicles);
        localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    };

    return (
        <Layout>
            <StyledContainer>
                <StyledConteudo>
                    <StyledInfosUser>
                        <Image src="/user.png" alt="Usuário" className="image" width={192} height={192} />
                        <div>
                            <h1 className="h1fi">{user?.name || "Nome do Usuário"}</h1>
                            <p>E-mail: {user?.email || "email@example.com"}</p>
                        </div>
                    </StyledInfosUser>

                    <StyledInputsCar>
                        <h3>Veículos:</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Modelo"
                                    {...register("model")}
                                />
                                {errors.model && <span className="text-red-700">{errors.model.message}</span>}
                                
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Marca"
                                    {...register("brand")}
                                />
                                {errors.brand && <span className="text-red-700">{errors.brand.message}</span>}
                                
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Ano"
                                    {...register("year")}
                                />
                                {errors.year && <span className="text-red-700">{errors.year.message}</span>}
                            </div>
                            <Button
                                type="submit"
                                className="botao"
                                style={{ marginTop: '2rem' }}
                            >
                                Adicionar
                            </Button>
                        </form>
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
