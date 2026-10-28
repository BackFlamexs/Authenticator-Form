AGENTS.md — Authentication-Form
1. Visão geral do projeto

Nome: Authentication-Form
Tipo: Single Page Application (SPA)
Objetivo: Desenvolver uma interface de autenticação com telas de Sign In e Sign Up, utilizando componentes reutilizáveis, validação de formulários e design responsivo.

O projeto deve reproduzir fielmente as imagens de referência fornecidas, respeitando a composição visual, as cores, a tipografia, os espaçamentos, as dimensões e os elementos decorativos.

A aplicação não terá backend nesta atividade. O envio dos formulários deverá realizar validações locais e registrar os dados necessários para inspeção no console, sem persistir credenciais.

Objetivos principais
Criar telas de Sign In e Sign Up com alternância sem recarregar a página.
Utilizar React com JavaScript e Tailwind CSS.
Construir a interface a partir de componentes reutilizáveis.
Implementar inputs controlados, validações e mensagens de erro.
Implementar estados de loading durante o envio simulado.
Garantir acessibilidade básica e responsividade.
Manter uma estrutura de arquivos organizada e de fácil manutenção.
Seguir as referências visuais como especificação obrigatória.
2. Stack tecnológica
Tecnologias obrigatórias
React: composição da interface e gerenciamento de estado.
JavaScript (ES6+): lógica e comportamento da aplicação.
Vite: servidor de desenvolvimento e ferramenta de build.
Tailwind CSS: estilização utilitária.
@tailwindcss/vite: integração oficial do Tailwind CSS com Vite.
HTML5: estrutura semântica.
CSS3: recursos complementares quando necessários.
Regras de implementação
Utilizar componentes funcionais React.
Utilizar Hooks do React, principalmente useState, quando necessário.
Utilizar JavaScript, sem TypeScript nesta atividade.
Utilizar Tailwind CSS como solução principal de estilização.
Não introduzir bibliotecas adicionais sem necessidade justificada.
Não utilizar backend, banco de dados ou autenticação real.
Não armazenar senhas ou outros dados sensíveis em localStorage, sessionStorage ou cookies.
Manter a configuração de Vite e Tailwind compatível com as versões instaladas no projeto.
Configuração do Tailwind CSS

Utilizar a integração atual com @tailwindcss/vite.

O arquivo vite.config.js deverá registrar os plugins do Vite e do Tailwind CSS conforme a configuração oficial da versão instalada.

O arquivo src/index.css deverá importar o Tailwind CSS usando:

css
@import "tailwindcss";


Não utilizar configurações antigas do Tailwind CSS sem verificar se são necessárias e compatíveis com a versão adotada.

3. Arquitetura da aplicação

A aplicação deverá seguir uma arquitetura baseada em composição, separando componentes visuais reutilizáveis, componentes específicos de autenticação, layout e controle de página.

Estrutura de diretórios
text
auth-forms-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AuthBadge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── SocialButton.jsx
│   │   ├── auth/
│   │   │   ├── AuthDivider.jsx
│   │   │   ├── SignInForm.jsx
│   │   │   ├── SignUpForm.jsx
│   │   │   └── SocialLogin.jsx
│   │   └── layout/
│   │       └── BackgroundEffects.jsx
│   ├── pages/
│   │   └── AuthPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── AGENTS.md


Não criar arquivos adicionais sem necessidade. Caso a evolução do projeto exija novos componentes, manter a organização por responsabilidade.

Responsabilidade de cada arquivo
src/main.jsx
Inicializar a aplicação React.
Renderizar o componente App.
Importar os estilos globais.
Utilizar React.StrictMode quando apropriado.
src/App.jsx
Servir como componente raiz da aplicação.
Renderizar AuthPage.
Evitar concentrar regras de autenticação ou lógica de formulários neste arquivo.
src/pages/AuthPage.jsx

É o componente responsável por controlar a tela de autenticação exibida.

Responsabilidades:

