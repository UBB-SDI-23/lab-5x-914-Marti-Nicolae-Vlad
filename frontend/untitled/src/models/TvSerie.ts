import {Actor} from "./Director";

export interface TvSerie{

    id?: number;
    title: string;
    director: Actor;
    year_published: number;
    cast: string;
    rating: number;


}