import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Input, SwitchLink } from "../FormLogin/FormLogin.style";
import { Styledh1Cadas } from "./FormCadastro.style";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface FormCadastroProps {
    toggleForm: () => void;
}

const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "As senhas não coincidem")
        .required("Confirme sua senha"),
});

const FormCadastro: React.FC<FormCadastroProps> = ({ toggleForm }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        const { name, email, password } = data;
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        alert("Cadastro realizado com sucesso! Agora faça o login.");
        toggleForm();
    };

    return (
        <>
            <FaCircleArrowLeft size={25} onClick={toggleForm}/>
            <Styledh1Cadas>Cadastre-se:</Styledh1Cadas>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Nome Completo"
                    {...register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}

                <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <Input
                    type="password"
                    placeholder="Senha"
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <Button type="submit">Cadastrar</Button>
            </form>

            <SwitchLink onClick={toggleForm}>Já tem uma conta? Login</SwitchLink>
        </>
    );
};

export default FormCadastro;
