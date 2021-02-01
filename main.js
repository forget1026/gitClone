(function (window, document) {
    'use strict';
    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', toggleElements);

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            // off Toggle
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.toggle('on');
        }); 
    }

    function offElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.remove('on');
        })
    }
})(window, document)