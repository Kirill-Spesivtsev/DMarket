import { TestBed } from '@angular/core/testing';

import { SetRequestTokenInterceptor } from './set-request-token.interceptor';

describe('SetRequestTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetRequestTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetRequestTokenInterceptor = TestBed.inject(SetRequestTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
