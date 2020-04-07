import { Injectable, Attribute } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private url = 'https://pokeapi.co/api/v2/';
  constructor(
    private http: HttpClient
    ) { }

  listAll(){
    this.http.get<PokeApiResponse>(`${this.url}pokemon?offset=0&limit=155`)
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

  getPokemon(number: number): Observable<any> {
    return this.http.get(`${this.url}pokemon/${number}`);
  }

  getType(types: Array<any>) {
    let typeNames = [];
    types.forEach(type => {
      typeNames.push(type.type.name)
    });

    return typeNames; 
  }

  getAttributes(attributes) {
    const attrList = [];
    const allTypes = ['speed','special-defense','special-attack','defense','attack','hp'];
    allTypes.forEach(typeName => {
      let typeMatch = attributes.find(attribute => {
        return attribute.stat.name == typeName
      })

      attrList[typeName.replace(/[-]+/g,'')] = typeMatch.base_stat
    });

    return attrList
  }
}