Manter o estado que determina a tela ativa.
Alternar entre Sign In e Sign Up sem recarregar a página.
Exibir o indicador superior direito correspondente à tela ativa.
Renderizar AuthBadge e BackgroundEffects.
Renderizar SignInForm ou SignUpForm.
Preservar a separação entre estado de navegação e estado dos formulários.

O estado de navegação deverá pertencer a AuthPage, por exemplo:

jsx
const [mode, setMode] = useState("signin");


Os valores aceitos deverão ser definidos de forma consistente, como "signin" e "signup".

A alternância deverá ocorrer por callbacks ou props, sem manipulação direta do DOM.

src/components/ui/AuthBadge.jsx
Renderizar a etiqueta AUTHENTICATION UI.
Utilizar o formato pill, com fundo amarelo translúcido e borda sutil.
Permanecer visível nas duas telas.
Ser independente dos formulários.
src/components/ui/Input.jsx

Componente reutilizável para todos os campos de entrada.

Responsabilidades:

Exibir label e campo.
Aceitar propriedades como id, name, type, label, value, onChange, placeholder, error, required, autoComplete e disabled.
Associar corretamente o label ao input.
Exibir mensagens de erro quando fornecidas.
Aplicar estados visuais de foco, erro e desabilitado.
Permitir a personalização necessária sem duplicar sua implementação.

Os campos deverão ser controlados pelos formulários que os utilizam.

Não manter o estado dos campos dentro de Input.

src/components/ui/Button.jsx

Componente reutilizável para ações principais.

Responsabilidades:

Renderizar um botão HTML semântico.
Aceitar propriedades como type, children, onClick, disabled, loading e className, quando necessárias.
Exibir um indicador de carregamento durante o envio.
Impedir envios repetidos enquanto estiver carregando.
Preservar o padrão visual amarelo da referência.
Expor corretamente o estado desabilitado.

O componente deverá permitir reutilização sem duplicação dos estilos de botão nos formulários.

src/components/ui/SocialButton.jsx

Componente reutilizável para os botões de autenticação social.

Responsabilidades:

Receber o provedor, o conteúdo visual e a função de clique por props.
Manter dimensões, espaçamento, borda e cores consistentes.
Ser acessível por teclado.
Exibir o nome do provedor em um atributo acessível.
Não simular uma autenticação social real.

Os botões sociais deverão funcionar apenas como elementos demonstrativos nesta atividade, sem prometer integração com serviços externos.

src/components/auth/AuthDivider.jsx
Renderizar o separador horizontal.
Exibir o texto OR CONTINUE WITH.
Manter linhas decorativas dos dois lados.
Preservar a hierarquia visual discreta da referência.
src/components/auth/SocialLogin.jsx
Agrupar os componentes SocialButton.
Centralizar os botões sociais.
Controlar o espaçamento entre os botões.
Evitar repetir a estrutura dos botões em cada formulário.
src/components/auth/SignInForm.jsx

Componente de composição responsável pela tela de entrada.

Deverá combinar:

Título Welcome Back.
Texto de apoio Sign in to continue your journey.
Campo de e-mail.
Campo de senha.
Opção Remember me.
Link Forgot password?.
Botão principal Sign In.
AuthDivider.
SocialLogin.
Texto final com ação Sign Up.

Responsabilidades adicionais:

Manter seu próprio estado de campos.
Validar os dados antes do envio.
Controlar erros e estado de loading.
Registrar os dados necessários para inspeção no console.
Receber por props a função para alternar para Sign Up.

O link de recuperação de senha deverá ser apenas demonstrativo, pois não haverá fluxo de recuperação real.

src/components/auth/SignUpForm.jsx

Componente de composição responsável pelo cadastro.

Deverá combinar:

Título Create Account.
Texto de apoio Join our community today.
Campo Full Name.
Campo de e-mail.
Campo de senha.
Botão principal Create Account.
AuthDivider.
SocialLogin.
Texto final com ação Sign In.

Responsabilidades adicionais:

