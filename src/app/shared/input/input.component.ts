import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'] // Đảm bảo rằng tên tệp CSS khớp với tệp thực tế
})
export class InputComponent {
  @Input() label: string = '';
  @Input() labelFor: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: any;
}
