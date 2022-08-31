import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useMountEffect } from './useMountEffect';

const maxAttempts = 5;

const useAntiCheat = () => {
  const [attempts, setAttempts] = useState(0);

  const contextMenuWatcher = (e: MouseEvent) => {
    e.preventDefault();

    setAttempts((prev) => prev + 1);
  };

  const keyboardWatcher = (e: KeyboardEvent) => {
    const blockedKeys = ['f12', 'control', 'alt'];

    const isBlocked = !!blockedKeys.filter((blockedItem) => {
      return e.code.toLowerCase().includes(blockedItem);
    }).length;

    if (isBlocked) {
      e.preventDefault();
      setAttempts((prev) => prev + 1);
    }
  };

  const addEventListeners = () => {
    window.addEventListener('contextmenu', contextMenuWatcher, false);
    window.addEventListener('keydown', keyboardWatcher, false);
  };

  const removeEventListeners = () => {
    window.removeEventListener('contextmenu', contextMenuWatcher);
    window.removeEventListener('keydown', keyboardWatcher);
  };

  useEffect(() => {
    if (!attempts) return;

    if (attempts >= maxAttempts) return;

    const messages = {
      default: 'Looks like you are trying to cheat... 🤔',
      warning: `Repeat this action ${
        maxAttempts - attempts
      } more times will abort the current match.`,
      lastAdvice:
        'Repeat this action again and this match will disappear like an ADC in front of a fed Zed...',
    };

    if (attempts < 3) {
      toast(messages.default);
    } else if (attempts + 1 < maxAttempts) {
      toast.error(messages.warning);
    } else {
      toast.error(messages.lastAdvice);
    }
  }, [attempts]);

  useMountEffect(() => {
    const allowCheats = import.meta.env.VITE_ALLOW_CHEATS === 'true';

    if (!allowCheats) {
      addEventListeners();
    }

    return () => {
      if (!allowCheats) {
        removeEventListeners();
      }
    };
  });

  return {
    cheatsAttempts: attempts,
    maxAttempts,
  };
};

export { useAntiCheat };
