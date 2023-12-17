# Guide d'Installation et de Configuration d'ANTLR

ANTLR (ANother Tool for Language Recognition) est un puissant générateur de parseur utilisé pour lire, traiter, exécuter ou traduire du texte structuré ou des fichiers binaires. Il est largement utilisé pour construire des langages, des outils et des frameworks.

## Prérequis

- Java Development Kit (JDK) : ANTLR est écrit en Java, donc le JDK doit être installé sur votre système. Vous pouvez télécharger le JDK depuis [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) ou [OpenJDK](https://openjdk.java.net/install/index.html).

## Installation d'ANTLR

### Étape 1 : Télécharger ANTLR

1. Allez sur le site web d'ANTLR à l'adresse [ANTLR Download](https://www.antlr.org/download.html).
2. Téléchargez la version 4.13.1 du fichier jar d'ANTLR, par exemple `antlr-4.13.1-complete.jar`.
3. Installez le runtime ANTLR via npm ou pip:
   - Pour Node.js (npm):
     ```bash npm install antlr4 ```
   - Pour Python (pip):
     ```bash pip install antlr4-python3-runtime ```

### Étape 2 : Configurer ANTLR

1. Placez le fichier jar téléchargé dans un répertoire de votre choix. Ce répertoire sera utilisé pour stocker le jar d'ANTLR.

2. Configurez la variable d'environnement `CLASSPATH` pour inclure le chemin du fichier jar ANTLR. Sur les systèmes basés sur Unix/Linux/Mac, vous pouvez ajouter cette ligne à votre fichier `.bashrc`, `.zshrc`, ou autre fichier de profil de shell :
   ```bash
   export CLASSPATH=".:/chemin/vers/antlr-4.13.1-complete.jar:$CLASSPATH"
   
 ### Étape 3 : Tester l'installation d'ANTLR

 Afficher la version installée :  ```java -jar /chemin/vers/antlr-4.13.1-complete.jar -version```
 
 ## Utilisation
 
 1. Modifier le fichier [scenario.g4][scenario.g4]
 2. 
 
