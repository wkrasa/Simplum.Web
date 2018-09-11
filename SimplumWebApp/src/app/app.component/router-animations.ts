import { trigger, animate, style, state, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  //transition(':leave', [style({ opacity: 0.2, transform: 'translateX(20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
  //transition(':enter', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
  //transition('*=>dashboard', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
  //transition('*=>sows', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
  transition('*=>*', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))])
  //transition('dashboard=>*', [style({ opacity: 0.2, transform: 'translateX(0)' }), animate(500, style({ opacity: 1, transform: 'translateX(-20%)' }))]),
]);
