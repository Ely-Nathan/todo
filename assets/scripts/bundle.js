!function e(t,n,r){function o(c,l){if(!n[c]){if(!t[c]){var d="function"==typeof require&&require;if(!l&&d)return d(c,!0);if(a)return a(c,!0);var i=new Error("Cannot find module '"+c+"'");throw i.code="MODULE_NOT_FOUND",i}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){var n=t[c][1][e];return o(n||e)},u,u.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.getElementsByTagName("LI");for(r=0;r<e.length;r++){var t=document.createElement("SPAN"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e[r].appendChild(t)}var r,o=document.getElementsByClassName("close");for(r=0;r<o.length;r++)o[r].onclick=function(){this.parentElement.style.display="none"}}function t(){var e=document.getElementById("myUL"),t=e.childNodes,n=[];for(var r in t)1==t[r].nodeType&&n.push(t[r]);for(n.sort(function(e,t){return e.className==t.className?0:e.className>t.className?1:-1}),r=0;r<n.length;++r)e.appendChild(n[r])}e(),document.querySelector("ul").addEventListener("click",function(n){"LI"===n.target.tagName&&(n.target.classList.toggle("checked"),n.target.innerHTML="<span class='checkmark draw load-complete'></span>"+n.target.innerHTML,t(),e())},!1),document.getElementById("add").addEventListener("click",function(){var n=document.createElement("li"),r=document.getElementById("myInput").value,o=document.createTextNode(r);n.appendChild(o),""===r?alert("You must write something!"):document.getElementById("myUL").appendChild(n),document.getElementById("myInput").value="";var a=document.createElement("SPAN"),c=document.createTextNode("×");for(a.className="close",a.appendChild(c),n.appendChild(a),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};t(),e()})})},{}]},{},[1]);