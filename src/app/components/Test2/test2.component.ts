import { Component, Input } from '@angular/core';

@Component({
  selector: 'test2',
  standalone: true,
  templateUrl: './test2.component.html',
})
export class Test2Component {
  @Input() text_code = '';
}
