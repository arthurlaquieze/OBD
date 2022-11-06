-- 1_2
SELECT nom FROM pays;

-- 1_3
SELECT paysl, paysv FROM match;

-- 1_4
SELECT paysl, paysv FROM match WHERE match.date = '1986-06-05';

-- 1_5
SELECT paysl FROM match WHERE paysv='France'
UNION
SELECT paysv FROM match WHERE paysl='France';

-- 1_6
SELECT paysl FROM match WHERE match.type='Finale' AND match.butsl > match.butsv 
UNION
SELECT paysv FROM match WHERE match.type='Finale' AND match.butsv > match.butsl;

-- 3_2
SELECT SUM(buts)/COUNT(buts) FROM matchbutsglobal WHERE paysl = 'France' OR paysv = 'France';

-- 3_3
SELECT SUM(buts) FROM (
    SELECT butsl AS buts FROM match WHERE match.paysl = 'France'
    UNION ALL
    SELECT butsv AS buts FROM match WHERE match.paysv = 'France'
) as R;

-- 3_4
SELECT groupe, sum(buts) FROM (
    SELECT groupe, (butsl + butsv) as buts FROM pays JOIN (
        SELECT paysv, butsl, butsv FROM match WHERE type='Poule'
    ) AS R ON pays.nom = paysv
) AS R
GROUP BY groupe;

