console.debug("Instant Delete Init")
const informationContainer = document.getElementById('repository-details-container');

if (informationContainer) {
    console.debug("Information Container");
    const informationList = Array.from(informationContainer.getElementsByTagName('ul'));

    informationList.forEach(element => {
        const instantDelete = document.createElement('li');
        instantDelete.innerHTML = `
            <style>
                .delete-btn {
                    height: 28px;
                    display: inline-flex;
                    align-items: center;
                    padding: 3px 12px;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 20px;
                    color: #ffffff;
                    background-color: #f0883e;
                    border: 1px solid rgba(240, 246, 252, 0.1);
                    border-radius: 6px;
                    cursor: pointer;
                    user-select: none;
                    appearance: none;
                    text-decoration: none;
                    text-align: center;
                }
                
                .delete-btn:hover {
                    background-color: #e07730;
                }
                
                .delete-btn svg {
                    margin-right: 4px;
                }
            </style>

            <button id="gh-ex-instant-delete" class="delete-btn">
                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
                </svg>
                Delete
            </button>
        `;
        element.appendChild(instantDelete);

        const deleteButton = document.getElementById('gh-ex-instant-delete');

        if (deleteButton) {
            deleteButton.addEventListener('click', () => {
                fetch('https://github.com/Silal123/KahootBot/settings/delete', { method: 'POST' })
            });
        }
    });
}