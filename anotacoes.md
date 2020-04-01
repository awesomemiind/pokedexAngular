binds
  - interpolação = {}
  - state propriety = [src]
  - (input) = "nome = $event.target.value
  -[(ngModel)]="nome"

  Adicionar classe de acordo com bind
  - [classe.Nomeclasse]="algo for verdadeiro"

  Adicionar style inline com bind
  - [style.display]="classeEscolhida.value == 1 ? 'none' : 'block'"