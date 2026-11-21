# naes — site

Site estático (HTML + CSS + JS puro, sem build). Abre direto no navegador.

## Estrutura

```
index.html            ← as 6 seções, os embeds do SoundCloud e todos os links
css/style.css         ← posições, hover das fotos, pontos de navegação
js/main.js            ← escala da tela + ponto ativo da navegação
assets/
  sections/           ← arte de cada seção (01-inicio … 06-contato), 1920×1080 @1.5x
  photos/             ← as 4 fotos da galeria (recortadas, com hover)
  ui/favicon.png
```

## Como funciona

Cada seção é um "palco" de **1920×1080** (o tamanho do mockup) escalado para a tela.
Tudo que fica sobre a arte (embeds, links, fotos) é posicionado em **px dentro do palco**,
então sempre acompanha o desenho.

## Onde editar

| Quero…                               | Onde                                                            |
|--------------------------------------|-----------------------------------------------------------------|
| Trocar um link (Instagram, WhatsApp, e-mail, Numark) | `index.html` → procure `href=`                  |
| Trocar um player do SoundCloud       | `index.html` → bloco `embed-1` / `embed-2`                      |
| Mover/redimensionar um player ou área clicável | `css/style.css` → `.embed-1`, `.embed-2`, `.hit-*`    |
| Ajustar o tamanho do hover das fotos | `css/style.css` → `.photo:hover { transform: scale(1.05) }`     |
| Mudar textos/arte de uma seção       | Edite o mockup no Photoshop, exporte a seção em 2880×1620 (WebP/JPG) e substitua o arquivo em `assets/sections/` |

> Os textos fazem parte da arte (imagem). Para leitores de tela e buscadores, o texto
> equivalente está em blocos `.sr-only` no `index.html` — atualize-os se mudar a arte.
> Na seção 2 a arte já vem **sem** os textos de exemplo; o espaço é dos players.

## Publicar no GitHub Pages (grátis)

1. Crie um repositório no GitHub (ex.: `naes`).
2. Envie **o conteúdo desta pasta** (o `index.html` deve ficar na raiz do repositório).
3. No repositório: **Settings → Pages → Build and deployment → Deploy from a branch**,
   escolha `main` e `/ (root)` → **Save**.
4. Em ~1 minuto o site fica em `https://SEU-USUARIO.github.io/naes/`.

Os arquivos pesados (PSD/PDF de ~500 MB) **não** devem ir para o GitHub — o `.gitignore`
já os ignora. Guarde-os no seu computador ou em um drive.
