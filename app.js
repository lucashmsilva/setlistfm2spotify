const { JSDOM } = require('jsdom');

async function run() {
  const dom = await JSDOM.fromURL('https://www.setlist.fm/setlist/blind-guardian/2023/memorial-da-america-latina-sao-paulo-brazil-7bb80ad0.html');

  const artist = encodeURI(dom.window.document.querySelector('.setlistHeadline > h1 > strong > span > a >span').textContent);

  const nodeList = dom.window.document.querySelectorAll('.setlistList > ol > li:not(.hidden-print,.section,.encore)');
  const songs = Array.from(nodeList.values()).map(e => encodeURI(e.textContent.replace(/(\n+|Play Video|Song played from tape|\(.+\))/g, '')));

  console.log(songs);
  console.log(songs.length);
  console.log(artist);
}

run();