Manter seu próprio estado de campos.
Validar nome, e-mail e senha.
Controlar erros e estado de loading.
Registrar os dados necessários para inspeção no console.
Receber por props a função para alternar para Sign In.
src/components/layout/BackgroundEffects.jsx
Renderizar os dois glows decorativos.
Manter os efeitos independentes do conteúdo dos formulários.
Posicionar os elementos de forma absoluta ou fixa, conforme necessário.
Impedir que os efeitos interfiram com os cliques.
Evitar rolagem horizontal provocada pelos elementos decorativos.
Não substituir os glows por um gradiente global diferente da referência.
4. Fluxo de composição

A árvore de componentes deverá seguir esta organização:

text
App
└── AuthPage
    ├── BackgroundEffects
    ├── AuthBadge
    ├── Indicador da tela atual
    └── Formulário ativo
        ├── SignInForm
        │   ├── Input
        │   ├── Button
        │   ├── AuthDivider
        │   └── SocialLogin
        │       └── SocialButton
        └── SignUpForm
            ├── Input
            ├── Button
            ├── AuthDivider
            └── SocialLogin
                └── SocialButton


A árvore representa a estrutura conceitual: somente o formulário correspondente ao modo ativo deverá ser renderizado.

Regras de estado
AuthPage controla exclusivamente a alternância entre telas.
SignInForm controla seus próprios campos, erros e loading.
SignUpForm controla seus próprios campos, erros e loading.
Input recebe valores e callbacks por props.
Button recebe estado e callbacks por props.
Os componentes visuais não devem conhecer detalhes internos dos formulários.
Não utilizar estado global ou Context API para dados que pertencem a um único formulário.

Como apenas o formulário ativo será renderizado, os valores preenchidos poderão ser reiniciados quando o usuário trocar de tela. Isso é aceitável para esta atividade.

5. Design system obrigatório

As imagens fornecidas são a principal referência visual do projeto.

O resultado deverá reproduzir a identidade visual original, evitando alterações arbitrárias de cor, proporção, espaçamento ou hierarquia.

5.1. Artboard de referência
Dimensões de referência: 1440 × 1024 px.
Fundo escuro com detalhes amarelos e azuis.
Composição centralizada horizontalmente.
Card posicionado na região central da tela.
Elementos superiores posicionados nos cantos.
Glows decorativos parcialmente fora dos limites da viewport.

As medidas de referência deverão orientar a implementação em desktop, mas não poderão provocar overflow em telas menores.

5.2. Paleta de cores
Elemento	Cor
Background principal	#000814
Card	#00152E ou tom visual equivalente à referência
Campos de entrada	#001B38 ou tom visual equivalente à referência
Bordas azuis	#0B3155
Amarelo principal	#FFD60A
Títulos	#FFE44D
Texto principal	#F1F5F9
Texto secundário	#9FB3CC
Glow amarelo	Amarelo com baixa opacidade
Glow azul	Azul intenso com baixa opacidade

As cores secundárias poderão receber pequenos ajustes para corresponder às imagens, desde que a identidade visual original seja preservada.

O fundo principal deverá permanecer #000814.

Não substituir o fundo por um gradiente genérico.

5.3. Background e efeitos luminosos

O fundo deverá utilizar a cor sólida #000814, com dois glows decorativos independentes.

Glow amarelo:

Dimensão de referência: 520 × 520 px.
Posição aproximada: left: -120px; top: -130px.
Blur aproximado: 100px.
Cor amarela ou amarelo-oliva com opacidade reduzida.
Efeito suave, sem bordas visíveis.

Glow azul:

Dimensão de referência: 600 × 600 px.
Posicionamento parcial fora do canto inferior direito.
Blur aproximado: 120px.
Cor azul profunda com intensidade suficiente para criar contraste.
Efeito suave, sem competir visualmente com o formulário.

Implementar os glows com elementos decorativos separados, por exemplo, utilizando div, posicionamento absoluto, border-radius: 50% e filter: blur(...).

