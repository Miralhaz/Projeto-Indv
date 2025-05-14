-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE nbainfo;

USE nbainfo;

CREATE TABLE times (
	idTime INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf VARCHAR(50),
	fktime INT,
	FOREIGN KEY (fktime) REFERENCES times(idTime)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    respostasAcertas INT NOT NULL, 
    respostasErradas INT NOT NULL,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUser)
);

CREATE TABLE aviso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(150),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUser)
);

INSERT INTO times (nome) VALUES
('Boston Celtics'),
('Brooklyn Nets'),
('New York Knicks'),
('Philadelphia 76ers'),
('Toronto Raptors'),
('Chicago Bulls'),
('Cleveland Cavaliers'),
('Detroit Pistons'),
('Indiana Pacers'),
('Milwaukee Bucks'),
('Atlanta Hawks'),
('Charlotte Hornets'),
('Miami Heat'),
('Orlando Magic'),
('Washington Wizards'),
('Denver Nuggets'),
('Minnesota Timberwolves'),
('Oklahoma City Thunder'),
('Portland Trail Blazers'),
('Utah Jazz'),
('Golden State Warriors'),
('Los Angeles Clippers'),
('Los Angeles Lakers'),
('Phoenix Suns'),
('Sacramento Kings'),
('Dallas Mavericks'),
('Houston Rockets'),
('Memphis Grizzlies'),
('New Orleans Pelicans'),
('San Antonio Spurs');