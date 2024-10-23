import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNavesComponent } from './listado-naves.component';

describe('ListadoNavesComponent', () => {
  let component: ListadoNavesComponent;
  let fixture: ComponentFixture<ListadoNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoNavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
