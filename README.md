<p align="center">Bouton de Partage</p>

# Informations [FR]
Ce projet est une démonstration d'un bouton de partage réactif qui s'adapte en fonction de la taille de l'écran. Il permet aux utilisateurs de partager du contenu via les applications de partage natives de leur système d'exploitation (Android ou iOS) ou directement depuis une page web en copiant un lien dans le presse-papiers.

## Fonctionnalités

- Pour les écrans de petite taille (inférieure ou égale à 768 pixels), le bouton utilise l'API `navigator.share` pour permettre le partage du contenu (titre, texte et URL) via les applications de partage natives disponibles sur le dispositif de l'utilisateur.
- Pour les écrans de grande taille (supérieure à 768 pixels), le bouton copie automatiquement une URL spécifiée dans le presse-papiers de l'utilisateur et affiche un message de succès.

## Instructions d'utilisation

1. Clonez ce dépôt sur votre machine locale.
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Testez le bouton de partage en cliquant dessus et observez le comportement en fonction de la taille de votre écran.
4. Explorez le code JavaScript dans le fichier `share-button.js` pour comprendre comment la logique du bouton de partage est implémentée.

Vous pouvez également expérimenter le projet en utilisant l'URL de démonstration suivante : https://share-button-responsive.netlify.app/ Cela vous permettra d'explorer les fonctionnalités et de tester le bouton de partage dans un environnement de développement.



## Contributions

Les contributions à ce projet sont les bienvenues. Si vous souhaitez améliorer ou ajouter des fonctionnalités, veuillez créer une pull request. Merci d'avance pour votre contribution !

## Licence

Ce projet est sous licence MIT. Veuillez consulter le fichier `LICENSE` pour plus d'informations.



# Informations [EN]

This project is a demonstration of a responsive share button that adapts based on the screen size. It allows users to share content either through the native sharing applications of their operating system (Android or iOS) or directly from a web page by copying a link to the clipboard.

## Features

- For small screens (less than or equal to 768 pixels), the button utilizes the `navigator.share` API to enable content sharing (title, text, and URL) through the available native sharing applications on the user's device.
- For large screens (greater than 768 pixels), the button automatically copies a specified URL to the clipboard and displays a success message.

## Usage Instructions

1. Clone this repository to your local machine.
2. Open the `index.html` file in your browser.
3. Test the share button by clicking on it and observe its behavior based on your screen size.
4. Explore the JavaScript code in the `share-button.js` file to understand how the share button logic is implemented.

You can also test the project by using the following demo URL: https://share-button-responsive.netlify.app/ This will allow you to explore the features and test the share button in a development environment.

## Contributions

Contributions to this project are welcome. If you wish to enhance or add new features, please create a pull request. Thank you in advance for your contribution!

## License

This project is licensed under the MIT License. Please refer to the `LICENSE` file for more information.
