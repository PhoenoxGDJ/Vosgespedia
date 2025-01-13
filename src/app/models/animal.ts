export class Animal {
    //décalration des propriétés du model Video
  anim_id : number;
  anim_name : string;
  anim_habitat : string;
  anim_alim : string;
  anim_taille : number;
  anim_poids : number;
  anim_rarity : string;
  anim_image : string;
    //permet d'initialiser une instance de Video
    constructor(
        anim_id : number,
        anim_name : string,
        anim_habitat : string,
        anim_alim : string,
        anim_taille : number,
        anim_poids : number,
        anim_rarity : string,
        anim_image : string,
    ) {
        this.anim_id = anim_id;
        this.anim_name = anim_name;
        this.anim_habitat = anim_habitat;
        this.anim_alim = anim_alim;
        this.anim_taille = anim_taille;
        this.anim_poids = anim_poids;
        this.anim_rarity = anim_rarity;
        this.anim_image = anim_image;
    }
    }