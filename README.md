# queryparamsuri

## O que a lib faz?

A Lib faz filtro de pesquisa com retorno de url para tabelas

## Por que devo usá-lo?

- Retorna de uma forma mais fácil o filtro que você deseja com URL
- Fácil de usar e prático

## Instalação

```bash
yarn add queryparamsuri
# or
npm i queryparamsuri --save
```

## Usage

Suponha que temos uma querystring com um valor de:

``ts
"?page=1&limit=15";

```

```

## Utilização da Library

```ts
import { queryParams, queryURI } from "queryparamsuri";

const App = () => {
    const { searchURI, page, limit, query } = queryParams({
        params: ['status', 'type'], // adiciona mais query da sua forma
        limit: 20, // adiciona o limit de página na URI por default é 15
        page: 1, // adiciona a paginação na URI por default é 1
    });

    //query = { status: '', type: '' } sendo retorno em object

    useEffect(() => {
        // ... info
    }, [searchURI]); // eslint-disable-line

    const handlePage = (value: any) => {
        const params = queryURI({
            name: 'page',
            value,
        });
        //params = ?page=1
        // add history.push(params)
    };

    const handleLimit = (event: SelectChangeEvent) => {
        const params = queryURI({
            name: 'limit',
            value: event.target.value,
        });
        //params = ?page=1&limit=15
    }

    const handleSearchObject = (values: any) => {
        // example values {
        //     status: 'ex',
        //     type: 'ex2
        // }

        const params = queryObjectURI(values)

        // params = ?status=ex&type=ex2
        // add history.push(params)
    }

    return(
        //...info
    )
}
```

## Exemplo de uso

Utilizando a library QueryParamsUri
Open [use-queryparamsuri-example](https://github.com/fabionmoraes/use-queryparamsuri-example)
