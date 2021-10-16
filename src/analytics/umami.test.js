import { trackUmamiEvent } from './umami';

it('should call gtag with event', () => {
  const mockedUmami = jest.fn();
  const originalWindow = { ...window };
  const windowSpy = jest.spyOn(global, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    umami: mockedUmami,
  }));

  trackUmamiEvent('youtube-button');
  expect(mockedUmami).toBeCalledWith('youtube-button');

  windowSpy.mockRestore();
});
