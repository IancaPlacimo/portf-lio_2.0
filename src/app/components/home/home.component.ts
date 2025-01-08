import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { ProjetoComponent } from "../projeto/projeto.component";


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, ProjetoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('scrollSection', { static: false }) scrollSection: ElementRef;

  ngAfterViewInit(): void {
    if (this.scrollSection && this.scrollSection.nativeElement) {
      window.addEventListener('scroll', () => {
        const sectionTop = this.scrollSection.nativeElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          this.scrollSection.nativeElement.classList.add('opacity-100', 'transform-none');
        } else {
          this.scrollSection.nativeElement.classList.remove('opacity-100', 'transform-none');
        }
      });
    }
  }
}
