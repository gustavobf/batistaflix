import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import CadastroVideo from '../src/pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
import imprimePagina404 from './pages/Erros/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={imprimePagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);