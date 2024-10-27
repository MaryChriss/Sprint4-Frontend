import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { StyledLayout } from "./Layout.style";

interface LayoutProps {
children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
return (
    <StyledLayout>
        <Header />
            <main>{children}</main>
        <Footer />
    </StyledLayout>
);
}