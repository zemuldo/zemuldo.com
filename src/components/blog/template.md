# Handy MySQL Commands

This is a manual I made recently when I realized I had to learn MySQL from scartch to boost my web dev skill set and carreer goals that target being a Data Scientist. Bear with any errors you will find because I did this in light speed while working on a full time job. Nevertheless you will find this very helpful at the minimum. Nice journey in yours. Let me also point out that all the commands and Keywords are better read about in the MySQL official docs.

This was written for MySQL version below:
```
➜ mysql -V
mysql  Ver 8.0.16 for macos10.14 on x86_64 (MySQL Community Server - GPL)
```

Or like this:
```
mysql> SHOW VARIABLES LIKE "%version%";
+--------------------------+------------------------------+
| Variable_name            | Value                        |
+--------------------------+------------------------------+
| immediate_server_version | 999999                       |
| innodb_version           | 8.0.16                       |
| original_server_version  | 999999                       |
| protocol_version         | 10                           |
| slave_type_conversions   |                              |
| tls_version              | TLSv1,TLSv1.1,TLSv1.2        |
| version                  | 8.0.16                       |
| version_comment          | MySQL Community Server - GPL |
| version_compile_machine  | x86_64                       |
| version_compile_os       | macos10.14                   |
| version_compile_zlib     | 1.2.11                       |
+--------------------------+------------------------------+
11 rows in set (0.01 sec)

mysql>
```

# Table of Contents

