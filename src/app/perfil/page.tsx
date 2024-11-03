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

const schema = yup.object().shape({
    modelo: yup.string().required("Modelo é obrigatório").min(2, "Modelo deve ter no mínimo 2 caracteres"),
    marca: yup.string().required("Marca é obrigatória").min(2, "Marca deve ter no mínimo 2 caracteres"),
    ano: yup
        .number()
        .typeError("Ano deve ser um número")
        .required("Ano é obrigatório")
        .min(1886, "Ano deve ser maior ou igual a 1886")
        .max(new Date().getFullYear(), "Ano deve ser menor ou igual ao ano atual"),
});

export default function Perfil() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [vehicles, setVehicles] = useState([]); // Inicializando como array vazio

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const fetchVehicles = async (id_cliente) => {
        try {
            const response = await fetch(`${apiUrl}/webapi/veiculo?id_cliente=${id_cliente}`);
            if (response.ok) {
                const data = await response.json();
                setVehicles(Array.isArray(data) ? data : []); // Garante que `vehicles` seja um array
            } else {
                console.error("Erro ao buscar veículos.");
                setVehicles([]); // Define como array vazio em caso de erro
            }
        } catch (error) {
            console.error("Erro ao buscar veículos:", error);
            setVehicles([]); // Define como array vazio em caso de erro
        }
    };
    

    useEffect(() => {
        const savedUser = localStorage.getItem("loginData");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            const id_cliente = parsedUser.cliente?.id_cliente;
            console.log("id_cliente:", id_cliente); // Verifica o valor do id_cliente
    
            setUser({ name: parsedUser.cliente.nome_cliente, email: parsedUser.email_login });
    
            if (id_cliente) {
                fetchVehicles(id_cliente); // Busca os veículos do cliente ao abrir a página
            }
        }
    }, []);
    

    const onSubmit = async (data) => {
        const savedUser = localStorage.getItem("loginData");
        if (!savedUser) {
            alert("Erro: ID do cliente não encontrado.");
            return;
        }

        const parsedUser = JSON.parse(savedUser);
        const id_cliente = parsedUser.cliente?.id_cliente;

        if (!id_cliente) {
            alert("Erro: ID do cliente não encontrado.");
            return;
        }

        const newVehicle = { 
            modelo: data.modelo, 
            marca: data.marca, 
            ano: data.ano, 
            cliente: { id_cliente: Number(id_cliente)}
        };

        try {
            const response = await fetch(`${apiUrl}/webapi/veiculo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newVehicle),
            });

            if (response.ok) {
                alert("Veículo adicionado com sucesso!");
                await fetchVehicles(id_cliente); // Atualiza a lista de veículos
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
                    
                    // Remove o veículo excluído da lista localmente
                    setVehicles((prevVehicles) => prevVehicles.filter(vehicle => vehicle.id_veiculo !== vehicleId));

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
                                    {...register("modelo")}
                                />
                                {errors.modelo && <span className="text-red-700">{errors.modelo.message}</span>}
                                
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Marca"
                                    {...register("marca")}
                                />
                                {errors.marca && <span className="text-red-700">{errors.marca.message}</span>}
                                
                                <input
                                    className="inputcar"
                                    type="text"
                                    placeholder="Ano"
                                    {...register("ano")}
                                />
                                {errors.ano && <span className="text-red-700">{errors.ano.message}</span>}
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
                            <div key={vehicle.id_veiculo || vehicle.id} className="card">
                                <div>
                                    <p><strong>Modelo:</strong> {vehicle.modelo}</p>
                                    <p><strong>Marca:</strong> {vehicle.marca}</p>
                                    <p><strong>Ano:</strong> {vehicle.ano}</p>
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
                                        onClick={() => handleRemoveVehicle(vehicle.id_veiculo || vehicle.id)}
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
