import styled from 'styled-components';

const ContactFormContainer = styled.form`
  height: 65.4rem;
  width: 54.4rem;
  padding: 3.2rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1.9rem;
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint15};
`;

export default ContactFormContainer;
