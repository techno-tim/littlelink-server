import { trackGoogleEvent } from './google';

it('should call gtag with event', () => {
  const mockedGtag = jest.fn();
  const originalWindow = { ...window };
  const windowSpy = jest.spyOn(global, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    gtag: mockedGtag,
  }));

  trackGoogleEvent('youtube-button');
  expect(mockedGtag).toBeCalledWith('event', 'youtube-button');

  windowSpy.mockRestore();
});
