import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

words = ["Development"];
  text = "";   // for Web line
  text2 = "";  // for App line

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      // erase letters
      this.charIndex--;
    } else {
      // type letters
      this.charIndex++;
    }

    this.text = currentWord.substring(0, this.charIndex);
    this.text2 = this.text;

    // switch to delete mode
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000); // pause before erasing
      return;
    }

    // switch to typing next word
    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    const speed = this.isDeleting ? 80 : 120; // fast erase, slow typing
    setTimeout(() => this.typeEffect(), speed);
  }
}

