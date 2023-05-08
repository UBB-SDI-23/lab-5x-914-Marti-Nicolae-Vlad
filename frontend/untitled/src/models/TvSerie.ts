import {Payment} from "./Director";

export interface TvSerie{

    id?: number;
    title: string;
    director: Payment;
    year_published: number;
    cast: string;
    rating: number;


}