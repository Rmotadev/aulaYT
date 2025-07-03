const animacoes = {
  pular: {
    nome: "Pular",
    css: `
      @keyframes pular {
        0% { transform: translateY(0); }
        50% { transform: translateY(-50px); }
        100% { transform: translateY(0); }
      }
      .animacao {
        animation: pular 1s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 50%;
      margin: 50px auto;
      animation: pular 2s infinite;
    }

    `
  },

  sumir: {
    nome: "Sumir",
    css: `
      @keyframes sumir {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
      .animacao {
        animation: sumir 1s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 50%;
      margin: 50px auto;
      animation: sumir 2s infinite;
    }

    `
  },

  deslizar: {
    nome: "Deslizar",
    css: `
      @keyframes deslizar {
        0% { transform: translateX(-100); }
        50% { transform: translateX(100px); }
        100% { transform: translateX(-100px); }
      }
      .animacao {
        animation: deslizar 2s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 50%;
      margin: 50px auto;
      animation: deslizar 2s infinite;
    }

    `
  },

  girar: {
    nome: "Girar",
    css: `
      @keyframes girar {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .animacao {
        animation: girar 1s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 10%;
      margin: 50px auto;
      animation: girar 1s infinite;
    }

    `
  },

  escalar: {
    nome: "Escalar",
    css: `
      @keyframes escalar {
        0% { transform: scale(1); }
        50% { transform: scale(1.5); }
        100% { transform: scale(1); }
      }
      .animacao {
        animation: escalar 1s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 50%;
      margin: 50px auto;
      animation: escalar 2s infinite;
    }

    `
  },

  pulsar: {
    nome: "Pulsar",
    css: `
      @keyframes pulsar {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
      .animacao {
        animation: pulsar 1s infinite;
      }

    .elemento-animado {
      width: 100px;
      height: 100px;
      background-color: #07831c;
      border-radius: 50%;
      margin: 50px auto;
      animation: pulsar 2s infinite;
    }

    `
  }

}

function encontrarAnimacao(texto) {
  const textoLower = texto.toLowerCase();

  const palavrasChave = {
    pular: ["pular", "salto", "pule", "pulando"],
    sumir: ["sumir", "desaparecer", "desaparecendo"],
    deslizar: ["deslizar", "escorregar", "escorregando"],
    girar: ["girar", "rotação", "girando"],
    escalar: ["escalar", "crescer", "diminuir"],
    pulsar: ["pulsar", "bater", "batendo"]
  };

  for (const [animação, palavras] of Object.entries(palavrasChave)) {
    for (const palavra of palavras) {
      if (textoLower.includes(palavra)) {
        return animação;
      }
    }
  }
  return null;
}

function cliqueiNoBotao() {
  let textInput = document.querySelector(".input-text")
  let button = document.querySelector(".button-animacao")
  let areaCodigo = document.querySelector(".area-codigo")
  let areaAnimation = document.querySelector(".area-animation")
  let botaoAnimacao = document.querySelector(".button-animacao")

  let textoUsuario = textInput.value.trim()
  if (textoUsuario === "") {
    alert("Por favor, digite sua animação!")
    return;
  }

  let tipoAnimacao = encontrarAnimacao(textoUsuario);
  let animacaoSelecionada = animacoes[tipoAnimacao];

  areaCodigo.innerHTML = `<pre style="color: #51ff60; 
  font-family: 'Courier New', monospace; font-size: 12px; 
  line-height: 1.4; overflow-y: auto;
  height: 100%;">${animacaoSelecionada.css}</pre>`;

  areaAnimation.innerHTML = ''

  areaAnimation.innerHTML = `
 <div style="text-align: center;">
 <h3 style="color: #010436; margin-bottom:
  20px;">${animacaoSelecionada.nome}</h3>
 <style>${animacaoSelecionada.css}</style> <!-- Injeta o CSS da
  animação diretamente aqui -->
 <div class="elemento-animado"></div> <!-- O elemento que será
  animado -->
 <p style="color: #666; margin-top: 20px; font-size:
  14px;">Baseado em: "${textoUsuario}"</p>
 </div>
 `;

  let textoOriginal = botaoAnimacao.textContent;
  botaoAnimacao.textContent = "Gerando animação...";
  botaoAnimacao.disabled = true;

  setTimeout(() => {
    botaoAnimacao.textContent = textoOriginal;
    botaoAnimacao.disabled = false;

  }, 2000);


  console.log("Usuário digitou: " + textoUsuario);
  areaCodigo.textContent = "Você digitou: " + textoUsuario;
  areaAnimation.textContent = "Preparando animação para: " + textoUsuario;

}

document.addEventListener("DOMContentLoaded", function () {
  let textInput = document.querySelector(".input-text");
  textInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      cliqueiNoBotao(); // Chama a função de clique no botão
    }
  }
  )
})

document.addEventListener("DOMContentLoaded", function () {
  let textInput = document.querySelector(".input-text");
  textInput.placeholder = "Faça um elemento animado com: pular, sumir, deslizar, girar, escalar ou pulsar.";
});

function mostraAnimacoesDisponiveis() {
  let lista = "Animations disponíveis:\n";
  for (const [key, value] of Object.entries(animacoes)) {
    lista += `- ${value.nome}\n`;
  }
  alert(lista + "\nDigite palavras relacionadas para ativar cada animação.");
}