SELECT paysl FROM match WHERE match.type='Finale' AND match.butsl > match.butsv 
UNION
SELECT paysv FROM match WHERE match.type='Finale' AND match.butsv > match.butsl;
