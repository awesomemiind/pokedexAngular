import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators'

import { PokeapiService } from './../../services/pokeapi.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  isAlive = true;
  pokemonNumber: number;
  pokemon: any = {};
  pokemonTypes: any = [];
  pokemonAttributes: any = [];
  
  constructor(  
    private activedRoute: ActivatedRoute,
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params: any) => {
        this.pokemonNumber = parseInt(params['number'], 10);
        this.getPokemon()
      })
  }
  
  ngOnDestroy(): void {
    this.isAlive = false;
  }
  
  getPokemon(){
    this.pokeapi.getPokemon(this.pokemonNumber)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(response => {
        this.pokemon = response
        this.pokemonTypes = this.pokeapi.getType(response.types)
        this.pokemonAttributes = this.pokeapi.getAttributes(response.stats)
        console.log(this.pokemonAttributes)
    })
  }

}
