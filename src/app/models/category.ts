export class Category {
    //décalration des propriétés du model Video
  caid : number;
  category_name : string;
    //permet d'initialiser une instance de Video
    constructor(
        caid : number,
        category_name : string,
    ) {
        this.caid = caid;
        this.category_name = category_name;
    }
    }