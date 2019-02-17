
import { Injectable } from '@angular/core';
import { Appareil } from '../models/Appareil';
import { Subject } from 'rxjs/Subject';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class AppareilsService {

    appareils$ = new Subject<Appareil[]>();

    appareilsList: Appareil[] = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Télévision',
            description: [
                'Dimensions: 40 pouces',
                'Consommation: 22 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Ordinateur',
            description: [
                'Marque: fait maison',
                'Consommation: 500 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        }
    ];

    addAppareil(appareil: Appareil) {
        this.appareilsList.push(appareil);
        this.emitAppareils();
    }

    emitAppareils() {
        this.appareils$.next(this.appareilsList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').set(this.appareilsList).then(
            (data: DataSnapshot) => {
              resolve(data);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
    
      retrieveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').once('value').then(
            (data: DataSnapshot) => {
              this.appareilsList = data.val();
              this.emitAppareils();
              resolve('Données récupérées avec succès !');
            }, (error) => {
              reject(error);
            }
          );
        });
      }
}
