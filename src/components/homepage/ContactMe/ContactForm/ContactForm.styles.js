import styled from 'styled-components';

const ContactFormContainer = styled.form`
  width: 54.4rem;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.9rem;
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint15};

  @media ${({ theme: { medias } }) => medias.mobile} {
    min-width: 24.8rem;
    width: 80%;
    padding: 0 3rem;
  }
`;

export default ContactFormContainer;
