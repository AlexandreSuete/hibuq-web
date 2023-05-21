import { Component, HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  layouts: string[] = ['first-layout', 'second-layout', 'third-layout', 'fourty-layout']; // Add more layouts as needed
  layoutAtual: string = this.layouts[0];
  public isMobile: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollHeight = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const scrollCount = Math.floor(scrollHeight / screenHeight);
    this.layoutAtual = this.layouts[scrollCount] || this.layouts[0];
  }

  constructor() { }

  ngOnInit(): void {
    this.isMobile = this.detectMobile();
  }

  public onKeyUp(event: any): void {
    console.log(event);
  }

  public detectMobile(): boolean {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  }

}
