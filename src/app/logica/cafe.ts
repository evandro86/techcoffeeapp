import { ClassificacaoDegustacao } from './classificacao-degustacao';
import { Localizacao } from './localizacao';

export class Cafe {
    // Propriedades
    nome: string;
    local: string;
    tipo: string;
    localizacao: Localizacao;
    classificacao: number;
    notas: string;
    classificaDegustacao: ClassificacaoDegustacao;
}
