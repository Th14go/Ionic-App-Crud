import { Categorias } from "./categorias.model";

export class Produtos {
    id: number;
    descricao: string;
    valor: number;
    categoria = new Categorias();
}