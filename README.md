## Nlw-setup-web

**Introdução**

Esse projeto foi desenvolvido pelo time da rocketseat no programa nlw. O intuito do projeto é poder ter um local onde podemos armazenar certos hábitos e ir monitorando dia após dia, tendo a opção de poder estar sempre marcando o hábito quando concluímos.

**Funcionalidades**

As funcionalidades do back-end são a dividas em rotas, onde cada uma tem sua função.

### GET
As rotas de busca de dados são dividas em duas:
-A rota `/day` consiste em buscar os hábitos que são possíveis naquele dia.
- A rota `/summary` consiste em buscar quantos hábitos são possíveis naquele dia e quantos foram construídos.

### POST
A rota `/habits` tem sua finalidade em criar novos habítos, seus dados são enviados pelo body, são eles:

{
	"title": "Estudar",
	"weekDays": [0, 1, 2, 3, 4, 5, 6]
}

title é uma string que referência o título do hábito.

WeekDays é uma array de números com os dados que referência os dias da semana, sendo 0 como domingo e 6 como sábado.

### PATCH

A rota `/habits/:id/toggle` atualiza o hábito em si atráves do id. Sua função é servir para você tanto marcar o hábito como feito como também desmarca-lo.

Para acessar essa rota, é necessário ter o id do hábito.

Exemplo: `/habits/2c22aa60-5752-47e1-8475-e850cb48c627/toggle`

**Tecnologias utilizadas**

- NodeJs v.18.13.0
- TypeScript

Bibliotecas

- Fastify => Para subir o servidor
- Prisma => Para a criação do banco de dados
- Dayjs => Para a lidar com datas
- zod => Para a autenticação dos dados