- [Handy MySQL Commands](#handy-mysql-commands)
- [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Commandline MySQL Navigations.](#commandline-mysql-navigations)
    - [Login to Terminal](#login-to-terminal)
    - [List Databases](#list-databases)
    - [Create Database](#create-database)
    - [Switch DB, Create a Table and Add Data](#switch-db-create-a-table-and-add-data)
    - [Dump Table, Databse or Entire DBMS](#dump-table-databse-or-entire-dbms)
      - [Dump a Database:](#dump-a-database)
      - [Dump a Specific Table:](#dump-a-specific-table)
      - [Backup Entire DBMS](#backup-entire-dbms)
      - [Automate Backups with Cron on Linux](#automate-backups-with-cron-on-linux)
    - [Restore Backup](#restore-backup)
    - [Summary](#summary)
  - [MySQL Queries](#mysql-queries)
    - [Create and Populate World db](#create-and-populate-world-db)
    - [Commands](#commands)
      - [DESCRIBE](#describe)
      - [SELECT](#select)
      - [DISTINCT, WHERE](#distinct-where)
      - [ALTER TABLE](#alter-table)
        - [ALTER ADD Column](#alter-add-column)
        - [RENAME TO and CHANGE](#rename-to-and-change)
      - [FUNCTIONS](#functions)
        - [Sum](#sum)
        - [DIV / ROUND](#div--round)
        - [FLOOR](#floor)
        - [CONCAT, LEFT, RIGHT](#concat-left-right)
        - [LENGTH](#length)
        - [REPLACE and REVERSE](#replace-and-reverse)
        - [DATE FORMAT, DATE TIME](#date-format-date-time)
      - [INSERT](#insert)


Using the database world. The SQL file in the root of this manuals location or just [this link](http://downloads.mysql.com/docs/world.sql.gz).

Most commands are these.

| Description                                                                                                                          	| Command                                                                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| To login (from unix shell) use -h if connecting to remote host.                                                                       | `mysql -h hostname -u root -p`                                                                                                                            |
| Create a database on the sql server.                                                                                                	| `create database [databasename];`                                                                                                                                               |
| List all databases on the sql server.                                                                                               	| `show databases; `                                                                                                                                                                |
| Switch to a database.                                                                                                               	| `use [db name];`                                                                                                                                                                |
| To see all the tables in the db.                                                                                                    	| `show tables;`                                                                                                                                                                    |
| To see database table field formats.                                                            					| `describe [table name];`                                                                                                                                                        |
| To delete a db.                                                                                                                     	| `drop database [database name];`                                                                                                                                                |
| To delete a table.                                                                                                                  	| `drop table [table name]; `                                                                                                                                                     |
| Show all data in a table.                                                                                                           	| `SELECT * FROM [table name]; `                                                                                                                                                 |
| Returns the columns and column information pertaining to the designated table.                                                      	| `show columns from [table name]; `                                                                                                                                              |
| Show certain selected rows with the value "whatever".                                                                               	| `SELECT * FROM [table name] WHERE [field name] = "whatever"; `                                                                                                               |
| Show all records containing the name "Bob" AND the phone number '3444444'.                                                          	| `SELECT * FROM [table name] WHERE name = "Bob" AND phone_number = '3444444'; `                                                                                                |
| Show all records not containing the name "Bob" AND the phone number '3444444' order by the phone_number field.                     	| `SELECT * FROM [table name] WHERE name != "Bob" AND phone_number = '3444444' order by phone_number;`                                                                        |
| Show all records starting with the letters 'bob' AND the phone number '3444444'.                                                    	| `SELECT * FROM [table name] WHERE name like "Bob%" AND phone_number = '3444444';`                                                                                             |
| Use a regular expression to find records. Use "REGEXP BINARY" to force case-sensitivity. This finds any record beginning with a. 	| `SELECT * FROM [table name] WHERE rec RLIKE "^a$";`                                                                                                                            |
| Show unique records.                                                                                                                	| `SELECT DISTINCT [column name] FROM [table name];`                                                                                                                            |
| Show selected records sorted in an ascending (asc) or descending (desc).                                                        	| `SELECT [col1],[col2] FROM [table name] ORDER BY [col2] DESC; `                                                                                                           |
| Count rows.                                                                                                                         	| `SELECT COUNT(*) FROM [table name]; `                                                                                                                                        |
| Join tables on common columns.                                                                                                      	| `select lookup.illustrationid, lookup.personid,person.birthday from lookup left join person on lookup.personid=person.personid=statement to join birthday in person table with primary illustration id;`                                                                                                    |
| Switch to the mysql db. Create a new user.                                                                                         	| `INSERT INTO [table name] (Host,User,Password) VALUES('%','user',PASSWORD('password')); `                                                                                 |
| Change a users password.(from unix shell).                                                                                       	| `[mysql dir]/bin/mysqladmin -u root -h hostname.blah.org -p password 'new-password'`                                                                                      |
| Change a users password.(from MySQL prompt).                                                                                     	| `SET PASSWORD FOR 'user'@'hostname' = PASSWORD('passwordhere'); `                                                                                                               |
| Switch to mysql db.Give user privilages for a db.                                                                                  	| `INSERT INTO [table name] (Host,Db,User,Select_priv,Insert_priv,Update_priv,Delete_priv,Create_priv,Drop_priv) VALUES ('%','db','user','Y','Y','Y','Y','Y','N');`    |
| To update info already in a table.                                                                                                 	| `UPDATE [table name] SET Select_priv = 'Y',Insert_priv = 'Y',Update_priv = 'Y' where [field name] = 'user';`                                                               |
| Delete a row(s) from a table.                                                                                                     	| `DELETE from [table name] where [field name] = 'whatever';`                                                                                                                   |
| Update database permissions/privilages.                                                                                             	| `FLUSH PRIVILEGES;`                                                                                                                                                               |
| Delete a column.                                                                                                                    	| `alter table [table name] drop column [column name];`                                                                                                                         |
| Add a new column to db.                                                                                                             	| `alter table [table name] add column [new column name] varchar (20);`                                                                                                       |
| Change column name.                                                                                                                 	| `alter table [table name] change [old column name] [new column name] varchar (50); `                                                                                    |
| Make a unique column so you get no dupes.                                                                                           	| `alter table [table name] add unique ([column name]);`                                                                                                                      |
| Make a column bigger.                                                                                                               	| `alter table [table name] modify [column name] VARCHAR(3);`                                                                                                                 |
| Delete unique from table.                                                                                                           	| `alter table [table name] drop index [colmn name];`                                                                                                                           |
| Load a CSV file into a table.                                                                                                       	| `LOAD DATA INFILE '/tmp/filename.csv' replace INTO TABLE [table name] FIELDS TERMINATED BY ',' LINES TERMINATED BY 'n' (field1,field2,field3); `                           |
| Dump all databases for backup. Backup file is sql commands to recreate all db's.                                                   	| `[mysql dir]/bin/mysqldump -u root -ppassword --opt >/tmp/alldatabases.sql`                                                                                               |
| Dump one database for backup.                                                                                                       	| `[mysql dir]/bin/mysqldump -u username -ppassword --databases databasename >/tmp/databasename.sql `                                                                        |
| Dump a table from a database.                                                                                                       	| `[mysql dir]/bin/mysqldump -c -u username -ppassword databasename tablename > /tmp/databasename.tablename.sql `                                                            |
| Restore database (or database table) from backup.                                                                                 	| `[mysql dir]/bin/mysql -u username -ppassword databasename < /tmp/databasename.sql `                                                                                         |
| Create Table Example 1.                                                                                                             	| `CREATE TABLE [table name] (firstname VARCHAR(20), middleinitial VARCHAR(3), lastname VARCHAR(35),suffix VARCHAR(3), officeid VARCHAR(10),userid VARCHAR(15),username VARCHAR(8),email VARCHAR(35),phone VARCHAR(25), groups  VARCHAR(15),datestamp DATE,timestamp time,pgpemail VARCHAR(255));`                                                  |
| Create Table Example 2.                                                                                                             	| `create table [table name] (personid int(50) not null auto_increment primary key,firstname varchar(35),middlename varchar(50),lastname varchar(50) default 'bato');` |


## Installation
Installation is a personal adventure so I wont even document that here. You can visit the MySQL official site and dowbload the installer for MySQL server and MySQL Workbench and install both. The installers have instructios for all major OS platforms. You can do it 👊 👊. I will add this part later.

## Commandline MySQL Navigations.

This section covers handy utilities that you can use in MySQL terminal. 

### Login to Terminal

After you install mysql, you need to find the root user password you created because you are going to need it. I am not sure if there are mysql server installers that dont propmpt you to create the root password. If yoy cant get passed this, just do a few googling and you will figure it out. 

Login as root: `mysql -u root -p`, you will be prompted for the password. 
```
➜ mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 210
Server version: 8.0.16 MySQL Community Server - GPL

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or 'h' for help. Type 'c' to clear the current input statement.

mysql>
```

### List Databases

Command show databases will list all the databases in the mysql server instance you are logged into. 

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)

mysql>
```
### Create Database

```sql
mysql> create database world;
Query OK, 1 row affected (0.00 sec)

mysql>
```

### Switch DB, Create a Table and Add Data
Switch DB

```
mysql> use world;
Database changed
mysql>
```

Show tables in DB
```
mysql> show tables;
Empty set (0.01 sec)

mysql>
```
Create Table City
```sql
mysql> CREATE TABLE CITY( id INTEGER AUTO_INCREMENT PRIMARY KEY, population INTEGER NOT NULL);
Query OK, 0 rows affected (0.03 sec)

mysql>
```
Insert a City 4 
```sql
mysql> INSERT INTO city VALUES(4, 1000000);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO city VALUES(NULL, 2000000);
Query OK, 1 row affected (0.00 sec)

mysql>
```

Read Data from DB
```sql
mysql> SELECT * FROM city;
+----+------------+
| id | population |
+----+------------+
|  4 |    1000000 |
|  5 |    2000000 |
+----+------------+
2 rows in set (0.00 sec)

mysql>
```
### Dump Table, Databse or Entire DBMS

#### Dump a Database:
Creats an SQL script.
```
➜ mysqldump -u root -p world > dump-$(date +%F).sql
Enter password:
➜
```
#### Dump a Specific Table:
Create a sql dump of a table:
```
➜ mysqldump -c -u root -p world city > world.city-$(date +%F).sql
Enter password:

➜
```
#### Backup Entire DBMS

```
➜ mysqldump --all-databases --single-transaction --quick --lock-tables=false > full-backup-$(date +%F).sql -u root -p
Enter password:

➜
```

Here’s a breakdown of the mysqldump command options used above:

- --single-transaction: Issue a BEGIN SQL statement before dumping data from the server.
- --quick: Enforce dumping tables row by row. This provides added safety for systems with little RAM and/or large databases where storing tables in memory could become problematic.
- --lock-tables=false: Do not lock tables for the backup session.

#### Automate Backups with Cron on Linux

Entries can be added to `/etc/crontab` to regularly schedule database backups.

Create a file to hold the login credentials of the MySQL root user which will be performing the backup. Note that the system user whose home directory this file is stored in can be unrelated to any MySQL users.

`/home/example_user/.mylogin.cnf`
```
[client]
user = root
password = MySQL root user's password
```
Restrict permissions of the credentials file:
```
chmod 600 /home/example_user/.mylogin.cnf
```
Create the cron job file. Below is an example cron job to back up the entire database management system every day at 1am:

`/etc/cron.daily/mysqldump`
```
0 1 * * * /usr/bin/mysqldump --defaults-extra-file=/home/example_user/.my.cnf -u root --single-transaction --quick --lock-tables=false --all-databases > full-backup-$(date +%F).sql
```
For more information on cron, see the [cron(8)](https://linux.die.net/man/8/cron) and [cron(5)](https://linux.die.net/man/5/crontab) manual pages.

### Restore Backup
Restore a DataBase Backup: Will Execute an SQL Script;
```
➜ mysql -u root -p world < dump-2019-06-15.sql
Enter password:
➜
```
### Summary

That is not all queries or commands you can do on the mysql terminal. I just decided to stop there for the terminal and move to a GUI based tool for running such task. Its also hard to ducument GUIs without Videos or Images so I will put a link here for the commands cheat sheet and ofcourse you can always visit mysql official docs. I will hoever put full sql queries that I run on the GUI. I will be using Mysql workbench.

I have a section for each SQL command for application level usage like `SELECT` etc.
At this point you can drop the world database you have and execute the world database dump at the root.

## MySQL Queries

### Create and Populate World db

Assumptions: You have gone through the previous chapeter and created world db with cities and other tables.

If you havent, its this simple for now
Drop the world (will have error if you dont have db world yet)

```
mysql> drop database world
    -> ;
Query OK, 1 row affected (0.03 sec)
mysql> show databases
    -> ;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql>
```

Restore the Dump
```
➜ mysql -u root -p  < sample_world.sql
Enter password:

➜
```

Show DBS
```
mysql> show databases
    -> ;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| world              |
+--------------------+
5 rows in set (0.00 sec)

mysql>
```

### Commands
#### DESCRIBE
Describe table, describes table
```SQL
mysql> DESCRIBE city;
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| ID          | int(11)  | NO   | PRI | NULL    | auto_increment |
| Name        | char(35) | NO   |     |         |                |
| CountryCode | char(3)  | NO   | MUL |         |                |
| District    | char(20) | NO   |     |         |                |
| Population  | int(11)  | NO   |     | 0       |                |
+-------------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)

mysql>
```

#### SELECT
Most Used Command besides [INSERT](#insert). Since most commands are also demonstrated alongside SELECT, I will state uses of each command and just get writing queries. Thats the best way i find to understand such commands: Inside a QUERY. MySQL is not case sensitive so but convention is to use uppercase for commands and lowercase for identifiers like column, table, database names.

SELECT all columns of all rows FROM table city, Its said to be a bad idea to do this. [See Here](https://stackoverflow.com/questions/3639861/why-is-select-considered-harmful)
```SQL
SELECT * FROM city;
```

SELECT desired columns of rows from table city
```SQL
SELECT id,name,countrycode FROM city;
```
SELECT with ALIAS: Give a table, or a column in a table, a temporary name.

```sql
SELECT id as CityID,name as CityName,countrycode as CountryCode FROM city as Cities;
```

```sql
SELECT C.id as CityID,C.name as CityName,C.countrycode as CountryCode FROM city C ;
```

#### DISTINCT, WHERE

DISTINCT Removes duplicate values
WHERE uses conditions to limit and works with Operators
=, >, <, >, <>, <=, >=, != with OR, AND and NOT

#### ALTER TABLE
##### ALTER ADD Column
Add 
```sql
ALTER TABLE city
  ADD column_name INTEGER NOT NULL DEFAULT 10000;
```
#####ALTER TABLE DROP Column
Drop the column name just created and maki it size in square meters
```sql
ALTER TABLE city DROP column_name;
```
Add it now
```sql
ALTER TABLE city
  ADD size INTEGER NOT NULL DEFAULT 10000;
```
##### RENAME TO and CHANGE
We could also asell just RENAME it or CHANGE it as RENAME TO is nolonger Supported in later versions

CHANGE table takes is better though.
```sql
ALTER TABLE city CHANGE size size INTEGER NOT NULL DEFAULT 1000;
```
#### FUNCTIONS

##### Sum
Find Total population of all the cities
```sql
SELECT SUM(C.population) FROM city C;
``` 
##### DIV / ROUND
Find the decity of each city, that is population devided by the size.
```sql
SELECT
C.population AS Population,
C.size AS SqrMeterSize,
C.population DIV C.size AS Density
FROM city C 
ORDER BY population DESC;
```

DIV returns whole number, while / returns floating points
```sql
SELECT
C.population AS Population,
C.size AS SqrMeterSize,
C.population DIV C.size AS Density
FROM city C 
ORDER BY population DESC;
```

ROUND to 2 decimal places
```SQL
SELECT
C.population AS Population,
C.size AS SqrMeterSize,
ROUND(C.population / C.size, 2) AS Density
FROM city C 
ORDER BY population DESC;
```
##### FLOOR
FLOOR removes floating points
```sql
SELECT
C.population AS Population,
C.size AS SqrMeterSize,
ROUND(C.population / C.size, 2) AS Density,
FLOOR(C.population / C.size) AS DensityFloored
FROM city C 
ORDER BY population DESC;
```
##### CONCAT, LEFT, RIGHT
Join strings in Query: CROSS JOIN?
```sql
SELECT CONCAT(Ct.name, ' is in ', Cn.name) FROM city Ct, country Cn WHERE Ct.CountryCode = Cn.code;
```

Get name from `first_name` and `last_name` 
```sql
SELECT CONCAT(LEFT(P.first_name, 1), ' ', LEFT(P.last_name, 1)) AS name FROM person P;
```

LEFT and RIGHT are opposites of each other getting firts and last n characters of a string repectively
```sql
SELECT LEFT(Ct.name, 1) FROM city Ct
```
```sql
SELECT RIGHT(Ct.name, 1) FROM city Ct
```

##### LENGTH

Get LENGTH of strings
```sql
SELECT LENGTH(Ct.name) FROM city Ct
```

##### REPLACE and REVERSE

REPLACE characters in a string
```sql
SELECT REPLACE(Ct.name, 's', '$') FROM city Ct
```
REVERSE character order
```SQL
SELECT REVERSE(Ct.name) FROM city Ct
```

##### DATE FORMAT, DATE TIME
```sql
ALTER TABLE city ADD inserted_at TIMESTAMP NOT NULL DEFAULT NOW();
```
FORMAT_DATE formats date to diffrent representations
```sql
SELECT 
C.inserted_at,
DATE_FORMAT(C.inserted_at, '%m/%d/%y') AS 'Format-d/m/Y',
DATE_FORMAT(C.inserted_at, '%m-%d-%y') AS 'Format-d/m/Y',
DATE_FORMAT(C.inserted_at, '%M-%D-%Y') AS 'Format-D/M/Y',
DATE_FORMAT(C.inserted_at, '%d %b %Y %T:%f') AS 'Format-D Month YYYY TIME'
FROM city C;
```

Other functions
`DAYOFWEEK`, `QUARTER`, `WEEK`, `MONTHNAME`, `GET_FORMAT`


#### INSERT