import styled, { keyframes } from 'styled-components';

const floatingAnimation = ({ start, end }) => keyframes`
    from{
        top: ${start.y};
        left: ${start.x};
        transform: rotate(${start.rotateZ});
    }
    to{
        top: ${end.y};
        left: ${end.x};
        transform: rotate(${end.rotateZ});
    }
`;

const AstronautContainer = styled.svg`
  position: absolute;

  animation: ${({ coordinates }) => floatingAnimation(coordinates)} linear 20s;
`;

export default AstronautContainer;
