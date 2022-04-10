module.exports = async function () {
  const pages = [
    {
        "url": "/",
        "title": "Psilly Belongs You 🍄 Psilly",
        "photo": "/assets/art/thumbnails/polygons.webp"
    },
    {
        "url": "/about/",
        "title": "About Psilly Corporation"
    },
    {
        "url": "/privacy/",
        "title": "Privacy Policy"
    },
    {
        "url": "/terms/",
        "title": "Website Terms of Use"
    },
    {
        "url": "/bylaws/",
        "title": "Psilly By-laws"
    },
    {
        "url": "/faq/",
        "title": "Frequently Asked Questions"
    },
    {
        "url": "/contact/",
        "title": "Contact Psilly"
    },
    {
        "url": "/join/",
        "title": "Become a Psilly Member"
    },
    {
        "url": "/donate/",
        "title": "Donate to Psilly"
    },
    {
        "url": "/sober/",
        "title": "I'm sober"
    },
    {
        "url": "/high/",
        "title": "I'm high"
    },
    {
        "url": "/toohigh/",
        "title": "I'm too high!"
    },
    {
        "url": "/experiments/",
        "title": "Extra Experimental Experiments"
    },
    {
        "url": "/art/",
        "title": "Digital Art Exhibition"
    },
    {
        "url": "/chat/",
        "title": "Psilly Chattergate"
    },
    {
        "url": "/jam/",
        "title": "Psilly Jams"
    },
    {
        "url": "/spin/",
        "title": "You pspin me right 'round, baby, right 'round..."
    },
    {
        "url": "/404/",
        "title": "Page Not Found"
    },
  ]

  // @todo import these from art/library.tsx?
  // const { default: App } = await import('./src/routes/art/library.tsx')
  const art = {
    polygonous: {
      path: 'polygonous',
      type: 'Art',
      title: 'Bisectional Polygonous Giration',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'Explores the Euclidean nature of linear geometry, from the point of view of a conscious observer, emphasizing the dichotomy of transversal relationism in a post-reactivate triptonia.',
    },
    meld: {
      path: 'meld',
      type: 'Art',
      title: 'Meld',
      created: '2016',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'An examination of permatarian meldation.'
    },
    circle: {
      path: 'circle',
      type: 'Art',
      title: 'Circle',
      created: '2018',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'A non-euclidean journey into regular ellipses.'
    },
    'golden-angle-donut': {
      path: 'golden-angle-donut',
      type: 'Art',
      title: 'Golden Angle Donut',
      created: '2016',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'Draw a straight line, then starting from the end of that line, rotate by the golden angle and draw the same line in that direction.  Continue adding new lines until you have a tasty donut.'
    },
    squibbo: {
      path: 'squibbo',
      type: 'Art',
      title: 'Squibbo',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'A post-modern take on the classical interpretation of machine-assisted squibology.'
    },
    falls: {
      path: 'falls',
      type: 'Art',
      title: 'Doge Falls',
      created: '2014',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'An exploration of the gap between quantum chromaticism and classical gravity from a Newtonian frame of doge.'
    },
    chillbert: {
      path: 'chillbert',
      type: 'Art',
      title: 'Chillbert Pspace',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'A pspace filler.'
    },
    develop: {
      path: 'develop',
      type: 'Art',
      title: 'Developer of the Abstract',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'Some paintings are veloped to look like real world things, others develop.'
    },
    quadingle: {
      path: 'quadingle',
      type: 'WIP',
      title: 'Quadingle',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'A personalized data stream mapped to a four-way hilbert curve from the centre.'
    },
    'oh-bezier': {
      path: 'oh-bezier',
      type: 'WIP',
      title: 'Oh, Bézier!',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Undescribed.'
    },
    'totally-modular-form-bro': {
      path: 'totally-modular-form-bro',
      type: 'WIP',
      title: 'Totally modular form, bro!',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Undescribed.'
    },
    untilted: {
      path: 'untilted',
      type: 'WIP',
      title: 'Untilted',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Ceci n\'est pas tiltré.'
    },
    lemnisgo: {
      path: 'lemnisgo',
      type: 'Art',
      title: 'Lem nis go!',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Sometimes lemn is moiré. Lem nis skate or lem nis go!'
    },
    'eye-of-newt': {
      path: 'eye-of-newt',
      type: 'WIP',
      title: 'Oculus Newtonius',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Booty is in the thigh of the buttholder.'
    },
    hyperbollick: {
      path: 'hyperbollick',
      type: 'Art',
      title: 'Hyper Ball Lick',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Tall tales of extreme bollock privation.'
    },
    vcock: {
      path: 'vcock',
      type: 'Art',
      title: 'Veacock',
      created: '2022',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'A colourful veacock in balls.'
    },
    gravity: {
      path: 'gravity',
      type: 'WIP',
      title: 'Gravity',
      created: '2022',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'I hope you understand the gravity of this situation.'
    },
    iball: {
      path: 'iball',
      type: 'Art',
      title: 'iBall',
      created: '2022',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Beauty is in the I of the ball holder.'
    },
    'canvas-template': {
      path: 'canvas-template',
      type: 'Template',
      title: '2D Canvas Template',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D',
      description: 'May I be the spawn of many an art project.'
    },
    'webgl-template': {
      path: 'webgl-template',
      type: 'Template',
      title: 'WebGL Canvas Template',
      created: '2021',
      medium: 'JavaScript on WebGLRenderingContext',
      description: 'Good luck!'
    },
    loading: {
      path: 'loading',
      type: 'Test',
      title: 'Loading...',
      created: '2021',
      medium: 'JavaScript on HTML',
      description: 'Loading... is a loading screen testing framework. Did I say framework? I mean artwork. Also tests patience.'
    },
    'grid-test': {
      path: 'grid-test',
      type: 'Test',
      title: 'Grid Overlay Test',
      created: '2021',
      medium: 'JavaScript on CanvasRenderingContext2D over JavaScript on WebGLRenderingContext',
      description: 'Where my grids at?'
    }
  }

  for (const work of Object.values(art)) {
    pages.push({
      url: `/art/${work.path}/`,
      title: work.title,
      photo: `/assets/art/thumbnails/${work.path}.webp`
    })
  }

  // @todo import these from page/index.tsx?
  const cms = [
    'talk',
    'listen',
    'watch',
    'play',
    'music',
    'words',
    'sounds',
    'deep',
    'trippy',
    'psiblings',
    'games',
    'funny',
    'happy',
    'read',
    'gaze',
    'acid',
    'lsd',
    'shrooms',
    'k',
    'ibogaine',
    'ecstasy',
    'dmt',
    'dxm',
    'blow',
    'white-rabbit',
    'rabbit-hole',
    'life',
    'time',
    'dreams',
    'fun',
    'hang',
    'is',
    'infinity',
    'psilosophy',
    'silly',
    'goose',
    'see',
    'end',
    'page',
    'peace',
    'war',
    'hear',
    'taste',
    'smell',
    'feel',
    'blog'
  ]

  for (const path of Object.values(cms)) {
    pages.push({
      url: `/${path}/`,
      title: `Do ${path.replace('-', ' ')}`,
    })
  }

  // @todo import these from blog/index.tsx?
  const blog = [
    'hi'
  ]

  for (const path of Object.values(blog)) {
    pages.push({
      url: `/blog/${path}/`,
      title: `${path.replace('-', ' ')}`,
    })
  }

  return pages
}
