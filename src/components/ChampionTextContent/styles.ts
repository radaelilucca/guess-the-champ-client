import styled from 'styled-components';

interface ITextParagraphProps {
  backgroundColor?: string;
}

export const TextParagraph = styled.p<ITextParagraphProps>`
  height: 100%;
  overflow-y: auto;

  padding: 0 0.3rem;

  anti-cheat {
    border-radius: ${({ theme }) => theme.rounded.md};

    color: transparent;

    background: ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary};
  }
`;
