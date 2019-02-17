export class Appareil {
    name: string;
    description: string[];
    isOn: boolean;
    startTime: string;
    endTime: string;

    constructor(name: string) {
        this.description = [];
        this.name = name;
        this.isOn = false;
        this.startTime="";
        this.endTime="";
    }
}