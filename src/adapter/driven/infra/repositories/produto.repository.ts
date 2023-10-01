import { IProdutoRepository } from "../../../../core/applications/ports/IProduto.repository";

class ProdutoRepository implements IProdutoRepository {
  save(produto: IProduto): void {
    throw new Error("Method not implemented.");
  }
}

export { ProdutoRepository };
