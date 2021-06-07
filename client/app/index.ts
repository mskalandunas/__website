import { ApplicationRegistrar } from './registry';

const subApp = {
  mount() {
    console.log(document.getElementById('SubApp'));
  }
}

new ApplicationRegistrar().register(subApp).bootstrap();