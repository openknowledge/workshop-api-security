import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor() {
  }

  getProfile(username: 'Grumpy Cat' | 'Hamilton Hipster Cat' | 'Lil Bub' | 'Wilfred Warrior' | 'Tyson') {
    switch (username) {
      case "Grumpy Cat":
        return {username: 'Grumpy Cat', bio: 'The World\'s grumpiest cat! #TeamGrumpy', image: 'assets/grumpy.jpg'};
      case "Hamilton Hipster Cat":
        return {
          username: 'Hamilton Hipster Cat',
          bio: 'Mustache Cat. Yes, it\'s real.\n',
          image: 'assets/hamilton.jpg'
        };
      case "Lil Bub":
        return {username: 'Lil\' bub', bio: 'It\'s me, BUB.\n', image: 'assets/lilbub.jpg'};
      case "Wilfred Warrior":
        return {
          username: 'Wilfred Warrior',
          bio: 'I am a Chinchilla Persian. My pedigree name is Fearless Warrior but my mum calls me Wilfred.',
          image: 'assets/wilfred-worrior2-quadrat.png'
        };
      case "Tyson":
        return {username: 'Tyson', bio: 'I love fighting with cats', image: 'assets/Tyson.png'};
    }
  }
}
