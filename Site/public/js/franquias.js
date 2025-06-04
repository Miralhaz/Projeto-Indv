function franquiasDoLeste(){

    var slt_cf_leste = cf_leste.value

    var franquiasLeste = {
        "ah": {
            titulo: "Atlanta Hawks",
            titulos: 1,
            jogadores: ["Dominique Wilkins", "Trae Young"],
            melhor_temporada: "2014-15 (60 vitórias)",
            pior_temporada: "2004-05 (13 vitórias)",
            playoffs: "Campeão em 1958",
            logo: `<img src="./assets/imgs/Atlanta_Hawks_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "bc": {
            titulo: "Boston Celtics",
            titulos: 18,
            jogadores: ["Bill Russell", "Larry Bird", "Paul Pierce"],
            melhor_temporada: "1985-86 (67 vitórias)",
            pior_temporada: "1996-97 (15 vitórias)",
            playoffs: "18 títulos, último em 2024",
            logo: `<img src="./assets/imgs/Boston_Celtics_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "bn": {
            titulo: "Brooklyn Nets",
            titulos: 0,
            jogadores: ["Jason Kidd", "Kevin Durant", "Kyrie Irving"],
            melhor_temporada: "2001-02 (52 vitórias)",
            pior_temporada: "2009-10 (12 vitórias)",
            playoffs: "Finalista em 2002 e 2003",
            logo: `<img src="./assets/imgs/Brooklyn_Nets_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "ch": {
            titulo: "Charlotte Hornets",
            titulos: 0,
            jogadores: ["Kemba Walker", "Larry Johnson"],
            melhor_temporada: "1996-97 (54 vitórias)",
            pior_temporada: "2011-12 (7 vitórias)",
            playoffs: "Sem finais da NBA",
            logo: `<img src="./assets/imgs/Charlotte_Hornets_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "cb": {
            titulo: "Chicago Bulls",
            titulos: 6,
            jogadores: ["Michael Jordan", "Scottie Pippen", "Derrick Rose"],
            melhor_temporada: "1995-96 (72 vitórias)",
            pior_temporada: "1999-00 (17 vitórias)",
            playoffs: "6 títulos, último em 1998",
            logo: `<img src="./assets/imgs/Chicago_Bulls_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "cc": {
            titulo: "Cleveland Cavaliers",
            titulos: 1,
            jogadores: ["LeBron James", "Kyrie Irving"],
            melhor_temporada: "2015-16 (57 vitórias)",
            pior_temporada: "1970-71 (15 vitórias)",
            playoffs: "Campeão em 2016",
            logo: `<img src="./assets/imgs/Cleveland_Cavaliers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "dp": {
            titulo: "Detroit Pistons",
            titulos: 3,
            jogadores: ["Isiah Thomas", "Ben Wallace", "Chauncey Billups"],
            melhor_temporada: "2005-06 (64 vitórias)",
            pior_temporada: "2022-23 (17 vitórias)",
            playoffs: "3 títulos, último em 2004",
            logo: `<img src="./assets/imgs/Detroit_Pistons_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "ip": {
            titulo: "Indiana Pacers",
            titulos: 0,
            jogadores: ["Reggie Miller", "Paul George", "Tyrese Haliburton"],
            melhor_temporada: "2003-04 (61 vitórias)",
            pior_temporada: "1982-83 (20 vitórias)",
            playoffs: "Finalista em 2000",
            logo: `<img src="./assets/imgs/Indiana_Pacers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "mh": {
            titulo: "Miami Heat",
            titulos: 3,
            jogadores: ["Dwyane Wade", "LeBron James", "Shaquille O’Neal"],
            melhor_temporada: "2012-13 (66 vitórias)",
            pior_temporada: "2007-08 (15 vitórias)",
            playoffs: "3 títulos, último em 2013",
            logo: `<img src="./assets/imgs/Miami_Heat_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "mb": {
            titulo: "Milwaukee Bucks",
            titulos: 2,
            jogadores: ["Kareem Abdul-Jabbar", "Giannis Antetokounmpo"],
            melhor_temporada: "1970-71 (66 vitórias)",
            pior_temporada: "2013-14 (15 vitórias)",
            playoffs: "2 títulos, último em 2021",
            logo: `<img src="./assets/imgs/Milwaukee_Bucks_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "nyk": {
            titulo: "New York Knicks",
            titulos: 2,
            jogadores: ["Walt Frazier", "Patrick Ewing", "Julius Randle"],
            melhor_temporada: "1992-93 (60 vitórias)",
            pior_temporada: "2014-15 (17 vitórias)",
            playoffs: "2 títulos, último em 1973",
            logo: `<img src="./assets/imgs/New_York_Knicks_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "om": {
            titulo: "Orlando Magic",
            titulos: 0,
            jogadores: ["Shaquille O’Neal", "Penny Hardaway", "Dwight Howard"],
            melhor_temporada: "2009-10 (59 vitórias)",
            pior_temporada: "2012-13 (20 vitórias)",
            playoffs: "Finalista em 1995 e 2009",
            logo: `<img src="./assets/imgs/Orlando_Magic_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "p76": {
            titulo: "Philadelphia 76ers",
            titulos: 3,
            jogadores: ["Allen Iverson", "Julius Erving", "Joel Embiid"],
            melhor_temporada: "1966-67 (68 vitórias)",
            pior_temporada: "2015-16 (10 vitórias)",
            playoffs: "3 títulos, último em 1983",
            logo: `<img src="./assets/imgs/Philadelphia_76ers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "tr": {
            titulo: "Toronto Raptors",
            titulos: 1,
            jogadores: ["Vince Carter", "Kyle Lowry", "Kawhi Leonard"],
            melhor_temporada: "2017-18 (59 vitórias)",
            pior_temporada: "1997-98 (16 vitórias)",
            playoffs: "Campeão em 2019",
            logo: `<img src="./assets/imgs/Toronto_Raptors_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "ww": {
            titulo: "Washington Wizards",
            titulos: 1,
            jogadores: ["Wes Unseld", "Elvin Hayes", "John Wall"],
            melhor_temporada: "1974-75 (60 vitórias)",
            pior_temporada: "2000-01 (19 vitórias)",
            playoffs: "Campeão em 1978",
            logo: `<img src="./assets/imgs/Washington_Wizards_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        }
    }

    if (franquiasLeste[slt_cf_leste]) {

        var franquia = franquiasLeste[slt_cf_leste]

        resumo.innerHTML = `<h3>${franquia.titulo}</h3>
                            <p><strong>Títulos:</strong> ${franquia.titulos}</p>
                            <p><strong>Principais jogadores:</strong> ${franquia.jogadores.join(", ")}</p>
                            <p><strong>Melhor temporada:</strong> ${franquia.melhor_temporada}</p>
                            <p><strong>Pior temporada:</strong> ${franquia.pior_temporada}</p>
                            <p><strong>Playoffs:</strong> ${franquia.playoffs}</p>
                            <p style="display:flex; align-items:center;"><strong>Logo:</strong> ${franquia.logo}</p>`

    } else {

        resumo.innerHTML = "Selecione uma franquia para ver o resumo."

    }
}




function franquiasDoOeste(){

    var slt_cf_oeste = cf_oeste.value

    var franquiasOeste = {
        "dm": {
            titulo: "Dallas Mavericks",
            titulos: 1,
            jogadores: ["Dirk Nowitzki", "Luka Dončić"],
            melhor_temporada: "2006-07 (67 vitórias)",
            pior_temporada: "1992-93 (11 vitórias)",
            playoffs: "Campeão em 2011",
            logo: `<img src="./assets/imgs/Dallas_Mavericks_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "dn": {
            titulo: "Denver Nuggets",
            titulos: 1,
            jogadores: ["Nikola Jokić", "Alex English"],
            melhor_temporada: "2022-23 (53 vitórias)",
            pior_temporada: "1997-98 (11 vitórias)",
            playoffs: "Campeão em 2023",
            logo: `<img src="./assets/imgs/Denver_Nuggets_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "gsw": {
            titulo: "Golden State Warriors",
            titulos: 7,
            jogadores: ["Stephen Curry", "Klay Thompson", "Kevin Durant"],
            melhor_temporada: "2015-16 (73 vitórias)",
            pior_temporada: "2000-01 (17 vitórias)",
            playoffs: "7 títulos, último em 2022",
            logo: `<img src="./assets/imgs/Golden_State_Warriors_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "hr": {
            titulo: "Houston Rockets",
            titulos: 2,
            jogadores: ["Hakeem Olajuwon", "James Harden"],
            melhor_temporada: "1993-94 (58 vitórias)",
            pior_temporada: "1982-83 (14 vitórias)",
            playoffs: "Campeão em 1994 e 1995",
            logo: `<img src="./assets/imgs/Houston_Rockets_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "lac": {
            titulo: "Los Angeles Clippers",
            titulos: 0,
            jogadores: ["Chris Paul", "Blake Griffin", "Kawhi Leonard"],
            melhor_temporada: "2013-14 (57 vitórias)",
            pior_temporada: "1986-87 (12 vitórias)",
            playoffs: "Sem finais da NBA",
            logo: `<img src="./assets/imgs/Los_Angeles_Clippers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "lal": {
            titulo: "Los Angeles Lakers",
            titulos: 17,
            jogadores: ["Magic Johnson", "Kobe Bryant", "LeBron James"],
            melhor_temporada: "1971-72 (69 vitórias)",
            pior_temporada: "2015-16 (17 vitórias)",
            playoffs: "17 títulos, último em 2020",
            logo: `<img src="./assets/imgs/Los_Angeles_Lakers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "mg": {
            titulo: "Memphis Grizzlies",
            titulos: 0,
            jogadores: ["Pau Gasol", "Ja Morant", "Marc Gasol"],
            melhor_temporada: "2012-13 (56 vitórias)",
            pior_temporada: "2002-03 (28 vitórias)",
            playoffs: "Sem finais da NBA",
            logo: `<img src="./assets/imgs/Memphis_Grizzlies_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "mt": {
            titulo: "Minnesota Timberwolves",
            titulos: 0,
            jogadores: ["Kevin Garnett", "Karl-Anthony Towns"],
            melhor_temporada: "2003-04 (58 vitórias)",
            pior_temporada: "2009-10 (15 vitórias)",
            playoffs: "Finais de conferência em 2004",
            logo: `<img src="./assets/imgs/Minessota_Timberwolves_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "nop": {
            titulo: "New Orleans Pelicans",
            titulos: 0,
            jogadores: ["Chris Paul", "Anthony Davis", "Zion Williamson"],
            melhor_temporada: "2007-08 (56 vitórias)",
            pior_temporada: "2004-05 (18 vitórias)",
            playoffs: "Sem finais da NBA",
            logo: `<img src="./assets/imgs/New_Orleans_Pelicans_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "okc": {
            titulo: "Oklahoma City Thunder",
            titulos: 1,
            jogadores: ["Kevin Durant", "Russell Westbrook", "Shai Gilgeous-Alexander"],
            melhor_temporada: "2012-13 (60 vitórias)",
            pior_temporada: "2008-09 (23 vitórias)",
            playoffs: "Campeão como Seattle SuperSonics em 1979",
            logo: `<img src="./assets/imgs/Oklahoma_City_Thunder_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "ps": {
            titulo: "Phoenix Suns",
            titulos: 0,
            jogadores: ["Steve Nash", "Charles Barkley", "Devin Booker"],
            melhor_temporada: "1992-93 (62 vitórias)",
            pior_temporada: "2017-18 (21 vitórias)",
            playoffs: "Finalista em 1976, 1993 e 2021",
            logo: `<img src="./assets/imgs/Phoenix_Suns_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "ptb": {
            titulo: "Portland Trail Blazers",
            titulos: 1,
            jogadores: ["Clyde Drexler", "Damian Lillard"],
            melhor_temporada: "1990-91 (63 vitórias)",
            pior_temporada: "2005-06 (21 vitórias)",
            playoffs: "Campeão em 1977",
            logo: `<img src="./assets/imgs/Portland_Trail_Blazers_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "sk": {
            titulo: "Sacramento Kings",
            titulos: 1,
            jogadores: ["Chris Webber", "De'Aaron Fox"],
            melhor_temporada: "2001-02 (61 vitórias)",
            pior_temporada: "2008-09 (17 vitórias)",
            playoffs: "Campeão em 1951 como Rochester Royals",
            logo: `<img src="./assets/imgs/Sacramento_Kings_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "sas": {
            titulo: "San Antonio Spurs",
            titulos: 5,
            jogadores: ["Tim Duncan", "Tony Parker", "Manu Ginóbili"],
            melhor_temporada: "2015-16 (67 vitórias)",
            pior_temporada: "2022-23 (22 vitórias)",
            playoffs: "5 títulos, último em 2014",
            logo: `<img src="./assets/imgs/San_Antonio_Spurs_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        },
        "uj": {
            titulo: "Utah Jazz",
            titulos: 0,
            jogadores: ["Karl Malone", "John Stockton", "Donovan Mitchell"],
            melhor_temporada: "1996-97 (64 vitórias)",
            pior_temporada: "1979-80 (24 vitórias)",
            playoffs: "Finalista em 1997 e 1998",
            logo: `<img src="./assets/imgs/Utah_Jazz_logo.png" alt="" style="height: 50px; padding: 0 10px">`
        }
    };

    if (franquiasOeste[slt_cf_oeste]) {

        var franquia = franquiasOeste[slt_cf_oeste]

        resumo2.innerHTML = `<h3>${franquia.titulo}</h3>
                             <p><strong>Títulos:</strong> ${franquia.titulos}</p>
                             <p><strong>Principais jogadores:</strong> ${franquia.jogadores.join(", ")}</p>
                             <p><strong>Melhor temporada:</strong> ${franquia.melhor_temporada}</p>
                             <p><strong>Pior temporada:</strong> ${franquia.pior_temporada}</p>
                             <p><strong>Playoffs:</strong> ${franquia.playoffs}</p>
                             <p style="display:flex; align-items:center;"><strong>Logo:</strong> ${franquia.logo}</p>`

    } else {

        resumo2.innerHTML = "Selecione uma franquia para ver o resumo."

    }
}