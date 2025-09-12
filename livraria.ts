interface ILivro {
  titulo: string;
  ano: number;
  isbn: number;
  preço: number;
  autor: string;
  editora: string;
  estoque: number;

  atualizarEstoque(estoque: number): void;
  exibirDados(): void;
}

class LivroEbook implements ILivro {
  titulo: string;
  ano: number;
  isbn: number;
  preço: number;
  autor: string;
  editora: string;
  estoque: number;
  private tamArquivo: number;

  constructor(
    autor: string,
    titulo: string,
    ano: number,
    isbn: number,
    preço: number,
    editora: string,
    estoque: number,
     tamArquivo: number
  ) {
    this.autor = autor;
    this.titulo = titulo;
    this.ano = ano;
    this.isbn = isbn;
    this.preço = preço;
    this.editora = editora;
    this.estoque = estoque;
    this.tamArquivo = tamArquivo;
  }

  atualizarEstoque(estoque: number): void {
    this.estoque += estoque;
    console.log(`Estoque atualizado para: ${this.estoque}`);
  }

  exibirDados(): void {
    console.log(`--- Ebook ---`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Preço: R$ ${this.preço}`);
    console.log(`Editora: ${this.editora}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Tamanho do arquivo: ${this.tamArquivo}MB`);
  }
}

class LivroFisico implements ILivro {
  titulo: string;
  ano: number;
  isbn: number;
  preço: number;
  autor: string;
  editora: string;
  estoque: number;

  constructor(
    autor: string,
    titulo: string,
    ano: number,
    isbn: number,
    preço: number,
    editora: string,
    estoque: number
  ) {
    this.autor = autor;
    this.titulo = titulo;
    this.ano = ano;
    this.isbn = isbn;
    this.preço = preço;
    this.editora = editora;
    this.estoque = estoque;
  }

  atualizarEstoque(estoque: number): void {
    this.estoque += estoque;
    console.log(`Estoque atualizado para: ${this.estoque}`);
  }

  exibirDados(): void {
    console.log(`--- Livro Físico ---`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Preço: R$ ${this.preço}`);
    console.log(`Editora: ${this.editora}`);
    console.log(`Estoque: ${this.estoque}`);
  }
}

class GerenciarLivro {
  private livros: ILivro[] = [];

  getLivros(): ILivro[] {
    return this.livros;
  }

  adicionarLivros(livro: ILivro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado com sucesso!`);
  }

  excluirLivro(isbn: number): void {
    this.livros = this.livros.filter((livro) => livro.isbn !== isbn);
    console.log(`Livro com ISBN ${isbn} removido!`);
  }

  venderLivros(isbn: number): void {
    const livro = this.livros.find((l) => l.isbn === isbn);
    if (livro && livro.estoque > 0) {
      livro.atualizarEstoque(-1);
      console.log(`Venda realizada: "${livro.titulo}"`);
    } else {
      console.log(
        `Livro com ISBN ${isbn} está fora de estoque ou não cadastrado.`
      );
    }
  }

  listarLivros(): void {
    console.log("Livros disponíveis na livraria:");
    this.livros.forEach((livro) => livro.exibirDados());
  }
}

const gerenciar = new GerenciarLivro();

const ebook1 = new LivroEbook(
  "Clarice Lispector",
  "Perto do Coração Selvagem",
  1943,
  123456,
  29.9,
  "Rocco",
  10,
  5
);

const fisico1 = new LivroFisico(
  "Machado de Assis",
  "Dom Casmurro",
  1899,
  789101,
  49.9,
  "Record",
  5
);

gerenciar.adicionarLivros(ebook1);
gerenciar.adicionarLivros(fisico1);

gerenciar.listarLivros();

gerenciar.venderLivros(123456);
gerenciar.venderLivros(789101);

gerenciar.excluirLivro(123456);
gerenciar.listarLivros();
