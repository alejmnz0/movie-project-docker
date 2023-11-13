import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActorResponse } from "../models/actor.interface";

@Injectable({
    providedIn: 'root'
})
export class ActorService {

    constructor(private http: HttpClient) { }

    getActorById(id: number): Observable<ActorResponse> {
        return this.http.get<ActorResponse>('https://api.themoviedb.org/3/person/' + id + '?api_key=67e90c6f74bc6faf6aebc08470495925&key=GYOQBfT8UU4&language=es')
    }

}