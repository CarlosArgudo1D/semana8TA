import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow if token exists', () => {
    localStorage.setItem('token', 'yes');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should block if token is missing', () => {
    localStorage.removeItem('token');
    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth']);
  });
});
