import { Component, Input, NgModule } from '@angular/core';
import { add } from '../math';
import { mul } from '../math2';
import { sub } from '../math3';
import { test1, test2 } from '../test/test1'
import { test3 } from '../test/def';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor() {
    console.log(add(1, 3));
    console.log(mul(1, 3));
    console.log(sub(1, 3));
    console.log(test1(1, 3));
    console.log(test2(1, 3));
    console.log(test3());
  }
}

@NgModule({
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class HelloModule {

}
