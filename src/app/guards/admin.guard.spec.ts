import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AdminGuard } from './admin.guard';

describe('adminGuard', () => {
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard]
    });
    const guard = TestBed.inject(AdminGuard);
    executeGuard = guard.canActivate.bind(guard);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
