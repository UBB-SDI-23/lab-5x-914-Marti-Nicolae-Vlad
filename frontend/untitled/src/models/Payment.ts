import {TvSerie} from "./TvSerie";
import {Actor} from "./Actor";

export interface Payment{
    id?: number;
    actor: Actor;
    tv_serie: TvSerie;
    salary: number;
    days_worked: number;

    actor_name: string;
    tvSerie_title: string;
}