import { Component } from '@angular/core';
import { CardinalnumberPipe } from '../../pipes/cardinalnumber.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-pipesdemo',
  standalone: true,
  imports: [CardinalnumberPipe, CommonModule, FormsModule, SalutationPipe],
  templateUrl: './pipesdemo.component.html',
  styleUrl: './pipesdemo.component.css'
})
export class PipesdemoComponent {

}
