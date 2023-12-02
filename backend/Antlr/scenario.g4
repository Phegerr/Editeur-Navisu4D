grammar scenario;

// Parser rules
scenario
    : comment* (command|EMPTY_LINE)* EOF
    ;

comment
    :  ( ' ' | '\t' )* CONTENT 
    ;

command
    : STAR ( ' ' | '\t' )* (bbox | layer | move | navigation) 
    ;

navigation
    : 'navigation' SEP (pilotchart | 'avurnav')
	;

pilotchart
	:'pilotchart' SEP 'NAC' SEP ( '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12')
	;

move 
: 'move' SEP moveType; 
moveType 
: flyTo; 

flyTo 
: 'flyTo' SEP mobile; 

mobile 
: camera | ship; 

camera 
: 'camera' SEP NUMBER SEP NUMBER SEP NUMBER; 

ship 
: 'ship' SEP NUMBER SEP NUMBER SEP NUMBER;


bbox
    : 'bbox' SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER
    ;

// Définition de la commande layer
layer
    :  'layer' SEP (bathymetry | oceanography)
    ;

oceanography:
	'oceanography' SEP (tides | currents)
    ;

tides
    :'tides' SEP ('type' | 'oceanogram')
    ;

currents
    : 'currents' SEP (tidalAtlas | forecast)
    ;

tidalAtlas
    : 'tidalAtlas' SEP (oceano2D | oceano3D)
    ;

oceano2D
    :  '2D' SEP 'max'
    ;

oceano3D
    :  '3D' SEP (manche|fromveur|iroise)
    ;

fromveur
    : 'fromveur' SEP ('surface'|'midle'|'bottom')
    ;

manche
    : 'manche' SEP ('surface'|'midle'|'bottom')
    ;

iroise
    : 'iroise' SEP ('surface'|'midle'|'bottom')
    ;

forecast
    : 'forecast' SEP ('static' | 'dynamic')
    ;

    // Code de l'arbre bathymétrie et altimétrie
bathymetry
    : 'bathymetry' SEP ('emodnet' | 'gebco' | 'homonim' | sonar | litto3D)
    ;
    
sonar
	: 'sonar' SEP 'emodnet'
	;

litto3D
    : 'litto3D' SEP ('saint-barthelemy' | 'saint-martin' | 'guadeloupe' | 'finistere' | 'languedoc-roussillon' | 'provence' | 'eparses' | 'mayotte' | 'reunion' | 'normandie' | 'bretagne' | 'iroise' | 'morbihan' | 'rance' | 'corse' | 'manche' | 'fromveur')
	;

// Lexer rules
EMPTY_LINE
    : '\r' | '\n'
    ;

CONTENT
    : [a-zA-Z0-9_][a-zA-Z0-9_ \t]*
    ;    

SEP
    : ','
    ;

SIGN
    : ('+' | '-')
    ;

NUMBER
    : SIGN? ('0' .. '9') + ('.' ('0' .. '9') +)?
    ;

WORD: [a-zA-Z0-9_]+ ;


WS
    : [ \t] + -> skip
    ;

STAR : '*' 
     ;
     
NL : '\r'? '\n' 
   ;


//EMODNET:'emodnet';
// SAINT_BARTHELEMY: 'saint-barthelemy';
// SAINT_MARTIN: 'saint-martin';
// GUADELOUPE: 'guadeloupe';
// FINISTERE: 'finistere';
// LANGUEDOC_ROUSSILLON: 'languedoc-roussillon';
// PROVENCE: 'provence';
// EPARSES: 'eparses';
// MAYOTTE: 'mayotte';
// REUNION: 'reunion';
// NORMANDIE: 'normandie';
// BRETAGNE: 'bretagne';
// IROISE: 'iroise';
// MORBIHAN: 'morbihan';
// RANCE: 'rance';
// CORSE: 'corse';
// MANCHE: 'manche';
// FROMVEUR: 'fromveur';
