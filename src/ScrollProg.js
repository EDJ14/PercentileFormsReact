import React from 'react';
import './css/scrollProg.css';

export default function ScrollProg() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    console.log('scrolling');
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }
  return (
    <div>
      <div class="header">
        <h2>Scroll Indicator</h2>
        <div class="progress-container">
          <div class="progress-bar" id="myBar" />
        </div>
      </div>
      <div>
        content...dafadfadsfa adsfadsfadsfas adsfadsfadsf adsfadsfadsf
        asdfdasfadsf adsfdsafdasf content...dafadfadsfa adsfadsfadsfas
        adsfadsfadsf adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf adsfdsafdasf
        content...dafadfadsfa adsfadsfadsfas adsfadsfadsf adsfadsfadsf
        asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas
        adsfadsfadsf adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasf content...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf
        adsfdsafdasfcontent...dafadfadsfa adsfadsfadsfas adsfadsfadsf
        adsfadsfadsf asdfdasfadsf adsfdsafdasfcontent...dafadfadsfa
        adsfadsfadsfas adsfadsfadsf adsfadsfadsf asdfdasfadsf adsfdsafdasf
      </div>
    </div>
  );
}
