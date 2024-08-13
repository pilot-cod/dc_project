import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: 'app-root',
  standalone: true, // Đảm bảo component này là standalone
  imports: [RouterOutlet, SharedModule], // Nhập SharedModule thay vì InputComponent trực tiếp
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'] // Đảm bảo rằng bạn dùng 'styleUrls' không phải 'styleUrl'
})
export class AppComponent {
  title = 'dc_project';
}
