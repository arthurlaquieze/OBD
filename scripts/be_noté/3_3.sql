SELECT SUM(buts) FROM (
    SELECT butsl AS buts FROM match WHERE match.paysl = 'France'
    UNION ALL
    SELECT butsv AS buts FROM match WHERE match.paysv = 'France'
) as R;
