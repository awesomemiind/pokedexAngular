binds
  - interpolação = {}
  - state propriety = [src] -> Significa que o valor desta propriedade sera uma variavel da classe
  - (input) = "nome = $event.target.value
  -[(ngModel)]="nome" 

  Adicionar classe de acordo com bind
  - [classe.Nomeclasse]="algo for verdadeiro"

  Adicionar style inline com bind
  - [style.display]="classeEscolhida.value == 1 ? 'none' : 'block'"

Diretivas servem para tratar algum evento do elemento

@Input
@Output

:host
::ng-deep

Pipe trata o output

Listeners de eventos

@Hostbind
@hostListeners

setValue(): Serve para alterar todos os campos do formulário;

patchValue(): Serve para alterar apenas alguns campos do formulário;

resetForm(): Reseta o formulário inteiro.

elementRef
Renderer2

Animation angular
