// * Declarando global e vazia
// na primeira implementação, essa variável é declarada local.
let texto;

// * Cria o gráfico de forma global
// na primeira implementação, essa variável é declarada local.
const grafico = anychart.tagCloud();

// Atualiza o gráfico com os dados do texto
document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.getElementById("texto");
  const botaoEnviar = document.getElementById("enviar-texto");

  botaoEnviar.addEventListener("click", function () {
    // Atualiza a variável `texto` com o valor da textarea, separado por palavras
    texto = textarea.value.split(" ").join(" ") + " ";

    // Atualiza os dados do gráfico e redesenha
    grafico.data(texto, {
      mode: "by-word", // modo de análise de texto
      maxItems: 16, // número máximo de itens
      minLength: 5, // tamanho mínimo das palavras
    });

    // título do gráfico
    grafico.title("Palavras-chave do seu texto");

    // container do gráfico
    grafico.container("container");

    // ângulo das palavras
    grafico.angles([0, 0, 0]);

    // espaçamento entre as palavras
    grafico.textSpacing(10);

    // cor de fundo do gráfico
    grafico.background().fill("#000000");

    // desenha o gráfico
    grafico.draw();
  });
});
