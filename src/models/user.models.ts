import { Video } from "./video.models";

export class User {
    name: string;
    isVip: boolean;
    videoList: Video[];

    constructor(name: string, isVip: boolean, videoList: Video[] ) {
        this.name = name;
        this.isVip = isVip;
        this.videoList = videoList;

    }

}