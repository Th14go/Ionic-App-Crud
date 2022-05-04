import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../categorias/categorias.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Produtos } from 'src/app/core/models/produtos.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
})
export class ProdutoCadastroComponent implements OnInit {

  title: 'Cadastro de Produto';

  produto = new Produtos();
  // cardapioModel: ICardapioModel = {
  //   categoria: '',
  //   nome: '',
  //   preco: null,
  //   descricao: ''
  // }
  id: string;

  categorias = [];

  constructor(
    private toast: ToastService,
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.carregarCategorias();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.carregarProdutos(this.id);
    }
  }
  async carregarCategorias() {
    this.categorias = await this.categoriaService.getAll();
  }

  async carregarProdutos(id: string) {
    try {
      const produto = await this.produtoService.getById(id);
      this.produto = {
        id: produto.id,
        categoria: produto.categoria,
        descricao: produto.descricao,
        valor: produto.valor
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Erro ao carregar produto');
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: Produtos;
      if (this.id) {
        result = await this.produtoService.update(this.id, this.produto);
      } else {
        result = await this.produtoService.create(this.produto);
        console.log(this.produto);
      }

      if (result) {
        console.log(result);
        this.toast.showSucess('Produto cadastrado com sucesso');
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o produto');
    }
  }

  get editando() {
    return Boolean(this.produto.id);
  }
}
