//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Trips } from '../../models/Trips';
import { CardDetails } from '../../models/CardDetails';



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class DatabaseProvider {

  constructor(/*public http: HttpClient*/public sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  createDb(): Promise<SQLiteObject> {
        return this.sqlite.create({
            name: 'metrotracker.db',
            location: 'default'
        })
    }

    createCardTable() {
        console.log('creating card table');
        this.createDb().then((db: SQLiteObject) => {
            db.executeSql('create table IF NOT EXISTS cardDetail(cardNo INTEGER PRIMARY KEY,type VARCHAR(32),balance INTEGER,lastRecharge VARCHAR(32))', {})
        }).then((val) => {console.log('product table created '+val)}).catch(err => { console.log('table not created '+err)})  

    }

    createCredDebTable(){
    	console.log('creating trip table');
        this.createDb().then((db: SQLiteObject) => {
            db.executeSql('create table IF NOT EXISTS credDeb(tripTime INTEGER PRIMARY KEY,type INTEGER,cardNo INTEGER,source VARCHAR(32),destination VARCHAR(32),tripCharge INTEGER)', {})
        }).then((val) => {console.log('product table created '+val)}).catch(err => { console.log('table not created '+err)})  

    }

    entryCredDeb(trip:Trips){
    	this.createDb().then((db:SQLiteObject) =>{
    		db.executeSql("INSERT OR REPLACE INTO credDeb(tripTime,type,cardNo,source,destination,tripCharge) VALUES('"
    			+trip.tripTime+"','"
    			+trip.type+"','"
    			+trip.cardNo+"','"
    			+trip.source+"','"
    			+trip.destination+"','"
    			+trip.tripCharge+"')"
    			,{})
    		.then((val)=>{console.log('executed sql '+val)})
    		.catch(err => {console.log(err)})
    	})
    }

    saveCard(card:CardDetails){
    	this.createDb().then((db:SQLiteObject)=>{
    		db.executeSql("INSERT OR REPLACE INTO cardDetail(cardNo,type,balance,lastRecharge) VALUES ('"
    			+card.cardNo+"','"
    			+card.type+"','"
    			+card.balance+"','"
    			+card.lastRecharge+"')"
    			,{})
    		.then((val)=>{console.log('executed sql '+val)})
    		.catch(err => {console.log(err)})
    	})
    }

    getCards():Promise<any>{
    	return new Promise((resolve,reject)=>{
    		this.createDb().then((db:SQLiteObject)=>{
    			db.executeSql("Select * from cardDetail",{})
    			.then((value) => resolve(value))
               	.catch(err => reject(err))
    		})
    	})
    }

    getCredDeb():Promise<any>{
    	return new Promise((resolve,reject)=>{
    		this.createDb().then((db:SQLiteObject)=>{
    			db.executeSql("Select * from credDeb",{})
    			.then((value) => resolve(value))
               	.catch(err => reject(err))
    		})
    	})
    }

    updateCard(card:CardDetails){
    	
    }

}
