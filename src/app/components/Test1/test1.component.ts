import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'test1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test1.component.html',
})
export class Test1Component {
  @Output() changeCode: EventEmitter<string> = new EventEmitter<string>();
  code = '';

  handleSubmitCode() {
    console.log('Change Code from child with event from parent');
    this.changeCode.emit(this.code);
  }
}
