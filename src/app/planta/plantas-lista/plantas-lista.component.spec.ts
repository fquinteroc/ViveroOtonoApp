import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantasListaComponent } from './plantas-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

describe('Pruebas Componente PlantasListaComponent', () => {
  let component: PlantasListaComponent;
  let fixture: ComponentFixture<PlantasListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantasListaComponent],
      providers: [PlantaService]
    })
  .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 10; i++) {
      const planta = new Planta(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener 11 <tr> elementos', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(11)
  });

  it('Debe tener 10 <td> elementos con planta.nombre_comun', () => {
    fixture.whenStable().then(() => {
      const tds = fixture.debugElement.queryAll(By.css('td'));
      tds.forEach((td, i) => {
        expect(td.nativeElement.textContent).toContain(component.plantas[i].nombre_comun);
      });
    });
  }); 

  it('Debe tener 10 <td> elementos con planta.tipo', () => {
    fixture.whenStable().then(() => {
      const tds = fixture.debugElement.queryAll(By.css('td'));
      tds.forEach((td, i) => {
        expect(td.nativeElement.textContent).toContain(component.plantas[i].tipo);
      });
    });
  });
  
  it('Debe tener 10 <td> elementos con planta.clima', () => {
    fixture.whenStable().then(() => {
      const tds = fixture.debugElement.queryAll(By.css('td'));
      tds.forEach((td, i) => {
        expect(td.nativeElement.textContent).toContain(component.plantas[i].clima);
      });
    });
  });
});