const fs = require('fs');

// a) Ler os arquivos Json
function lerArquivosJson(arquivo1, arquivo2) {
  try {
    const data1 = JSON.parse(fs.readFileSync(arquivo1, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(arquivo2, 'utf-8'));
    return [data1, data2];
  } catch (error) {
    console.error('Erro na leitura dos arquivos JSON:', error.message);
    return [];
  }
}

// b) Reverter substituições de caracteres nos nomes de veículos e marcas
function reverterSubstituicoes(data) {
  for (const registro of data) {
    for (const propriedade in registro) {
      if (registro.hasOwnProperty(propriedade) && typeof registro[propriedade] === 'string') {
        registro[propriedade] = registro[propriedade].replace(/æ/g, 'a').replace(/ø/g, 'o');
      }
    }
  }
}

// c) Corrigir vendas
function corrigirVendas(data) {
  for (const registro of data) {
    if (registro.vendas) {
      registro.vendas = Number(registro.vendas); // Transformar string em número
    }
  }
}

// d) Exportar um arquivo JSON com o banco corrigido
function exportarArquivoJson(data, nomeArquivo) {
  fs.writeFileSync(nomeArquivo, JSON.stringify(data, null, 2));
}

// Exemplo de uso:
const arquivo1 = 'broken_database_1.json';
const arquivo2 = 'broken_database_2.json';

// Ler os arquivos JSON
const [data1, data2] = lerArquivosJson(arquivo1, arquivo2);

// Reverter substituições de caracteres nos nomes de veículos e marcas
reverterSubstituicoes(data1);
reverterSubstituicoes(data2);

// Corrigir vendas
corrigirVendas(data1);
corrigirVendas(data2);

// Exportar os arquivos JSON corrigidos
exportarArquivoJson(data1, 'corrigido_database_1.json');
exportarArquivoJson(data2, 'corrigido_database_2.json');

console.log("Feito Com Sucesso!!");
