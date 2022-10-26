SELECT paysl FROM match WHERE paysv='France'
UNION
SELECT paysv FROM match WHERE paysl='France';