Os glows deverão:

Utilizar pointer-events-none.
Ficar atrás do conteúdo.
Não alterar a cor de fundo principal.
Não gerar rolagem horizontal.
Manter a aparência da referência em diferentes resoluções.
5.4. Etiqueta superior esquerda

Texto obrigatório:

AUTHENTICATION UI

Características:

Posição de referência: left: 56px; top: 48px.
Formato pill.
Borda arredondada de 999px.
Fundo amarelo translúcido.
Borda amarela discreta.
Texto amarelo.
Tipografia pequena, aproximadamente 12px.
Peso de fonte médio ou semibold.

A etiqueta faz parte da interface e deverá estar presente desde a primeira versão visual estática.

Não removê-la durante a implementação dos formulários.

5.5. Indicador superior direito

O canto superior direito deverá exibir:

SIGN IN, na tela de entrada.
SIGN UP, na tela de cadastro.

Características:

Posição aproximada de right: 56px; top: 48px.
Texto pequeno.
Peso semibold.
Cor azul-acinzentada clara.
Sem fundo ou borda chamativa.

O indicador deverá acompanhar o estado controlado por AuthPage.

5.6. Card principal

Dimensões de referência:

Largura: 480px.
Padding horizontal: 30px.
Padding superior: 34px.
Padding inferior: 30px.
Border radius: 24px.
Espaçamento vertical entre blocos: aproximadamente 18px.

Características visuais:

Fundo azul-marinho muito escuro.
Borda azul sutil.
Cantos arredondados.
Sombra discreta.
Contraste suficiente em relação ao background.
Conteúdo alinhado conforme a referência.

A largura deverá ser limitada em telas pequenas:

width: 100%; max-width: 480px;

O card deverá utilizar uma solução equivalente a box-sizing: border-box, para que os paddings estejam incluídos na largura total.

Alturas de referência:

Sign In: aproximadamente 594px.
Sign Up: aproximadamente 652px.

Essas alturas servem como referência visual, não como valores rígidos. Erros, mensagens de validação, carregamento ou adaptações responsivas poderão alterar a altura natural do card.

Não utilizar altura fixa que corte o conteúdo.

5.7. Tipografia

Utilizar Inter como família tipográfica principal.

A fonte deverá ser carregada por um método confiável, preferencialmente com uma alternativa de fallback apropriada.

Exemplo:

css
font-family: "Inter", sans-serif;


Hierarquia tipográfica:

Títulos principais: aproximadamente 30px, peso bold.
Textos de apoio: aproximadamente 14px.
Labels: 13px.
Conteúdo dos campos: aproximadamente 14px.
Botão principal: aproximadamente 14px, peso semibold ou bold.
Textos auxiliares: aproximadamente 12px.
Indicadores superiores: aproximadamente 11–12px.

O título principal deverá utilizar amarelo vivo e ser o destaque visual do card.

5.8. Inputs

Dimensões obrigatórias de referência:

Altura: 56px.
Border radius: 12px.
Espaçamento entre label e campo: 8px.
Label: 13px.

Características:

Fundo azul-escuro.
Borda azul sutil.
Texto claro.
Placeholder azul-acinzentado.
Padding horizontal confortável.
Transição discreta de borda e foco.

Estados visuais:

Padrão: borda azul sutil.
Foco: borda azul mais evidente e indicador de foco acessível.
Erro: borda em tom vermelho, com mensagem associada ao campo.
Desabilitado: menor destaque visual e interação bloqueada.

Os estilos deverão ser implementados uma única vez em Input.jsx, com variações controladas por props e classes condicionais.

5.9. Botão principal

Dimensões obrigatórias:

Altura: 56px.
Largura: 100%.
Border radius: 12px.

Estilo:

Fundo #FFD60A.
Texto #000814.
Peso semibold ou bold.
Contraste elevado.
Sombra amarela discreta.
Transição suave em hover e focus.

Estados:

Normal.
Hover.
Focus visível.
Loading.
Disabled.

