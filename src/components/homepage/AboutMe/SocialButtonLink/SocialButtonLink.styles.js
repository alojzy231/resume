import styled from 'styled-components';

import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export const SocialButtonLinkContainer = styled.a`
  width: 8.6rem;
  height: 8.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 2;
  top: 100%;

  left: ${({ isRight }) => (isRight ? '100%' : '0%')};

  transform: translate(-50%, -50%);

  background-color: ${({ theme: { colors } }) => colors.dark};

  border-radius: 50%;
  filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.25));

  &:hover {
    cursor: pointer;
    filter: brightness(140%);
  }

  &:active {
    filter: brightness(160%);
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 4.3rem;
    height: 4.3rem;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  width: 6.4rem;
  height: 6.4rem;

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
export const StyledLinkedInIcon = styled(LinkedInIcon)`
  width: 6.4rem;
  height: 6.4rem;
  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
