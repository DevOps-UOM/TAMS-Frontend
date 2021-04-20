import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'
import * as  GeoFire from 'geofire'
import { BehaviorSubject, Observable } from 'rxjs'
import {Coordinates,LocationModel} from '../../models/realtimedb.model'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  // dbRef: any;
  // geoFire: any;
  // liveLocations:Observable<any[]>;
  // hits = new BehaviorSubject([]);

  private dbPath='/locations';

  locationsRef:AngularFireList <LocationModel>;

  constructor(private db: AngularFireDatabase) {

    this.locationsRef = db.list(this.dbPath);

   // console.log("Geo called")
    // this.dbRef = this.db.list('locations');
    // this.geoFire = new GeoFire.GeoFire(this.dbRef).ref();      
    // this.liveLocations = this.dbRef.valueChanges();  

  }

  getAll(): AngularFireList<LocationModel> {
    return this.locationsRef;
  }

  create(location: LocationModel): any {
    return this.locationsRef.push(location);
  }

  update(key: string, value: any): Promise<void> {
    return this.locationsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.locationsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.locationsRef.remove();
  }

  get(key:string){
    return this.db.database.ref('/locations/'+key)
      .once('value')
      .then(snapshot=>{
        return snapshot.val();
      })
  }

  updateOnDisconnect(key:string): Promise<void>{
    return this.db.object('/locations/'+key).query.ref.onDisconnect().remove()
  }
  // setLocation(key: string, coords: Array<number>) {

  //   console.log(key)
  //   this.geoFire.set(key, coords)
  //     .then(_ => console.log('location updated'))
  //     .catch(err => console.log("Location setting Error : " + err))
  // }

  

  // getLocations()  {
  //   this.liveLocations.subscribe(res=>{
  //     return res;
  //   })
  //   //var ref = this.geoFire.ref("users/ada");
  //   // this.geoFire.once("value")
  //   //   .then(function (snapshot) {
  //   //     var locations = snapshot.child("locations").val(); // {first:"Ada",last:"Lovelace"}
  //   //     console.log(locations);
  //   //   });

  //   //  .on('key_entered',(key,location,distance)=>{
  //   //     let hit={
  //   //       location:location,
  //   //       distance:distance
  //   //     }
  //   //     let currentHits = this.hits.value
  //   //     currentHits.push(hit);
  //   //     this.hits.next(currentHits);
  //   //  })
  // }

}

