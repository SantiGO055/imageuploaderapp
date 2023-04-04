import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {

    var prueba = db.object('a')
    // db.list('a').push({ 'asd': 'asdasdasdadsa' })
    // prueba.set({ 'asd123': 'aaaaaaa¿aaaa' }) // crea o updatea en caso de que exista
    prueba.valueChanges().subscribe(val => console.log(val))
  }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}
