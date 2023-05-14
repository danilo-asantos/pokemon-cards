/* Alterar tema da página ao clicar no botao 
objetivo 1;
    passo 1 - trazer o botao-referencia para o js
    passo 2 - trazer o elemento a ser alterado [body]
    passo 3 - alterar a clase do body para se encaixar com o css
    passo 4 - adicionar um evento para trocar o botao de sol > lua
*/
const botaoAlterarTema = document.getElementById('botao-alterar-tema');
const body = document.body;
const imagemBotao = document.querySelector('#imagem-botao');


botaoAlterarTema.addEventListener('click', function(){
    const modoEscuroAtivo = body.classList.contains('modo-escuro');

    if (modoEscuroAtivo) {
        body.classList.remove('modo-escuro');
        imagemBotao.setAttribute('src', 'src/img/sun.png');
    } else{
            body.classList.add('modo-escuro');
            imagemBotao.setAttribute('src', 'src/img/moon.png');
        }

})


