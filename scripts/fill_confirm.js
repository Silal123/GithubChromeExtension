(function () {
    const deleteButton = document.getElementById('dialog-show-repo-delete-menu-dialog');
    let loopId;

    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            console.debug('triggered delete function');

            const closeButton = document.querySelector('[data-close-dialog-id="repo-delete-menu-dialog"]');
            if(closeButton) {
                closeButton.addEventListener('click', () => {
                    clearInterval(loopId);
                    console.debug('cleared Loop');
                });
            }

            loopId = setInterval(() => {
                console.debug(loopId);
                const verificationField = document.getElementById('verification_field');

                if (verificationField) {
                    console.debug('f')
                    const args = window.location.href.replace('https://', '').split('/');
                    const repo = args[1] + '/' + args[2];

                    verificationField.focus();
                    verificationField.setRangeText(repo);
                    verificationField.dispatchEvent(new Event("input", { bubbles: true }));

                    clearInterval(loopId);
                }
            }, 100);
        });
    }
})();