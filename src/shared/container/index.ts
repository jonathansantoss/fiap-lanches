import { container } from "tsyringe";
import { IProdutoRepository } from "../../core/applications/ports/IProduto.repository";
import { ProdutoRepository } from "../../adapter/driven/infra/repositories/produto.repository";

container.registerSingleton<IProdutoRepository>(
  "ProdutoRepository",
  ProdutoRepository
);
