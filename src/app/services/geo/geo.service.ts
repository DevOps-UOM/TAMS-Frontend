import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database'
import * as  GeoFire from 'geofire'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef: any;
  geoFire: any;
  liveLocations:Observable<any[]>;
  hits = new BehaviorSubject([]);

  constructor(private db: AngularFireDatabase) {
   // console.log("Geo called")
    this.dbRef = this.db.list('locations');
    this.geoFire = new GeoFire.GeoFire(this.dbRef).ref();      
    this.liveLocations = this.dbRef.valueChanges();  

  }

  setLocation(key: string, coords: Array<number>) {
    console.log(key)
    this.geoFire.set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log("Location setting Error : " + err))
  }

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
