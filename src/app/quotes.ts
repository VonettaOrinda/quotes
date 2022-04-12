export class Quotes {
    id:number;
    quote:string;
    author:string;
    date:string;

    upvotes: number;
    downvotes:number;

    constructor( id: number, quote: string,author: string,quoted:string,date:string,quoty:string,upvotes:number, downvotes: number){
        this.id=id;
        this.upvotes=upvotes;
        this.downvotes=downvotes;
        this.quote=quote;
        this.author=author;
        this.date=date;


    }
    
}
