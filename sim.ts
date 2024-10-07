interface Smartphone {
    credito: number;
    numeroChiamate: number;
}

class User implements Smartphone {
    credito: number;
    numeroChiamate: number;
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }

    ricarica(importo: number): void {
        this.credito += importo;
    }

    chiamata(minuti: number) {
        const costoChiamata = 0.20 * minuti;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        } else {
            console.log("Non hai abbastanza soldi sfigato");
        }
    }

    chiama404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}