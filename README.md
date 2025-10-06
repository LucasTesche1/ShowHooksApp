# ShowHooksApp

## Descritivo
Aplicativo desenvolvido para exemplificar o uso de Hooks do React no React Native: useState, useEffect, useRef e useContext

## Estrutura de Apresentação (onde cada componente foi utilizado)
- **Troca tema**: useContext e useEffect.
- **Input com foco automático**: useRef
- **Contador**: useState

## O que cada hook faz?

🔹 Hooks (conceito geral)

  Hooks são funções especiais do React que permitem “ligar” (hook) recursos do React (como estado e ciclo de vida) a componentes funcionais.
  Antes deles, só componentes de classe podiam ter estado e efeitos colaterais.
  Em resumo: Hooks deixam os componentes funcionais mais poderosos e reutilizáveis.


🔹 useState

  Serve para criar variáveis de estado dentro de um componente funcional.
  
  É o “coração” da reatividade no React.
  
  Armazena valores reativos


🔹 useEffect

  Usado para efeitos colaterais, ou seja, coisas que acontecem fora do fluxo de renderização (ex: buscar dados, manipular DOM, timers, etc).
  
  Pode ser configurado para rodar:
    
  - toda vez que o componente renderiza,
  
  - só uma vez (ao montar),
  
  - ou quando algo específico muda.

    

🔹 useRef

  Cria uma referência mutável que não causa re-renderização quando muda.
  
  Muito usado para acessar elementos do DOM diretamente.

🔹 useContext

  Serve para compartilhar dados entre componentes sem precisar passar props manualmente em cada nível.
  
  É usado junto com createContext().

## Como rodar
1. `npm install`
2. `npx expo start`


