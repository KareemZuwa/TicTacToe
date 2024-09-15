import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppButton } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, AppButton],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class AppModal {
  @Input() winner: string | null = null;
  @Input() isDraw: boolean = false;
  @Output() resetGame = new EventEmitter<void>();

  onReset(): void {
    this.resetGame.emit();
  }
}
