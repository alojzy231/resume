import styled, { keyframes } from 'styled-components';

const floatingAnimation = ({ start, end }) => keyframes`
    from{
        transform: rotate(${start.rotateZ});
    }
    to{
        transform: rotate(${end.rotateZ});
    }
`;

const AstronautContainer = styled.svg`
  position: absolute;
  top: ${({ coordinates: { start } }) => start.y};
  left: ${({ coordinates: { start } }) => start.x};
  transform: translate(${({ coordinates: { end } }) => `${end.x},${end.y}`});
  transition: all ease 20s;

  animation: ${({ coordinates }) => floatingAnimation(coordinates)} linear 20s;
`;

export default AstronautContainer;
