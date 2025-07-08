// ==UserScript==
// @name         Yandex Mail Filter
// @namespace    http://tampermonkey.net/
// @version      2025-07-04
// @description  Filter banners for YMail
// @author       VVSite
// @match        https://mail.yandex.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @homepageURL    https://github.com/VVSite/ymail-ban-filter/
// @updateURL      https://github.com/VVSite/ymail-ban-filter/ym-ban-filt.js
// @downloadURL    https://github.com/VVSite/ymail-ban-filter/ym-ban-filt.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let bl1 = function()
    {
        let right_block = document.querySelector('div[data-testid="page-layout_right-column_container"]');
        if (right_block) right_block.remove();

        let top_block = document.querySelector('div#js-mail-layout-content-header');
        if (top_block)
        {
            let ch2 = top_block.childNodes;
            if (ch2[1]) ch2[1].style.display = 'none';
        }
    }

    setInterval(bl1, 10000);

})();
