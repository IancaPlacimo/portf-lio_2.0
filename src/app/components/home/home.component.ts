import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID, Input, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { ProjetoComponent } from "../projeto/projeto.component";
import { ApiServiceService } from '../../api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, ProjetoComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('scrollSection', { static: false }) scrollSection: ElementRef;
  email: string = 'iancaplacimo@gmail.com';
  git: string = '@iancaplacimo';
  estado: string = 'Download CV';
  texts: string[] = [
    'Front-end',
    'Angular',
    'HTML',
    'CSS',
    'Typescript',
    'JavaScript',
    'Web Responsive',
    'UI/UX',
  ];
  currentText: string = this.texts[0];
  count: number = 0;

  private isBrowser: boolean;

  constructor(
    private api: ApiServiceService,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.scrollSection && this.scrollSection.nativeElement) {
      window.addEventListener('scroll', this.handleScroll.bind(this));

      setInterval(() => {
        this.changeText();
      }, 1000);
    }
  }

  private handleScroll(): void {
    const sectionTop = this.scrollSection.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.85) {
      this.scrollSection.nativeElement.classList.add('opacity-100', 'transform-none');
    } else {
      this.scrollSection.nativeElement.classList.remove('opacity-100', 'transform-none');
    }
  }

  changeText(): void {
    this.count = (this.count + 1) % this.texts.length;
    this.currentText = this.texts[this.count];
  }

  download(): void {
    if (this.isBrowser) {
      this.estado = "Baixando...";
      this.api.downloadPDF().subscribe((res) => {
        let url = window.URL.createObjectURL(res);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'Download pdf';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        this.estado = "Download CV";
      });
    }
  }
}
