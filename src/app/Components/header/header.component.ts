import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent{

  private Header = String('Encabezado - Header');

  constructor(){
    console.log(`¡Tu Componente ${this.Header} está funcionando Correctamente!`);
  }

}
