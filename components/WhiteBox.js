import styled from "styled-components";

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export default WhiteBox;