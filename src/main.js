import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ background: '#1e293b', height: 200 });

const featured = document.getElementById('featured');
featured.appendChild(app.view);

PIXI.Assets.load('https://pixijs.com/assets/spritesheet/mc.json').then(() =>
{
    // create an array to store the textures
    const explosionTextures = [];
    let i;

    for (i = 0; i < 26; i++)
    {
        const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);

        explosionTextures.push(texture);
    }

    for (i = 0; i < 50; i++)
    {
        // create an explosion AnimatedSprite
        const explosion = new PIXI.AnimatedSprite(explosionTextures);

        explosion.x = Math.random() * app.screen.width;
        explosion.y = Math.random() * app.screen.height;
        explosion.anchor.set(0.5);
        explosion.rotation = Math.random() * Math.PI;
        explosion.scale.set(0.75 + Math.random() * 0.5);
        explosion.gotoAndPlay(Math.random() * 26 | 0);
        app.stage.addChild(explosion);
    }

    // start animating
    app.start();
});


const cardTemplate = document.getElementById('card');
const cardContainer = document.getElementById('card-container');

for(let i = 0; i < 9; i++) {
const card = cardTemplate.content.cloneNode(true);
cardContainer.appendChild(card);
}