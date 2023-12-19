grammar scenario;

// Parser rules
scenario
    : comment* (command|EMPTY_LINE)* EOF
    ;

comment
    :  ( ' ' | '\t' )* WORD 
    ;

command
    : STAR ( ' ' | '\t' )* (bbox | layer | move | navigation | chart | image | text| image3D | audio | video | speech | video3D | fireworks |simulation) 
    ;

simulation:
    'simulation' SEP (json)
    ;

json:
    'json' SEP WORD SEP WORD SEP bool SEP WORD SEP NUMBER SEP bool SEP bool SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER SEP meteo
    ;

meteo :
    'meteo' SEP ('arome' | 'arpege')
    ;

image:
    'image' SEP WORD SEP WORD SEP NUMBER SEP NUMBER 
    ;

text:
    'text' SEP WORD SEP WORD
    ;

image3D:
    'image3D' SEP WORD SEP WORD SEP NUMBER SEP NUMBER
    ;

audio:
    'audio' SEP WORD SEP WORD SEP bool
    ;

video:
    'video' SEP URL SEP WORD SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER
    ;

speech:
    'speech' SEP WORD SEP WORD
    ;

video3D:
    'video3D' SEP WORD SEP WORD SEP NUMBER SEP NUMBER
    ;

fireworks:
    'fireworks' SEP NUMBER SEP NUMBER
    ;


vector
    : 'vector' SEP ('depare' | 'hrbare' | 'resare' | 'buoyage' | 'staticLight' | 'dynamicLight' | 'wrecks')
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
    : flyTo
    ; 

flyTo 
: 'flyTo' SEP mobile; 

mobile 
: camera | ship; 

camera 
: 'camera' (SEP NUMBER SEP NUMBER SEP NUMBER) | 'camera' (SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER)
; 

ship 
: 'ship' SEP NUMBER SEP NUMBER SEP NUMBER
;


bbox
    : 'bbox' SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER
    ;

// Définition de la commande chart
chart
    : 'chart' SEP (raster|vector|mbtiles)
    ;

raster
    : 'raster' SEP  (shom|'openSeaMap'|'openTopoMap')
    ;

shom
    :
    NUMBER WORD*
    ;

mbtiles
    : 'mbtiles' SEP ('manche' | 'atlantiqueNord' | 'egee')
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

bool: 
    'true' | 'false'
    ;

// Lexer rules
EMPTY_LINE
    : '\r' | '\n'
    ;

    
SEP
    : ','
    ;

NUMBER
    :  '-'? [0-9]+ ('.' [0-9]+)?
    ;


WORD
    : [a-zA-Z_.]+
    ;


TEXT
    : [a-zA-Z_0-9]+
    ;


SYMBOLES
    :[!"#$%&'()+\-./:;<=>?@^_`{|}]+
    ;
URL
    : 'https://' HOSTNAME (':' PORT)? '/embed'? '/' (TEXT | SYMBOLES)+
    ;

HOSTNAME
    : (TEXT '.' HOSTNAME) | (TEXT '.' TEXT)
    ;

PORT
    : [0-9]+
    ;

WS
    : [ \t] + -> skip
    ;

STAR : '*' 
     ;
     
NL : '\r'? '\n' 
   ;


