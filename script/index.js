/*
 * @Descripttion: main js
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-07-03 21:22:30
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-07-05 12:46:44
 */
// 定义控制器
const controller = new ScrollMagic.Controller();

const bannerSceneOptions = {
  backgroundColor: '#F5F8FA',
  color: 'black'
}
// 定义场景 Banner
const bannerScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  duration: '20%' // pin the element for 400px of scrolling
})
bannerScene.setTween('.banner', {
  ...bannerSceneOptions,
  minHeight: '50vh',
  marginTop: '20vh'
});

// Banner Card
const bannerCardScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  duration: '20%' // pin the element for 400px of scrolling
})
bannerCardScene.setTween('.banner .card', {
  ...bannerSceneOptions,
  backgroundColor: 'white' ,
  right: '25%'
});

// Banner Content
const bannerContentScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  duration: '20%' // pin the element for 400px of scrolling
})
bannerContentScene.setTween('.banner .banner-content', {
  ...bannerSceneOptions,
  left: '25%',
});

// Cascade
const cascadeScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  triggerElement: '.cascade'
})
cascadeScene.setClassToggle('.cascade', 'cascade-active')

// Dot Menu
const dotScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  triggerElement: '.dot-box'
})
dotScene.setClassToggle('.dot-box', 'active')

// Drawer
const bannerDrawerScene = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for 100px
  triggerElement: '.drawer-card'
})
bannerDrawerScene.setTween('.drawer-card', { backgroundColor: '#8c86fe' });

/* Open Source BEGIN */

// Cat Car
const mpImages = [
  '../images/car/mp1.png',
  '../images/car/mp2.png',
  '../images/car/mp3.png',
  '../images/car/mp4.png',
  '../images/car/mp5.png',
  '../images/car/mp6.png',
  '../images/car/mp7.png',
  '../images/car/mp8.png',
  '../images/car/mp9.png',
  '../images/car/mp10.png',
]
openSourceTween(mpImages, '.open-source-img')
// Pc
const pcImages = [
  '../images/car/pc1.png',
  '../images/car/pc2.png',
  '../images/car/pc3.png',
  '../images/car/pc4.png',
]
openSourceTween(pcImages, '.open-source-pc-img')

function openSourceTween(list = [], el) {
  // TweenMax can tween any property of any object. We use this object to cycle through the array
  const obj = { curImg: 0 };

  // create tween
  const tween = TweenMax.to(obj, 0.5,
    {
      curImg: list.length - 1,	// animate propery curImg to number of images
      roundProps: 'curImg',				// only integers so it can be used as an array index
      repeat: 3,									// repeat 3 times
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        document
          .querySelector(el)
          .setAttribute('src', list[obj.curImg])
      }
    }
  )
  // build scene
  new ScrollMagic.Scene({ triggerElement: '.open-source-trigger', duration: 500 })
    .setTween(tween)
    .addTo(controller);
}
/* Open Source END */

// 控制器添加场景
controller.addScene([
  bannerScene,
  bannerCardScene,
  bannerContentScene,
  cascadeScene,
  dotScene,
  bannerDrawerScene
]);