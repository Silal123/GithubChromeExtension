if (!window.fillConfirmRunning) {
    window.fillConfirmRunning = true;
    let infoButtonUrl;

    setInterval(() => {
        console.debug("scann..");
        let deleteButton = document.getElementById('dialog-show-repo-delete-menu-dialog');
        let loopId;
            
        if (deleteButton && infoButtonUrl !== window.location.href) {
            console.debug("found delete button, adding listener!");
            infoButtonUrl = window.location.href;

            deleteButton.addEventListener('click', () => {
                console.debug('triggered the delete button!');
                
                let closeButton = document.querySelector('[data-close-dialog-id="repo-delete-menu-dialog"]');
                if(closeButton) {
                    closeButton.addEventListener('click', () => {
                        clearInterval(loopId);
                        console.debug('cleared loop');
                    });
                }
                
                loopId = setInterval(() => {
                    console.debug("Loop:" + String(loopId));
                    let verificationField = document.getElementById('verification_field');

                    if (verificationField) {
                        console.debug('verification field found!');
                        let args = window.location.href.replace('https://', '').split('/');
                        let repo = args[1] + '/' + args[2];
                
                        verificationField.focus();
                        verificationField.setRangeText(repo);
                        verificationField.dispatchEvent(new Event("input", { bubbles: true }));
                
                        clearInterval(loopId);
                    }
                }, 500);
            });
        }
    }, 100);
}