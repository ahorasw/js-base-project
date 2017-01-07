import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console*/
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Gerando versao minificada para produção. Isso pode demorar algum tempo...'));

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){
    return jsonStats.warnings.map(warnings => console.log(chalk.red(warnings)));
  }

  console.log(`Webpack stats: ${stats}`);

  //Se chegou aqui gerou a applicacao corretamente
  console.log(chalk.green('Aplicacao gerada para producao e gravada em /dist'));
  return 0;
});

