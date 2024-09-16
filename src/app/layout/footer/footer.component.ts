import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: 'footer.component.html',
  styleUrl: './footer.component.css',
})
export class AppFooter {
  copyWriteTitle: string = 'Copyright ©2024 Kazu';
}
