grammar scenario;

// Parser rules
scenario
    : comment* (command|EMPTY_LINE)* EOF
    ;

comment
    :  ( ' ' | '\t' )* CONTENT 
    ;

command
    : STAR ( ' ' | '\t' )* (bbox | layerCommand | moveCommand | chart |navigationCommand|simulationCommand| multimediaCommand)
    ;

// Code de l'arbre multimedia
multimediaCommand
    : STAR multimediaType 
    ;

multimediaType
    : IMAGE
    | IMAGE3D
    | VIDEO
    | VIDEO3D
    | FIREWORKS
    | TEXT
    ;

lonlat
	: NUMBER SEP NUMBER SEP NUMBER SEP NUMBER
	;
image
	:IMAGE SEP FILENAME
	;

image3D
	:IMAGE3D SEP FILENAME SEP lonlat
	;

video
	: VIDEO SEP FILENAME
	;

video3D
	: VIDEO3D SEP FILENAME
	;

fireworks
	: FIREWORKS SEP lonlat
	;

// Code de l'arbre navigation
navigationCommand
    : (pilotchart | AVURNAV)
	;

pilotchart
	:PILOTCHART SEP NAC
	;

nac
    : NAC 
	;


// Code de l'arbre simulation
simulationCommand
    : STAR SIMULATION SEP (gpx| nmea | meteo) ;

gpx
    : GPX SEP filename SEP model SEP boolean SEP audio SEP speed SEP boolean SEP boolean SEP height SEP color SEP meteo
	;

nmea
    : NMEA SEP filename SEP model SEP boolean SEP audio SEP speed SEP boolean SEP boolean SEP height SEP color SEP meteo
	;

meteo
    : METEO SEP (arome| arpege) ;

arome
    : AROME;

arpege
    : ARPEGE;

// Common rules for parameters
filename
    : FILENAME ;

model
    : MODEL ;

boolean
    : BOOLEAN ;

audio
    : AUDIO ;

speed
    : SPEED ;

height
    : HEIGHT ;

color
    : R SEP G SEP B SEP A ;


// Définition de la commande layer
layerCommand
    : STAR LAYER SEP (bathymetry | oceanography)
	;

// Code de l'arbre bathymétrie et altimétrie
bathymetry
    : BATHYMETRY SEP (EMODNET | GEBCO | HOMONIM | sonar | LITTO3D)
    ;

sonar
	: SONAR SEP EMODNET
	;

litto3D
	: LITTO3D SEP (SAINT_BARTHELEMY | SAINT_MARTIN | GUADELOUPE |FINISTERE|LANGUEDOC_ROUSSILLON|PROVENCE|EPARSES|MAYOTTE|REUNION|NORMANDIE|BRETAGNE|IROISE|MORBIHAN|RANCE|CORSE|MANCHE|FROMVEUR)
	;

// Code de l'arbre courants et marées
oceanography:
	(tidesCommand | currentsCommand)
    ;

tidesCommand
    : (type | oceanogram)
    ;

currentsCommand
    : (tidalAtlas | forecastCommand)
    ;

forecastCommand
    : FORECAST SEP (staticCommand | dynamicCommand)
    ;

type
    : TYPE 
    ;

oceanogram
	: OCEANOGRAM  
	; 

oceano2D
    :  '2D' SEP max
    ;

max
	: MAX SEP layer
	;

oceano3D
    :  '3D' SEP (manche|fromveur|iroise)
    ;

manche
	: MANCHE SEP layer
	;

fromveur
	: FROMVEUR SEP layer
	;

iroise
	: IROISE SEP layer
	;
tidalAtlas
    : (oceano2D | oceano3D)
    ;

staticCommand
    : STATIC 
    ;

dynamicCommand
    : DYNAMIC 
    ;

layer
    : SURFACE | MIDDLE | BOTTOM
    ;

// Code de l'arbre caméra et mouvements
moveCommand
    : STAR MOVE SEP FLYTO SEP CAMERA SEP coordinate SEP coordinate SEP altitude
    ;

coordinate
    : NUMBER
    ;

altitude
    : NUMBER
    ;

chart
    : CHART SEP (rasterType|vectorType|mbtilesType)
    ;


rasterType
    : RASTER SEP (SHOM | OPEN_SEA_MAP | OPEN_TOPO_MAP)
    ;

