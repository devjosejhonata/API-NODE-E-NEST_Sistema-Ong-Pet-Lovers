# 📂 Pasta: modules

- Os Módulos vão ser responsáveis por encapsular e registrar os controllers, services e repositories.
- Permite organização e modularização do código das entidades.

Esta pasta contém os módulos da aplicação, que agrupam e organizam os componentes relacionados a cada entidade (como adotante.module, pet.module, abrigo.module, endereco.module, admin.module...).

## Arquivos atuais:

- **endereco.module.ts**  
  Registra o controller e o service relacionados à entidade `Endereco`.

- **abrigo.module.ts**  
  Registra o controller e o service relacionados à entidade `Abrigo`.

- **admin.module.ts**  
  Registra o controller e o service relacionados à entidade `Admin`.

## Observações:
- Cada entidade deverá ter seu próprio módulo.
- Os módulos ajudam a manter a aplicação modular e escalável, seguindo o padrão do NestJS.
