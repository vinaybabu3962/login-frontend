import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  const loggedIn = localStorage.getItem('loggedIn');

  if (loggedIn === 'true') {
    return true;  
  }

  router.navigate(['/']);
  return false;
};