Durante o loading, o botão deverá indicar visualmente o processamento e impedir submissões repetidas.

5.10. Botões sociais

Dimensões de referência:

Largura: 56px.
Altura: 56px.
Border radius: 14px.
Espaçamento horizontal: 14px.

Características:

Fundo azul-escuro.
Borda azul sutil.
Conteúdo amarelo.
Alinhamento central.
Hover discreto.
Focus visível.

A referência utiliza três botões sociais com as letras G, A e f.

Preservar esses elementos visuais. Não adicionar logotipos ou provedores extras sem necessidade.

Os botões são demonstrativos, sem autenticação externa real.

5.11. Divisor social

Texto:

OR CONTINUE WITH

Características:

Tipografia pequena.
Cor azul-acinzentada.
Linhas horizontais discretas.
Espaçamento equilibrado.
Centralização horizontal.

O componente deverá ser reutilizado nos dois formulários.

5.12. Textos inferiores

Na tela Sign In:

Don't have an account? Sign Up

Na tela Sign Up:

Already have an account? Sign In

Os textos auxiliares deverão utilizar a cor secundária, enquanto as ações de alternância deverão utilizar amarelo.

As ações deverão ser implementadas como elementos interativos acessíveis e não como textos meramente decorativos.

6. Regras específicas para Sign In e Sign Up
Sign In

Campos:

Email Address.
Password.

Elementos adicionais:

Remember me.
Forgot password?
Botão Sign In.
Separador social.
Botões sociais.
Ação Sign Up.

O formulário deverá reproduzir a hierarquia visual da referência, sem adicionar campos desnecessários.

Sign Up

Campos:

Full Name.
Email Address.
Password.

Elementos adicionais:

Botão Create Account.
Separador social.
Botões sociais.
Ação Sign In.

Não adicionar campos de confirmação de senha ou outros campos não especificados, salvo se houver uma alteração explícita dos requisitos.

7. Gerenciamento de estado e validação
7.1. Inputs controlados

Todos os campos deverão utilizar estado React.

Exemplo conceitual:

jsx
const [formData, setFormData] = useState({
  email: "",
  password: "",
});


A atualização dos campos deverá utilizar onChange, mantendo o valor sincronizado com o estado.

Não utilizar inputs predominantemente não controlados.

7.2. Validação de Sign In

Validar:

E-mail obrigatório.
Formato válido do e-mail.
Senha obrigatória.

Exibir mensagens claras e específicas para cada erro.

7.3. Validação de Sign Up

Validar:

Nome obrigatório.
Nome com conteúdo significativo após remover espaços nas extremidades.
E-mail obrigatório.
Formato válido do e-mail.
Senha obrigatória.
Comprimento mínimo de senha de 8 caracteres.

Não exigir validações adicionais que não tenham sido solicitadas.

7.4. Comportamento dos erros
Exibir mensagens junto aos respectivos campos.
Utilizar aria-invalid quando o campo estiver inválido.
Associar a mensagem de erro ao campo por aria-describedby.
Limpar ou atualizar os erros quando o usuário corrigir os valores, conforme a estratégia adotada.
Não utilizar apenas cores para comunicar erros.
Manter a interface utilizável quando as mensagens aumentarem a altura do card.
7.5. Estado de loading

Durante a submissão:

Ativar o estado de loading do botão.
Impedir múltiplos envios simultâneos.
Manter os dados do formulário durante o processamento.
Exibir feedback visual.
Encerrar o loading após a conclusão da operação simulada.

Como não existe backend, não simular uma autenticação real ou redirecionamento para uma área privada.

7.6. Inspeção no console

O envio válido deverá permitir a inspeção dos dados durante o desenvolvimento.

Exemplo conceitual:

jsx
console.info("Sign In form submitted", {
  email: formData.email,
});


Para Sign Up, registrar os dados não sensíveis necessários para inspeção.

Nunca registrar a senha no console.

Nunca armazenar a senha em localStorage, sessionStorage ou qualquer mecanismo de persistência.

