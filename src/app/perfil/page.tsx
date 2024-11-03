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

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Schema de validação com yup
const schema = yup.object().shape({
    model: yup.string().required("Modelo é obrigatório").min(2, "Modelo deve ter no mínimo 2 caracteres"),
    brand: yup.string().required("Marca é obrigatória").min(2, "Marca deve ter no mínimo 2 caracteres"),
    year: yup
        .number()
        .typeError("Ano deve ser um número")
        .required("Ano é obrigatório")
        .min(1886, "Ano deve ser maior ou igual a 1886")
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

    // Função para buscar a lista de veículos do backend
    const fetchVehicles = async () => {
        try {
            const response = await fetch(`${apiUrl}/webapi/veiculo`);
            if (response.ok) {
                const data = await response.json();
                setVehicles(data);
            } else {
                console.error("Erro ao buscar veículos.");
            }
        } catch (error) {
            console.error("Erro ao buscar veículos:", error);
        }
    };

    // useEffect para buscar usuário e veículos ao carregar o componente
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    // Função para adicionar um novo veículo
    const onSubmit = async (data) => {
        const clienteId = localStorage.getItem("clienteId"); // Obtém o ID do cliente do localStorage
        if (!clienteId) {
            alert("Erro: ID do cliente não encontrado.");
            return;
        }

        const newVehicle = { 
            model: data.model, 
            brand: data.brand, 
            year: data.year, 
            clienteId: clienteId // Adiciona o ID do cliente no corpo da requisição
        };

        try {
            const response = await fetch(`${apiUrl}/webapi/veiculo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newVehicle),
            });

            if (response.ok) {
                alert("Veículo adicionado com sucesso!");
                await fetchVehicles(); // Atualiza a lista de veículos
                reset(); // Limpa os campos do formulário
            } else {
                alert("Erro ao adicionar veículo.");
            }
        } catch (error) {
            console.error("Erro ao chamar a API:", error);
            alert("Erro ao adicionar veículo. Por favor, tente novamente.");
        }
    };

    // Função para excluir um veículo pelo ID
    const handleRemoveVehicle = async (vehicleId) => {
        try {
            const response = await fetch(`${apiUrl}/webapi/veiculo/${vehicleId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Veículo excluído com sucesso!");
                await fetchVehicles(); // Atualiza a lista de veículos
            } else {
                alert("Erro ao excluir veículo.");
            }
        } catch (error) {
            console.error("Erro ao chamar a API:", error);
            alert("Erro ao excluir veículo. Por favor, tente novamente.");
        }
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
                        {vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="card">
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
                                        onClick={() => handleRemoveVehicle(vehicle.id)}
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
