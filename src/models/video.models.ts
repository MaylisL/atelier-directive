export class Video {
    title: string;
    imageSrc: string;
    nbOfEpisodes: number;
    categories: string[];

    constructor(title: string, imageSrc: string, nbOfEpisodes: number, categories: string[]) {
        this.title = title;
        this.nbOfEpisodes = nbOfEpisodes;
        this.categories = categories;
        this.imageSrc = imageSrc;
    }

}