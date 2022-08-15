import styled from "styled-components";

export const Container = styled.div`
  background: black;

  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  height: 11rem;
  width: 11rem;

  border-width: 0.35rem;
  border-style: solid;
  border-radius: 50%;

  position: absolute;

  border-color: ${({ theme }) => {
    const { primary } = theme.colors;

    return `transparent ${primary} ${primary}`;
  }};

  animation: spin 1200ms infinite ease-out;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const EmoteImage = styled.img`
  height: 9rem;
  width: 9rem;

  position: absolute;

  animation: pulse 1200ms infinite ease-out forwards;

  transform: scale(0.9);

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(0.9);
    }
  }
`;

export const LoadingText = styled.strong`
  color: white;

  font-weight: 400;
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-top: auto;
  margin-bottom: 2rem;

  animation: flash 2s infinite;

  @keyframes flash {
    0% {
      transform: scale(0.9);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }

    100% {
      transform: scale(0.9);
      opacity: 0.85;
    }
  }
`;
