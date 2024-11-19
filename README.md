# Automato Celular (AC)

## REGRAS
- Menos de 2 viznhos - MORRE
- 2 ou 3 vizinhos - VIVE
- 3 vizinhos - NASCE
- Mais de 3 vizinhos - MORRE

## Formula posições e Ordem de análise (Mapeamento)
- Cima ESQUERDA | x - 16
- Cima CENTRO | x - 15
- Cima DIREITA | x - 14
- Esquerda | x - 1
- POSIÇÃO DO ITEM | x
- Direita | x + 1
- Baixo ESQUERDA | x + 14
- Baixo CENTRO | x + 15
- Baixo DIREITA | x + 16

### Posições que não existem
- Cima | Se o X for entre 0 e 14
- Esquerda | Se o X for igual a 0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210
- Direita | 14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 164, 179, 194, 209, 224
- Baixo | Se o X for entre 210 e 224
- Não existem quadrados menores do que 0 e nem maior que 224