import {keyframes,style} from '@angular/animations';

export const swing = [
    style({transform: 'translateX(6px)',offset: .2}),
    style({transform: 'translateX(-6px)',offset: .4}),
    style({transform: 'translateX(3px)',offset: .6}),
    style({transform: 'translateX(-3px)',offset: .8}),
    style({transform: 'none',offset: 1}),
]

