import { Component, OnInit } from '@angular/core';

import { PokeapiService } from './../../services/pokeapi.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pokeFilter = '';
  currentPokemon = null;

  get pokemonList() {
    return this.PokeapiService.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.pokeFilter.toLowerCase()) != -1
    })
  }

  get pokeSprite(){
    const number = this.currentPokemon.number
    return `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png` 
  }

  constructor(
    private http: HttpClient,
    private PokeapiService: PokeapiService
  ){}

  ngOnInit(): void {
    this.PokeapiService.listAll()
  }

  selectPokemon(poke) {
    this.currentPokemon = poke;
  }

}
