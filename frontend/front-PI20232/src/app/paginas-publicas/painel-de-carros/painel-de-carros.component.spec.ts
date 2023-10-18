import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeCarrosComponent } from './painel-de-carros.component';

describe('PainelDeCarrosComponent', () => {
  let component: PainelDeCarrosComponent;
  let fixture: ComponentFixture<PainelDeCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelDeCarrosComponent]
    });
    fixture = TestBed.createComponent(PainelDeCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
