SELECT groupe, sum(buts) FROM (
    SELECT groupe, (butsl + butsv) as buts FROM pays JOIN (
        SELECT paysv, butsl, butsv FROM match WHERE type='Poule'
    ) AS R ON pays.nom = paysv
) AS R
GROUP BY groupe;
