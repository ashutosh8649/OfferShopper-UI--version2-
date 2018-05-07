import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsHeaderComponent } from './products-header.component';
import { OffersService } from '../../../services/offers.service';

describe('ProductsHeaderComponent', () => {
  let component: ProductsHeaderComponent;
  let fixture: ComponentFixture<ProductsHeaderComponent>;
  let service: OffersService;

   beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ ProductsHeaderComponent ],
     imports: [
       BrowserModule,
       HttpModule,
       HttpClientModule,
       RouterTestingModule
     ],
     providers:[{
       provide : [ OffersService]
     }]
   })
   .compileComponents();
 }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('should call the loadOffers method', async(() => {
   fixture.detectChanges();
   spyOn(component,'loadOffers');
   expect(component.loadOffers).toHaveBeenCalledTimes(0);
 }));

});
