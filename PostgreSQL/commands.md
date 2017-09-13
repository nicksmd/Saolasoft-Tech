- connect to postgres: **psql postgres**
- list users/roles: **\du**
- create db: **create database <database-name>;**
- drop db: **drop database <database-name>;**
- connect to db: **\c <database-name>;**
- list databases: **\l**
- create table: 
        
```sql
    create table <table-name> (
        <col-name>  <data-type>     primary key     not null,
        <col-name>  <data-type>                     not null,
        ...
    )
```
    
References:    
- https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx
