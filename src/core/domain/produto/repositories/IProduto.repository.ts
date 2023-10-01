import { Produto } from "../entities/produto.entity";

interface IProdutoRepository {
  save(produto: Produto): void;
}

export { IProdutoRepository };
