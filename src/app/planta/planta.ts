export class Planta {
    id?: number;
    nombre_comun?: string;
    nombre_cientifico?: string;
    tipo?: string;
    altura?: number;
    clima?: string;
    sustrato_siembra?: string;
  
    constructor(
      id: number,
      nombreComun: string,
      nombreCientifico: string,
      tipo: string,
      altura: number,
      clima: string,
      sustratoSiembra: string
    ) {
      this.id = id;
      this.nombre_comun = nombreComun;
      this.nombre_cientifico = nombreCientifico;
      this.tipo = tipo;
      this.altura = altura;
      this.clima = clima;
      this.sustrato_siembra = sustratoSiembra;
    }
  }