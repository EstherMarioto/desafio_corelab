# Corelab Desafio

Este projeto é dividido em duas partes: o frontend e a API backend. Abaixo estão as instruções para configurar e executar ambos localmente.

## Configuração e Execução

### Frontend (corelab_desafio_web-main)

1. **Navegue até a pasta do frontend:**

   ```bash
   cd corelab_desafio_web-main
    ```

2. **Instale as dependências:**

    ```bash
    npm install
     ```

3. **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
     ```
      Isso irá iniciar o servidor de desenvolvimento e abrir o aplicativo no navegador.
   
###  Backend (corelab_desafio_api)

1. **Navegue até a pasta da API:**

   ```bash
   cd corelab_desafio_api
    ```

2. **Instale as dependências:**

    ```bash
    npm install
     ```
    
3. **Rode as migrações do banco de dados:**

    ```bash
    node ace migration:run
     ```

4. **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
     ```
      Isso irá iniciar o servidor da API.

   ## Considerações Finais

   * Certifique-se de que o Node.js e o npm estão corretamente instalados no seu sistema antes de iniciar a configuração.
   * Para garantir que o frontend e o backend se comuniquem corretamente, ambos os servidores devem estar rodando ao mesmo tempo.
