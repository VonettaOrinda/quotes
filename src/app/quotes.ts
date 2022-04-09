export class Quotes {
    id:number;
    quote:string;
    upvotes: number;
    downvotes:number;

    constructor(id: number, quote: string,upvotes: number, downvotes: number){
        this.id=id;
        this.upvotes=upvotes;
        this.downvotes=downvotes
        this.quote=quote;


    }
    
}
