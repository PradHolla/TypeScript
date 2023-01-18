abstract class TakePhoto {
    constructor(
        public model: string, 
        public filter: string) {
    }
    abstract getSepia(): void
    getReelTime(): number{
        // Some calculation
        return 10
    }
}



class Instagramm extends TakePhoto {
    constructor(
        public model: string,
        public filter: string,
    ){
        super(model, filter)
    }
    getSepia() {
        console.log('sepia')
    }
}

const insta = new Instagramm('Nikon', 'Sepia')
insta.getReelTime()