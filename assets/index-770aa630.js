(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",o),t.closeMenuBtn.addEventListener("click",o);function o(){!t.menu.classList.contains("is-hidden")?(t.menu.style.left="-900px",document.body.classList.remove("no-scroll")):(t.menu.style.left="0",document.body.classList.add("no-scroll")),t.menu.classList.toggle("is-hidden")}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll("[data-menu-open]"),o=document.querySelectorAll("[data-menu-close]"),s=document.querySelector("[data-menu]");t.forEach(e=>{e.addEventListener("click",function(){s.classList.remove("is-hidden")})}),o.forEach(e=>{e.addEventListener("click",function(){s.classList.add("is-hidden")})}),document.querySelectorAll(".mob-menu-item a").forEach(e=>{e.addEventListener("click",function(){s.classList.add("is-hidden")})})});