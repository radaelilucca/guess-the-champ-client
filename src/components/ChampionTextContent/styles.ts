import styled from "styled-components";

interface ITextParagraphProps {
  backgroundColor?: string;
}

export const TextParagraph = styled.p<ITextParagraphProps>`
  anti-cheat {
    border-radius: ${({ theme }) => theme.rounded.md};

    color: transparent;

    background: ${({ theme, backgroundColor }) =>
      backgroundColor || theme.colors.primary};
  }
`;
