import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const BigImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.3s ease; /* Smooth zoom effect */
    cursor: zoom-in;

    &:hover {
        transform: scale(1.5); /* Zoom in by 1.5 times */
        cursor: zoom-out;
    }
`;

const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
`;

const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${(props) =>
            props.active
                    ? `
      border-color: #ccc;
    `
                    : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
`;

const BigImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 200px; /* Set the height of the image wrapper */
    position: relative;
`;

export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0]);

    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage} />
            </BigImageWrapper>
            <ImageButtons>
                {images.map((image) => (
                    <ImageButton
                        key={image}
                        active={image === activeImage}
                        onClick={() => setActiveImage(image)}
                    >
                        <Image src={image} alt="" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}