Não exibir mensagens afirmando que o usuário foi autenticado ou cadastrado com sucesso em um servidor inexistente.

8. Responsividade

A interface deverá funcionar em desktop, tablet e dispositivos móveis.

Desktop
Preservar o layout da referência.
Manter o card com largura máxima de 480px.
Centralizar o card horizontalmente.
Posicionar a etiqueta e o indicador nos cantos superiores.
Preservar os efeitos de iluminação.
Tablet
Manter o card centralizado.
Reduzir as margens laterais quando necessário.
Preservar os paddings internos sempre que possível.
Evitar sobreposição entre o conteúdo e os elementos superiores.
Mobile
Utilizar padding horizontal de aproximadamente 16px no contêiner.
Fazer o card ocupar a largura disponível, respeitando as margens.
Preservar uma largura máxima de 480px.
Permitir rolagem vertical quando a altura da viewport for insuficiente.
Impedir overflow horizontal.
Reduzir os glows se necessário, sem eliminá-los arbitrariamente.
Manter todos os campos e botões utilizáveis.
Garantir que os elementos superiores não se sobreponham ao card.
Preservar o contraste e a legibilidade.

Não utilizar altura fixa para centralizar verticalmente o conteúdo em telas pequenas.

O card poderá ficar alinhado ao centro quando houver espaço vertical suficiente, mas deverá permitir rolagem natural quando o conteúdo não couber na viewport.

9. Acessibilidade

Aplicar boas práticas básicas de acessibilidade.

Utilizar elementos HTML semânticos.
Associar labels aos inputs por htmlFor e id.
Garantir navegação por teclado.
Exibir indicadores visíveis de foco.
Utilizar botões com type apropriado.
Utilizar type="email" para o campo de e-mail.
Utilizar type="password" para senha.
Definir autoComplete apropriado, como email, current-password, new-password e name.
Utilizar aria-label ou texto acessível nos botões sociais quando necessário.
Associar erros aos campos.
Não depender apenas de cores para transmitir estados.
Garantir contraste suficiente entre texto e fundo.
Respeitar as preferências de movimento reduzido nas animações decorativas.

Acessibilidade não deverá ser sacrificada para reproduzir detalhes visuais.

10. Padrões de código
Componentização
Criar os componentes básicos antes dos formulários completos.
Reutilizar Input, Button e SocialButton.
Não duplicar estruturas ou estilos em Sign In e Sign Up.
Manter cada componente com uma responsabilidade clara.
Evitar abstrações desnecessárias.
Props
Utilizar nomes de props claros e consistentes.
Passar callbacks para ações de alternância.
Utilizar children quando o conteúdo do componente precisar ser configurável.
Evitar dependências desnecessárias entre componentes.
Utilizar className quando for útil permitir extensões controladas de estilo.
Estilização
Priorizar classes utilitárias do Tailwind CSS.
Evitar estilos inline para regras visuais estáticas.
Centralizar os estilos compartilhados nos componentes correspondentes.
Utilizar CSS global apenas para configurações globais, tipografia, reset e efeitos que precisem de regras específicas.
Evitar duplicação excessiva de classes.
Não introduzir outro framework de estilização.
Organização
Utilizar nomes de componentes em PascalCase.
Utilizar nomes de funções e variáveis em camelCase.
Manter imports organizados.
Remover código não utilizado.
Evitar componentes monolíticos.
Evitar abstrações criadas sem necessidade concreta.
Dependências

Antes de instalar qualquer dependência:

Verificar o package.json.
Verificar se a funcionalidade já pode ser implementada com React, JavaScript e Tailwind CSS.
Preferir as ferramentas já presentes no projeto.
Evitar dependências que não agreguem valor relevante.
11. Ordem obrigatória de implementação

O desenvolvimento deverá seguir esta sequência.