vectorType
    : VECTOR SEP (DEPARE | HRBARE | RESARE | BUOYAGE | STATIC_LIGHT | DYNAMIC_LIGHT | WRECKS)
    ;

mbtilesType
    : MBTILES SEP name
    ;

name
    : NAME
    ;

shom
    : SHOM
    | NUMBER
    ;

bbox
    : BBOX SEP NUMBER SEP NUMBER SEP NUMBER SEP NUMBER
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


DIGIT: [0-9] ;
HTTP: 'http://' ;
HTTPS: 'https://' ;
PATH: (WORD ('/' | '\\'))+ ; // Paths can have multiple WORDs separated by slashes
EXTENSION: WORD ;


WS
    : [ \t] + -> skip
    ;

STAR: '*' ;
NL: '\r'? '\n' ;


// Keywords and Tokens
IMAGE: 'image' ;
IMAGE3D: 'image3D' ;
VIDEO: 'video' ;
VIDEO3D: 'video3D' ;
FIREWORKS: 'fireworks' ;
SPEECH: 'speech' ;
TEXT: 'text' ;
FILENAME: (HTTP | HTTPS | PATH | WORD) ('.' EXTENSION) ; 
TEXT_CONTENT: (~[,\r\n]+) ; 
LOOP: 'loop' ;
SIMULATION: 'simulation' ;
GPX: 'gpx' ;
NMEA: 'nmea' ;
METEO: 'meteo' ;
AROME: 'arome' ;
ARPEGE: 'arpege' ;
MODEL: WORD ('.' WORD) ; 
BOOLEAN: 'true' | 'false' ;
AUDIO: ('silent' | WORD ('.' WORD)) ; 
SPEED: NUMBER ('.' NUMBER)? ;
HEIGHT: NUMBER ;
R: NUMBER ;
G: NUMBER ;
B: NUMBER ;
A: NUMBER ;
PILOTCHART: 'pilotchart' ;
AVURNAV: 'avurnav' ;
NAC: '{' (NUMBER (',' NUMBER)*)? '}' ;
BBOX: 'bbox';
LAYER: 'layer';
MOVE: 'move';
FLYTO: 'flyTo';
CAMERA: 'camera';
ALTIMETRY: 'altimetry';
EMODNET: 'emodnet';
GEBCO: 'gebco';
HOMONIM: 'homonim';
SONAR: 'sonar';
LITTO3D: 'litto3D';
BATHYMETRY: 'bathymetry';
OCEANOGRAPHY: 'oceanography';
TIDES: 'tides';
CURRENTS: 'currents';
FORECAST: 'forecast';
TYPE: 'type';
STATIC: 'static';
DYNAMIC: 'dynamic';
OCEANOGRAM: 'oceanogram';
TIDALATLAS: 'tidalAtlas';
SURFACE: 'surface';
MIDDLE: 'middle';
BOTTOM: 'bottom';
MAX:'max';
CHART: 'chart';
RASTER: 'raster';
VECTOR: 'vector';
MBTILES: 'mbtiles';
SHOM: 'SHOM';
OPEN_SEA_MAP: 'openseaMap';
OPEN_TOPO_MAP: 'openTopoMap';
DEPARE: 'depare';
HRBARE: 'hrbare';
RESARE: 'resare';
BUOYAGE: 'buoyage';
STATIC_LIGHT: 'staticLight';
DYNAMIC_LIGHT: 'dynamicLight';
WRECKS: 'wrecks';
NAME: [a-zA-Z]+ ('_' [a-zA-Z0-9]+)*;

// Regions (existing and new ones)
SAINT_BARTHELEMY: 'Saint-Barthelemy';
SAINT_MARTIN: 'Saint-Martin';
GUADELOUPE: 'Guadeloupe';
FINISTERE: 'Finistere';
LANGUEDOC_ROUSSILLON: 'Languedoc-Roussillon';
PROVENCE: 'Provence';
EPARSES: 'Eparses';
MAYOTTE: 'Mayotte';
REUNION: 'Reunion';
NORMANDIE: 'Normandie';
BRETAGNE: 'Bretagne';
IROISE: 'iroise';
MORBIHAN: 'Morbihan';
RANCE: 'Rance';
CORSE: 'Corse';
MANCHE: 'manche';
FROMVEUR: 'fromveur';
