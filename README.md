
# Criando uma API em poucos minutos em Node.js com STRAPI

## 1 - Softwares necessários

Neste tutorial eu não pretendo cobrir como instalar os seguintes softwares que serão necessários:
* [MongoDb](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/en/)

## 2 - Primeiros passos

### 2.1 - Instalando o CLI

Para começar, vamos instalar o STRAPI globalmente

```shell
npm install strapi@alpha -g
```

### 2.2 - Iniciando o projeto

Assim que estiver finalizado, vamos criar um projeto novo com o nome "trivia"

```shell
strapi new trivia
```

<img src="./docs/images/00-installing.jpg" width="400" />

Conforme a imagem acima, a sequencia de escolhas acima foi a seguinte:
1. Choose your instalation type:
	* Custom (manual settings)
1. Choose your main database
	* MongoDB
1. Database name
	* trivia
1. Host:
	* 127.0.0.1
1. +srv connection
	* false
1. Port (it will be ignored if you enable +srv)
	* 27017
1. Username
	* vazio
1. Password
	* vazio
1. Authentication database (Maybe "admin" or blank)
	* vazio
1. Enable SSL connection
	* false


### 2.3 - Rodando o servidor localmente

```shell
cd trivia;
strapi start;
```

Se tudo deu certo, abra seu navegador e entre em http://localhost:1337/admin

### 2.4 - Configurando o administrador

<img src="./docs/images/01-login.jpg" width="600" />

1. Defina o "login" / apelido do seu usuário, que será usado para autenticação sempre
1. Insira uma senha
1. Confirme a senha
1. Adicione um email para validar seu usuário
1. Click em "ready to start" para finalizar a instalação


## 3 - Conhecendo a STRAPI

### 3.1 - Painél de Administração

<img src="./docs/images/02-painel-administrador.jpg" width="600" />

Essa é a principal visualização do CMS STRAPI.
<br />
Nele existe um menu de navegação à esquerda onde encontraremos tudo que vamos precisar neste tutorial.

## 4 - Adicionando Tipos de Conteúdo

* No painél de administração, no menu à esquerda, click em "Content Type Builder"


<img src="./docs/images/03-tipos-conteudo.jpg" width="600" />


* Em "Content Type Builder" (imagem acima), click em "Add Content Type" no canto superior direito 


<img src="./docs/images/04-novo-tipo-conteudo.jpg" width="600" />


* Uma modal irá aparecer, requisitando que dê um nome ao seu novo "Content Type"
* Feito isso, click em "Save"


<img src="./docs/images/05-tipo-conteudo-vazio.jpg" width="600" />


* A tela vai mudar, a modal vai sumir e agora click em "Add new Field"


<img src="./docs/images/06-adicionar-campos.jpg" width="600" />

* Uma extensa lista com tipos de campos vai aparecer. Para este tutorial, vou abordar inicialmente campos do tipo "String" e "Text"
* Click em "String"


<img src="./docs/images/07-adicionar-string.jpg" width="600" />


* Na nova janela, coloque como nome do campo "trivia"
* E depois na aba "Advanced Settings"


<img src="./docs/images/08-adicionar-string-avancado.jpg" width="600" />


* Na nova aba, marque:
  * "Required Field"
  * "Unique Field"
  * Minimum Length
    * 5
* Click em "+ Add new field"


<img src="./docs/images/06-adicionar-campos.jpg" width="600" />


* Voltamos a tela de tipos de campos, click em "Text"

<img src="./docs/images/07-adicionar-string.jpg" width="600" />


* Na nova janela, coloque como nome do campo "descricao"
* E depois na aba "Advanced Settings"


<img src="./docs/images/09-adicionar-texto-avancado.jpg" width="600" />


* Na nova aba, marque:
  * "Display as a WYSIWYG"
* Click em "Continue"


<img src="./docs/images/10-tipo-conteudo-cheio.jpg" width="600" />


* Agora que temos dois campos para o nosso tipo de conteúdo, click em "Save" no canto superior direito.


<img src="./docs/images/13-adicionar-conteudo.jpg" width="600" />

<img src="./docs/images/14-nova-entrada.jpg" width="600" />

