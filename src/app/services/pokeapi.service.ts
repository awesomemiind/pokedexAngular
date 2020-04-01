import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface PokeApiResponse {
  count: number,
  next: string,
  previous: any,
  results: any[]
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  pokemonList =[];
  
  constructor(
    private http: HttpClient
    ) { }

  listAll(){
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=155';

    this.http.get<PokeApiResponse>(url)
    .subscribe(
      response => {
        let count = 1;
        response.results.forEach(pokemon => {
          pokemon.number = count;
          count++;
        });
        this.pokemonList = response.results;
      }
    )
  }
}
