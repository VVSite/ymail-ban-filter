// ==UserScript==
// @name         Yandex Mail Banner Filter
// @namespace    http://tampermonkey.net/
// @version      2026-08-24
// @description  Filter banners for YMail
// @author       VVSite
// @match        https://mail.yandex.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @homepageURL    https://github.com/VVSite/ymail-ban-filter/
// @updateURL      https://github.com/VVSite/ymail-ban-filter/blob/main/ym-ban-flt.js
// @downloadURL    https://github.com/VVSite/ymail-ban-filter/blob/main/ym-ban-flt.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let bl1 = function()
    {
        var right_block_arr = ['div[data-testid="page-layout_right-column_container"]', 'div[data-testid="page-layout_right-column_container_v1"]', 'div[data-testid="page-layout_body_container"]'];
        let right_block = null;
        right_block_arr.forEach(function(v, k){
            right_block = document.querySelector(v);
            if (right_block) return true;
        });

        if (right_block) right_block.children[1].remove();

        //
        var top_block_arr =['div#js-mail-layout-content-header', 'div#js-mail-layout-content-header-v1'];
        let top_block = null;
        top_block_arr.forEach(function(v, k){
            top_block = document.querySelector(v);
            if (top_block) return true;
        });

        if (top_block)
        {
            let ch2 = top_block.childNodes;
            if (ch2[1] && !ch2[1].hasAttribute('data-react-focus-root')) ch2[1].style.display = 'none';
            if (ch2[2] && !ch2[2].hasAttribute('data-react-focus-root')) ch2[2].style.display = 'none';
        }
    }

    setInterval(bl1, 10000);

})();
