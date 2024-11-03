import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BiUser } from "react-icons/bi";
import { Button, Input, InputContainer, InputIcon, Styledh1, SwitchLink } from "./FormLogin.style";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft, FaLock } from "react-icons/fa6";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface FormLoginProps {
    toggleForm: () => void;
}

interface LoginFormData {
    email: string;
    password: string;
}


const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
});

const FormLogin: React.FC<FormLoginProps> = ({ toggleForm }) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            const response = await fetch(`${apiUrl}/webapi/login/autenticar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email_login: data.email,
                    senha_login: data.password,
                }),
            });

            if (response.status === 202) {
                const loginData = await response.json();
                localStorage.setItem("loginData", JSON.stringify(loginData));
                alert("Login bem-sucedido!");
                router.push("/perfil");
            } else if (response.status === 403) {
                alert("E-mail ou senha incorretos.");
            } else {
                alert("Erro ao autenticar. Tente novamente mais tarde.");
            }
        } catch (error) {
            console.error("Erro ao chamar a API:", error);
            alert("Erro ao autenticar. Por favor, tente novamente mais tarde.");
        }
    };

    return (
        <>
            <FaCircleArrowLeft size={25} onClick={() => router.push('/')} />
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
