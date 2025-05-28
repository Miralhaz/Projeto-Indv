CREATE DATABASE nbainfo;

USE nbainfo;

CREATE TABLE times (
	idTime INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE jogadores (
    idJogador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

CREATE TABLE usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf VARCHAR(50),
	fktime INT,
    fkjogador INT,
	FOREIGN KEY (fktime) REFERENCES times(idTime),
    FOREIGN KEY (fkjogador) REFERENCES jogadores(idJogador)
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

CREATE TABLE quizPerguntas (
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(100),
    alternativa1 VARCHAR(60),
    alternativa2 VARCHAR(60),
    alternativa3 VARCHAR(60),
    alternativa4 VARCHAR(60),
    alternativaCorreta INT
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

INSERT INTO jogadores (nome)
VALUES
('Lebron James'),
('Kobe Bryant'),
('Micheal Jordan'),
('Steph Curry'),
('Shaquille O Neal');

INSERT INTO quizPerguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativaCorreta)
VALUES 
('Qual time venceu mais campeonatos da NBA?', 'Chicago Bulls', 'Los Angeles Lakers', 'Boston Celtics', 'Golden State Warriors', 3),
('Quem é o maior pontuador da história da NBA?', 'LeBron James', 'Michael Jordan', 'Kareem Abdul-Jabbar', 'Kobe Bryant', 1),
('Qual jogador tem mais títulos da NBA?', 'Stephen Curry', 'Tim Duncan', 'Magic Johnson', 'Bill Russell', 4),
('Qual time é responsável pela melhor temporada regular da história da NBA?', 'Oklahoma City Thunder', 'Miami Heat', 'Golden State Warriors', 'Houston Rockets', 3),
('Em que ano a NBA foi fundada?', '1946', '1950', '1935', '1962', 1),
('Quantos jogadores compõem um time titular da NBA?', '4', '5', '6', '7', 2),
('Qual franquia foi a primeira campeã da NBA?', 'Boston Celtics', 'New York Knicks', 'Philadelphia Warriors', 'Los Angeles Lakers', 3),
('Quem foi o MVP da temporada 2022-23?', 'Luka Doncic', 'Nikola Jokic', 'Giannis Antetokounmpo', 'Joel Embiid', 4);

select * from usuario;
select * from quiz;
select * from quizPerguntas;
select * from aviso;
select * from jogadores;