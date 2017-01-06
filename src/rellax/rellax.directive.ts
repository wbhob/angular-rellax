import { Directive, ElementRef, Input } from '@angular/core';
import * as Rellax from 'rellax';

@Directive({
    selector: '[rellax]'
})
export class RellaxDirective {
    rellax: any;
    @Input() speed: number;
    @Input() center: boolean;
    constructor(private el: ElementRef) {
        this.center = this.center ? this.center : false;
        this.speed = this.speed ? this.speed : -2;
        this.rellax = new Rellax(this.el.nativeElement, {
            center: this.center,
            speed: this.speed
        });
    }
}