Etapa 1 — Inspeção do projeto
Verificar os arquivos existentes.
Inspecionar package.json.
Verificar a configuração do Vite.
Verificar a integração do Tailwind CSS.
Identificar o que já está implementado.
Preservar configurações úteis e evitar recriar arquivos desnecessariamente.
Etapa 2 — Configuração inicial
Preparar a configuração do Vite.
Configurar @tailwindcss/vite.
Configurar os estilos globais.
Definir a tipografia Inter.
Garantir que a aplicação seja executada corretamente.
Etapa 3 — Base visual estática

Antes de implementar os formulários completos:

Criar o background principal.
Criar os dois glows decorativos.
Criar a etiqueta AUTHENTICATION UI.
Criar o indicador superior direito.
Criar a estrutura do card.
Reproduzir as cores, dimensões e alinhamentos da referência.

Essa etapa deverá estabelecer a identidade visual principal da aplicação.

Etapa 4 — Componentes básicos

Implementar, nesta ordem:

AuthBadge.jsx.
Input.jsx.
Button.jsx.
SocialButton.jsx.

Os componentes deverão ser reutilizáveis e ter estilos consistentes antes de serem utilizados nos formulários.

Etapa 5 — Componentes de autenticação

Implementar:

AuthDivider.jsx.
SocialLogin.jsx.
SignInForm.jsx.
SignUpForm.jsx.

Os formulários deverão compor os componentes básicos, sem duplicar seus elementos visuais.

Etapa 6 — Integração da página

Implementar AuthPage.jsx para:

Controlar o modo ativo.
Renderizar o formulário correto.
Atualizar o indicador superior direito.
Conectar os links de alternância.
Integrar o background e a etiqueta superior.
Etapa 7 — Validação e loading
Implementar inputs controlados.
Implementar as validações.
Exibir erros.
Implementar loading.
Inspecionar os envios válidos no console.
Garantir que nenhuma senha seja persistida ou registrada.
Etapa 8 — Responsividade e acessibilidade
Testar desktop.
Testar tablet.
Testar mobile.
Corrigir overflow.
Validar foco e navegação por teclado.
Validar mensagens de erro e estados desabilitados.
Etapa 9 — Verificação final
Executar a aplicação.
Verificar erros no console e no terminal.
Validar os fluxos de alternância.
Comparar a interface com as imagens de referência.
Corrigir diferenças visuais relevantes.
Verificar se a estrutura de arquivos está organizada.
Atualizar o README quando necessário.

Não avançar diretamente para formulários complexos ignorando os componentes básicos e a estrutura visual.

12. Referências visuais e critérios de fidelidade

As imagens de referência fornecidas pelo usuário deverão ser consultadas durante toda a implementação.

A primeira imagem representa a tela Sign In.

A segunda imagem representa a tela Sign Up.

Prioridades de fidelidade visual
Cor de fundo correta: #000814.
Dois glows decorativos nas posições aproximadas especificadas.
Etiqueta AUTHENTICATION UI no canto superior esquerdo.
Indicador de tela no canto superior direito.
Card azul-escuro com dimensões e cantos arredondados adequados.
Tipografia Inter e títulos amarelos.
Inputs de 56px de altura.
Botão principal amarelo de 56px de altura.
Divisor social e três botões sociais.
Textos auxiliares e ações de alternância.
Espaçamentos e alinhamentos.
Adaptação responsiva sem descaracterizar o design.
Regras de comparação
Comparar Sign In e Sign Up separadamente.
Utilizar o artboard de 1440 × 1024 px como referência principal de desktop.
Verificar dimensões relativas, alinhamentos e espaços vazios.
Não ajustar o layout apenas para que os elementos caibam: preservar a composição visual.
Evitar sombras exageradas, gradientes extras, efeitos neon excessivos e animações chamativas.
Não adicionar ilustrações, ícones ou seções que não existam na referência.
Não remover elementos só porque parecem secundários.
Não sacrificar a responsividade para reproduzir medidas fixas.

As medidas fornecidas são parâmetros de implementação. O objetivo é alcançar uma correspondência visual consistente, considerando as limitações naturais de diferentes resoluções e fontes.

