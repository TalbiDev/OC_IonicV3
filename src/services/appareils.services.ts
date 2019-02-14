
import { Injectable } from '@angular/core';
import { Appareil } from '../models/Appareil';

@Injectable()
export class AppareilsService {
    appareilsList: Appareil[] = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173 kWh/an'
            ],
            isOn: true
        },
        {
            name: 'Télévision',
            description: [
                'Dimensions: 40 pouces',
                'Consommation: 22 kWh/an'
            ],
            isOn: true
        },
        {
            name: 'Ordinateur',
            description: [
                'Marque: fait maison',
                'Consommation: 500 kWh/an'
            ],
            isOn: true
        }
    ];
}
