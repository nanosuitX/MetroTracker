var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(/*public http: HttpClient*/ sqlite) {
        this.sqlite = sqlite;
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.createDb = function () {
        return this.sqlite.create({
            name: 'metrotracker.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createCardTable = function () {
        console.log('creating card table');
        this.createDb().then(function (db) {
            db.executeSql('create table IF NOT EXISTS cardDetail(cardNo INTEGER PRIMARY KEY,type VARCHAR(32),balance INTEGER,lastRecharge VARCHAR(32))', {});
        }).then(function (val) { console.log('product table created ' + val); }).catch(function (err) { console.log('table not created ' + err); });
    };
    DatabaseProvider.prototype.createCredDebTable = function () {
        console.log('creating trip table');
        this.createDb().then(function (db) {
            db.executeSql('create table IF NOT EXISTS credDeb(tripTime INTEGER PRIMARY KEY,type INTEGER,cardNo INTEGER,source VARCHAR(32),destination VARCHAR(32),tripCharge INTEGER)', {});
        }).then(function (val) { console.log('product table created ' + val); }).catch(function (err) { console.log('table not created ' + err); });
    };
    DatabaseProvider.prototype.entryCredDeb = function (trip) {
        this.createDb().then(function (db) {
            db.executeSql("INSERT OR REPLACE INTO credDeb() VALUES('"
                + trip.tripTime + "','"
                + trip.type + "','"
                + trip.cardNo + "','"
                + trip.source + "','"
                + trip.destination + "','"
                + trip.tripCharge + "')", {})
                .then(function (val) { console.log('executed sql ' + val); })
                .catch(function (err) { console.log(err); });
        });
    };
    DatabaseProvider.prototype.saveCard = function (card) {
        this.createDb().then(function (db) {
            db.executeSql("INSERT OR REPLACE INTO cardDetail() VALUES ('"
                + card.cardNo + "','"
                + card.type + "','"
                + card.balance, {});
        });
    };
    DatabaseProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [SQLite])
    ], DatabaseProvider);
    return DatabaseProvider;
}());
export { DatabaseProvider };
//# sourceMappingURL=database.js.map