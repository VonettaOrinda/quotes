export class Quotes {
    id:number;
    quote:string;
    author:string;
    upvotes: number;
    downvotes:number;

    constructor(id: number, quote: string,author: string,upvotes: number, downvotes: number){
        this.id=id;
        this.upvotes=upvotes;
        this.downvotes=downvotes;
        this.quote=quote;
        this.author=author;


    }
    
}
