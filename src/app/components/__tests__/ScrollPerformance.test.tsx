import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ReadingProgressBar } from '../ui/ReadingProgressBar';

let frameCallback: FrameRequestCallback | undefined;

beforeEach(() => {
  frameCallback = undefined;
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    frameCallback = callback;
    return 1;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);
  vi.mocked(window.matchMedia).mockReturnValue({ matches: false } as MediaQueryList);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('performance de scroll', () => {
  it('atualiza a barra de progresso sem estado React', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 });
    const { container } = render(<ReadingProgressBar />);
    const progress = container.querySelector<HTMLDivElement>('[style]');

    frameCallback?.(0);

    expect(progress).toHaveStyle({ transform: 'scaleX(0.5)' });
  });

  it('cancela frames pendentes no cleanup', () => {
    const { unmount } = render(<ReadingProgressBar />);
    fireEvent.scroll(window);

    unmount();

    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
  });
});
