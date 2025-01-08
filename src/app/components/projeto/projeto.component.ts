import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto',
  imports: [],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.scss'
})
export class ProjetoComponent {
   @Input() image: string = '';  
    @Input() text: string = ''; 
    @Input() link: string = ''; 

}
