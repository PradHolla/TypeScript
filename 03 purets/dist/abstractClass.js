"use strict";
class TakePhoto {
    constructor(model, filter) {
        this.model = model;
        this.filter = filter;
    }
    getReelTime() {
        // Some calculation
        return 10;
    }
}
class Instagramm extends TakePhoto {
    constructor(model, filter) {
        super(model, filter);
        this.model = model;
        this.filter = filter;
    }
    getSepia() {
        console.log('sepia');
    }
}
const insta = new Instagramm('Nikon', 'Sepia');
insta.getReelTime();
