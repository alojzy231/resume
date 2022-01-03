import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
`;

const floatinDotAnimation = keyframes`
    25%{
        transform: translateY(-50%);
    }
    75%{
        transform: translateY(50%);
    }
`;

export const Dot = styled.div`
  height: 1rem;
  width: 1rem;

  margin: 0 0.3rem;

  background-color: ${({ theme: { colors } }) => colors.white};

  border-radius: 50%;

  animation: ${floatinDotAnimation} 1s ease infinite;
  animation-delay: ${({ animationOrder }) => animationOrder / 2}s;
`;
