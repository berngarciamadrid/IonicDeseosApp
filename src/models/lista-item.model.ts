
export class ListaItem {

    desc: string;
    completado: boolean;

    constructor( desc:string) {

        this.desc = desc;
        // Las tareas al crearlas no están completadas
        this.completado = false;

    }
}