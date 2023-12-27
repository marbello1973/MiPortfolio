import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('sliderContainer') sliderContainer: ElementRef | undefined;

  constructor(private cdr: ChangeDetectorRef){}

  cards = [
    {image: '../../../assets/project/gymgo.png', text:'Card uno'},
    {image: '../../../assets/project/rick.png', text:'Card dos'},
    {image: '../../../assets/project/paises.png', text:'Card tres'},
  ]

  currentIdex: number = 0;
  cardWidth: number = 0;

  ngAfterViewInit(): void {
    this.cardWidth = this.sliderContainer?.nativeElement.offsetWidth; 
    this.cdr.detectChanges() 

  }

  get translateX(): string{
    return `translateX(${-this.currentIdex * this.cardWidth}px)`;
  }

  nextSlide():void{
    this.currentIdex = (this.currentIdex + 1) % this.cards.length
  }

  prevSlide():void{
    this.currentIdex = (this.currentIdex - 1 + this.cards.length) % this.cards.length
  }

}
