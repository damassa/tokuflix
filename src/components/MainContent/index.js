import React from 'react';
import { Grid } from '@material-ui/core';
import InfoCardLeft from '../InfoCardLeft';
import InfoCardRight from '../InfoCardRight';

import useStyles from './styles';

const MainContent = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12} className={classes.MainContentTitle}>
                Sobre
              </Grid>
              <InfoCardLeft
                ContentTitle="O que é Tokusatsu?"
                ContentText="Tokusatsu é um termo em japonês para filmes ou séries live-action (com atores reais) que fazem um uso forte de efeitos especiais."
                ContentImage="http://1.bp.blogspot.com/-79p3Xwkbj-Y/VmNTErK31kI/AAAAAAAABv8/su3UM2EBiCQ/s1600/img-legacy-2014.png"
              />
              <InfoCardRight
                ContentTitle="O que é a plataforma?"
                ContentText="É uma página web, onde o usuário se depara com a explicação do produto, e a opção de se registrar para ter acesso ao acervo de séries."
                ContentImage="https://static.wikia.nocookie.net/ultra/images/3/38/UltramanTiga.png"
              />
              <InfoCardLeft
                ContentTitle="De onde veio World of Tokusatsu?"
                ContentText="Pesquisando sites com a mesma proposta, tiveram poucas referências de plataforma. A partir daí, veio o desejo de se ter um lugar de fácil acesso, simples e intuitivo para quem gosta e quer assistir."
                ContentImage="http://1.bp.blogspot.com/-0ugxRDfQT5w/TosrA6zsbZI/AAAAAAAAARM/_epdQWZxjuI/s1600/samurai.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContent;
