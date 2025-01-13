export class Genre {
    gid: number;
    genre_name: string;

    constructor(
        gid: number,
        genre_name: string,
    ) {
        this.gid = gid;
        this.genre_name = genre_name;
    }
}
