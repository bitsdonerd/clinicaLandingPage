# Clínica Bem Estar - Landing Page

## 📋 Sobre o Projeto

Este projeto consiste em uma landing page estática desenvolvida para a Clínica Bem Estar, apresentando as principais informações da clínica e seus serviços. A página foi construída utilizando tecnologias modernas e práticas de desenvolvimento web responsivo.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **Tailwind CSS** - Framework CSS para estilização
- **Vite** - Build tool e bundler
- **React Router DOM** - Gerenciamento de rotas

### 📦 Principais Dependências

- @tanstack/react-query
- shadcn/ui (componentes reutilizáveis)
- lucide-react (ícones)
- react-hook-form
- zod (validação)

## 🎯 Funcionalidades Implementadas

1. **Header com Hero Section**

   - Título principal da clínica
   - Subtítulo e descrição
   - Background gradiente suave

2. **Seção de Serviços**

   - Cards informativos
   - Imagens ilustrativas
   - Descrições detalhadas dos serviços

3. **Seção da Equipe**

   - Fotos dos profissionais
   - Informações sobre cargo e especialidade
   - Layout responsivo em grid

4. **Formulário de Contato**
   - Campos para nome completo
   - E-mail
   - Cidade e Estado
   - Validação básica dos campos

## 💻 Estrutura do Projeto

```
src/
  ├── components/
  │   └── ui/          # Componentes reutilizáveis do shadcn
  ├── pages/
  │   ├── Index.tsx    # Página principal
  │   └── NotFound.tsx # Página 404
  ├── hooks/           # Hooks customizados
  ├── lib/            # Utilitários e configurações
  └── main.tsx        # Entrada da aplicação
```

## 🎨 Design e Estilização

- Utilização de Tailwind CSS para estilização responsiva
- Paleta de cores suaves e profissionais
- Layout moderno e clean
- Tipografia consistente
- Espaçamentos e alinhamentos padronizados

## 📱 Responsividade

A landing page é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔧 Como Executar o Projeto

1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

4. Acesse http://localhost:8080 no seu navegador

## Site do projeto

Para acessar a versão final do projeto acesse: https://clinica-landing-page-iota.vercel.app/

Este projeto está hospedado na Vercel, uma plataforma moderna de hospedagem voltada para frontends, APIs e projetos fullstack.

### 📦 Como foi feito o deploy

O processo de deploy foi realizado da seguinte forma:

Conta na Vercel
Foi criada (ou usada) uma conta gratuita no site vercel.com.

Importação do repositório GitHub
Na dashboard da Vercel, o repositório deste projeto foi importado diretamente através da integração com o GitHub.

Configuração automática

A Vercel detectou automaticamente o framework utilizado (Vite) e configurou o ambiente de build.

A branch main foi selecionada como fonte do deploy.

Deploy contínuo (CI/CD)
A cada novo push na branch main, a Vercel executa o build e atualiza automaticamente o site com as alterações.

🌐 Link para o projeto online
https://clinica-landing-page-iota.vercel.app/

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👩‍💻 Autores

- Desenvolvido por @bitsdonerd
