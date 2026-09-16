# Límpida — Landing Page (Limpador de Piscina)

Projeto em React + Vite, pronto para demonstração ao cliente e para
customização posterior (nome, telefone, cidade, fotos, preços e serviços).

## Rodar localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a pasta dist/ para publicação
npm run preview   # visualiza o build de produção
```

## Onde editar o conteúdo

Todo o conteúdo textual (títulos, serviços, depoimentos, telefone, bairros
atendidos, links de WhatsApp/Instagram) está direto nos componentes em
`src/components/`, sem CMS — é só trocar o texto/array no topo de cada
arquivo:

- `Hero.jsx` — frase principal, badge, estatísticas
- `Benefits.jsx` — os 4 cards de benefícios
- `Services.jsx` — lista de serviços
- `BeforeAfter.jsx` — imagem antes/depois
- `Process.jsx` — etapas do "como funciona"
- `About.jsx` — texto sobre o profissional e diferenciais
- `Testimonials.jsx` — depoimentos de clientes
- `CTA.jsx` e `WhatsAppFloat.jsx` — número de WhatsApp (troque `5527999990000`)
- `ServiceArea.jsx` — cidade/região e bairros atendidos
- `Footer.jsx` — redes sociais e horário de atendimento

As cores e fontes ficam centralizadas em `src/index.css` (bloco `:root`).

As fotos usadas ficam em `src/assets/` — troque pelos arquivos finais do
cliente mantendo os mesmos nomes, ou atualize os `import` nos componentes.
