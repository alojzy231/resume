import styled, { keyframes } from 'styled-components';

const flameAnimation = keyframes`
    from{
        transform: translateY(-22px);
    }
    to{
        transform: translateY(22px);
    }
`;

export const RocketIconFlame = styled.path``;

export const ScrollUpButtonContainer = styled.button`
  height: 8.6rem;
  width: 8.6rem;

  position: fixed;
  top: calc(100% - 11rem);
  left: calc(100% - 11rem);
  z-index: ${({ isHidden }) => (isHidden ? -1 : 99)};

  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: 0.2s ease;

  border-radius: 50%;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint20};

  filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.25));

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    ${RocketIconFlame} {
      animation: ${flameAnimation} 500ms infinite linear;
    }
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 4.2rem;
    width: 4.2rem;

    top: calc(100% - 7rem);
    left: calc(100% - 7rem);
  }
`;
export const RocketIcon = styled.svg`
  height: 6rem;
  width: 4.5rem;

  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 3rem;
    width: 2.2rem;
  }
`;
