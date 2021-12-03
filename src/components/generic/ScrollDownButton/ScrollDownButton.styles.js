import styled from 'styled-components';

const ScrollDownButtonContainer = styled.button`
  width: 12.4rem;

  padding: 0;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);

  border: none;

  background: transparent;

  z-index: 10;

  -webkit-tap-highlight-color: transparent;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 6.4rem;
  }
`;

export default ScrollDownButtonContainer;
