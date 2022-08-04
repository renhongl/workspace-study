import { loadImage, loadImageProxy } from '..';

export function testImageProxy() {
  const div = document.body;

  const url =
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  // loadImage(url, div).then(() => {
  //   div.style.backgroundImage = `url(${url})`;
  // });

  loadImageProxy(url, div).then(() => {
    div.style.backgroundImage = `url(${url})`;
  });
}
