import { trackGoogleEvent } from '../google';

describe('google.js', () => {
  const mockedGtag = jest.fn();
  const originalWindow = { ...window };
  const windowSpy = jest.spyOn(global, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    gtag: mockedGtag,
  }));
  it('should call gtag with event', () => {
    trackGoogleEvent('youtube-button');
    expect(mockedGtag).toBeCalledWith('event', 'youtube-button');
    windowSpy.mockRestore();
  });
});
