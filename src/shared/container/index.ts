import { container } from "tsyringe";
import { ProdutoRepository } from "../../adapter/driven/infra/repositories/produto.repository";
import { IProdutoRepository } from "../../core/domain/produto/repositories/IProduto.repository";

container.registerSingleton<IProdutoRepository>(
  "ProdutoRepository",
  ProdutoRepository
);
