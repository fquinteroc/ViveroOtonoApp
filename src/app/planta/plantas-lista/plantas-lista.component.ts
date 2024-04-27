import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-lista.component.html',
  styleUrls: ['./plantas-lista.component.css']
})
export class PlantasListaComponent implements OnInit {

  plantas: Array<Planta> = [];
  interior_plantas: number = 0;
  exterior_plantas: number = 0; 
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.interior_plantas = plantas.filter(planta => planta.tipo === "Interior").length;
      this.exterior_plantas = plantas.filter(planta => planta.tipo === "Exterior").length;
    });
  }
 
  ngOnInit() {
    this.getPlantas();
  }

}
