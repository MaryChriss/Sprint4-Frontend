import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { Button, Input, InputContainer, InputIcon, Styledh1, SwitchLink } from "./FormLogin.style";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface FormLoginProps {
    toggleForm: () => void;
}

const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
});

const FormLogin: React.FC<FormLoginProps> = ({ toggleForm }) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            const { email: savedEmail, password: savedPassword } = JSON.parse(savedUser);

            if (data.email === savedEmail && data.password === savedPassword) {
                alert("Login bem-sucedido!");
                router.push("/perfil");
            } else {
                alert("E-mail ou senha incorretos.");
            }
        } else {
            alert("Nenhum usuário cadastrado com este e-mail.");
        }
    };

    return (
        <>
            <FaCircleArrowLeft size={25} onClick={() => router.push('/')}/>
            <Styledh1>Login:</Styledh1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputIcon>
                        <BiUser size="1.5rem" color="#00a1fc" />
                    </InputIcon>
                    <Input
                        type="text"
                        placeholder="E-mail"
                        {...register("email")}
                    />
                </InputContainer>
                {errors.email && <p>{errors.email.message}</p>}

                <InputContainer>
                    <InputIcon>
                        <FaLock size="1.5rem" color="#00a1fc" />
                    </InputIcon>
                    <Input
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                    />
                </InputContainer>
                {errors.password && <p>{errors.password.message}</p>}

                <div>
                    <Button type="submit">Entrar</Button>
                </div>
            </form>
            <SwitchLink onClick={toggleForm}>É novo aqui? Cadastre-se</SwitchLink>
        </>
    );
};

export default FormLogin;
