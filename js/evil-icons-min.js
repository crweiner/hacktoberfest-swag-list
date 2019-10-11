/*
 * Evil Icons 1.9.0
 * http://evil-icons.io
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * Copyright 2014-2016 Alexander Madyankin <alexander@madyankin.name>, Roman Shamin <al4emist.artway@gmail.com>
 */


!function(c){"use strict";function h(){var h='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none">te" style="display:none"><symbol id=\'ei-archive-icon\' viewBox=\'0 0 50 50\'><path d="M42 20h-2v-5c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v5H8v-5c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v5z"></path><path d="M37 40H13c-1.7 0-3-1.3-3-3V20h2v17c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V20h2v17c0 1.7-1.3 3-3 3z"></path><path d="M29 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path d="M8 18h34v2H8z"><symbol id=\'ei-arrow-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path><path d="M24 16h2v17h-2z"></path></symbol></svg>';
c.querySelector("body").insertAdjacentHTML("afterbegin",h)}function t(c,h){var h=h||{},t=h.size?"icon--"+h.size:"",p="icon icon--"+c+" "+t+" "+(h["class"]||""),l="<svg class='icon__cnt'><use xlink:href='#"+c+"-icon' /></svg>",i="<div class='"+p+"'>"+a(l,p)+"</div>";return i}function a(c,h){return h.indexOf("spinner")>-1?"<div class='icon__spinner'>"+c+"</div>":c}function p(){for(var h=c.querySelectorAll("[data-icon]"),a=0;a<h.length;a++){var p=h[a],l=p.getAttribute("data-icon"),i={"class":p.className,size:p.getAttribute("data-size")};p.insertAdjacentHTML("beforebegin",t(l,i)),p.parentNode.removeChild(p)}}c.addEventListener("DOMContentLoaded",function(){h(),p()})}(window.document);
