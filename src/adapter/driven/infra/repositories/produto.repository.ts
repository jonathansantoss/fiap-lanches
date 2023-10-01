import { Produto } from "../../../../core/domain/produto/entities/produto.entity";
import { IProdutoRepository } from "../../../../core/domain/produto/repositories/IProduto.repository";

class ProdutoRepository implements IProdutoRepository {
  save(produto: Produto): void {
    throw new Error("Method not implemented.");
  }
}

export { ProdutoRepository };
