import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <p>Home Component</p>
        <button (click)='go()'>Go check what it is all about</button>
    `
})
export class HomeComponent {
    constructor(private router: Router) {}
    
    go() {
        this.router.navigate(['/about']);
    }
}
