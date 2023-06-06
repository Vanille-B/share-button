function ShareButtonAction() {
  const shareButtonEventListener = document.getElementById('share-button');
  let shareSectionParent = document.querySelector('.share-social-network-button');

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
      // console.log('click: Screen width > 769px');
      console.log('Link: https://google.com copied');
      navigator.clipboard.writeText('https://google.com');
      
      shareSectionParent.classList.add('clicked');
      let divTextCopyLink = document.createElement('div');
      divTextCopyLink.className = 'link-class';

      setTimeout(() => {
        divTextCopyLink.className = 'link-class fade-in';
      }, 100);

      divTextCopyLink.textContent = 'Link copied !';

      shareSectionParent.insertAdjacentElement('afterend', divTextCopyLink);

      setTimeout(() => {
        shareButtonEventListener.textContent = 'Share this link';

        setTimeout(() => {
          shareSectionParent.classList.remove('clicked');
          divTextCopyLink.classList.add('fade-out');

          setTimeout(() => {
            divTextCopyLink.remove();
          }, 300);
        }, 200);
      }, 1500);
    }
  };

  shareButtonEventListener.addEventListener('click', handleClick);
}

ShareButtonAction();
