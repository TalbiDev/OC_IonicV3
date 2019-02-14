export class Appareil {
    name: string;
    description: string[];
    isOn: boolean;

    constructor(name: string) {
        this.name = name;
        this.isOn = false;
    }
}