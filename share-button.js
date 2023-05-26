function ShareButtonEventDefi() {
    const ShareButtonEventListener = document.getElementById('share-button');
    let ShareSectionParent = document.querySelector('.share-social-network-button');
  
    const handleClick = () => {
      if (window.screen.width <= 768) {
        console.log("Screen < 768px");
        if (navigator.share) {
          navigator.share({
            title: 'Title',
            text: 'Text',
            url: 'https://google.com',
          })
          .then(() => console.log('Check'))
          .catch((error) => console.log('Erreur ', error));
        }
      } else {
        console.log("Screen width > 769px");
        console.log('click: Screen width > 769px');
        console.log('Link: https://google.com copied');
        navigator.clipboard.writeText('https://google.com');
        
        ShareButtonEventListener.textContent = 'Link copied to clipboard';
  
        // Restaure le texte initial après 2 secondes
        setTimeout(() => {
          ShareButtonEventListener.textContent = 'Share';
        }, 2000);
      }
    };
  
    ShareButtonEventListener.addEventListener('click', handleClick);
  }
  
  ShareButtonEventDefi();
  