13. Critérios de aceitação

O projeto somente deverá ser considerado concluído quando os critérios abaixo forem atendidos.

Funcionalidade
A aplicação inicia corretamente com Vite.
A tela Sign In é exibida inicialmente.
É possível alternar para Sign Up sem recarregar a página.
É possível voltar para Sign In sem recarregar a página.
O indicador superior direito acompanha a tela ativa.
Todos os inputs são controlados.
Os campos obrigatórios são validados.
E-mails inválidos geram mensagens de erro.
A senha de cadastro respeita o comprimento mínimo definido.
Os erros são exibidos junto aos respectivos campos.
O botão apresenta estado de loading.
Envios repetidos são bloqueados durante o loading.
Os envios válidos podem ser inspecionados no console sem registrar senhas.
Não existe dependência de backend.
Nenhuma senha é persistida no navegador.
Os botões sociais são demonstrativos e não prometem autenticação real.
Arquitetura
Os componentes básicos foram implementados antes dos formulários completos.
Input, Button e SocialButton são reutilizados.
SignInForm e SignUpForm são componentes de composição.
AuthPage controla a alternância entre formulários.
O estado dos campos pertence ao formulário correspondente.
A estrutura de diretórios segue a organização definida.
Não existem duplicações desnecessárias de componentes.
Design
O fundo principal utiliza #000814.
Os dois glows estão presentes.
A etiqueta AUTHENTICATION UI está presente nas duas telas.
O indicador Sign In/Sign Up está correto.
O card mantém proporções próximas às referências.
A tipografia principal é Inter.
Os inputs possuem 56px de altura na referência desktop.
O botão principal possui 56px de altura na referência desktop.
Os botões sociais seguem as dimensões especificadas.
As cores, bordas, raios e espaçamentos respeitam o design system.
A interface não possui elementos decorativos desnecessários.
Responsividade e acessibilidade
A interface funciona em desktop, tablet e mobile.
Não existe overflow horizontal.
O conteúdo pode ser rolado em viewports com pouca altura.
Os campos possuem labels associados.
Os botões podem ser utilizados por teclado.
Os indicadores de foco são visíveis.
Os erros são acessíveis e associados aos campos.
Qualidade
Não existem erros relevantes no console.
Não existem imports ou variáveis inutilizados.
Não existem dependências desnecessárias.
A configuração do Tailwind CSS utiliza @tailwindcss/vite.
O README descreve como instalar e executar o projeto.
14. Instruções permanentes para o agente OpenCode

Ao trabalhar neste projeto, siga estas regras:

Leia este documento antes de implementar ou modificar funcionalidades.
Inspecione a estrutura atual antes de criar ou substituir arquivos.
Trate as referências visuais como requisitos, não como sugestões.
Preserve o escopo da atividade e a stack definida.
Implemente componentes básicos antes dos formulários completos.
Prefira alterações pequenas, organizadas e verificáveis.
Não substitua o design por uma solução genérica de formulário.
Não introduza backend ou autenticação real.
Não armazene, registre ou persista senhas.
Não declare uma tarefa concluída sem verificar o resultado.
Ao encontrar diferenças entre a implementação e as referências, priorize a correção visual.
Se algum detalhe não estiver especificado, adote a solução mais simples que preserve a arquitetura e a identidade visual.
Não altere requisitos explícitos sem necessidade técnica justificada.
Ao concluir uma etapa, informe resumidamente os arquivos modificados, o comportamento implementado e as verificações realizadas.
Resultado esperado

Uma SPA de autenticação responsiva, construída com React, JavaScript, Vite e Tailwind CSS, com telas Sign In e Sign Up visualmente fiéis às referências, alternância sem reload, componentes reutilizáveis, validação, feedback de erros, estado de loading e código organizado.

A prioridade é entregar uma interface funcional e visualmente consistente, mantendo a separação de responsabilidades e respeitando integralmente as restrições desta atividade.