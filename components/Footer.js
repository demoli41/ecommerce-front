import Center from "@/components/Center";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaGooglePlay, FaEnvelope } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";

const StyledFooter = styled.div`
    margin-top: 40px;
    padding-bottom: 40px;
    background-color: #222;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: flex-start;
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 15px;
    text-align: center;
`;

const PolicyRow = styled.p`
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    margin-top: 20px;
`;

const IconRow = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`;

const IconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
        color: #ddd;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <Center>
                <Wrapper>
                    <Column>
                        <Title>Connect with us</Title>
                        <IconRow>
                            <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </IconLink>
                            <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </IconLink>
                            <IconLink href="mailto:support@yourstore.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope />
                            </IconLink>
                            <IconLink href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <FaGooglePlay />
                            </IconLink>
                        </IconRow>
                    </Column>
                    <Column>
                        <Title>Secure Payments</Title>
                        <IconRow>
                            <SiVisa style={{ color: "#fff", fontSize: "1.5rem" }} />
                            <SiMastercard style={{ color: "#fff", fontSize: "1.5rem" }} />
                            <SiPaypal style={{ color: "#fff", fontSize: "1.5rem" }} />
                        </IconRow>
                    </Column>
                </Wrapper>
                <PolicyRow>© 2024 SBA, LLC. All rights reserved.</PolicyRow>
            </Center>
        </StyledFooter>
    );
}
