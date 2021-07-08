import { FunctionalComponent, createRef, h } from 'preact'
import artworkLibrary from './library'

export type Artwork = {
  path: keyof typeof artworkLibrary;
  title: string;
  year: number;
  medium: string;
  description: string;
  displayUrl?: string;
  thumbnailUrl?: string;
}

export type ArtworkLibrary = {
  [key:string]: Artwork;
}

interface ArtPlaqueProps {
  art: Artwork;
}

export const ArtPlaque: FunctionalComponent<ArtPlaqueProps> = (props: ArtPlaqueProps) => {
  const { art } = props
  const ref = createRef()
  art.displayUrl = `/art/${art.path}/`
  art.thumbnailUrl = `/assets/art/thumbnails/${art.path}.png`
  return <div class="card art_plaque" ref={ref}>
    <a href={art.displayUrl} aria-label="Experience">
      <img src={art.thumbnailUrl} class="card-img-top" alt="View" />
    </a>
    <div class="card-body">
      <h5 class="card-title">
        <strong><em>{art.title}</em></strong>, {art.year}
      </h5>
      <p class="card-text"><strong>{art.medium}</strong></p>
      <p class="card-text">{art.description}</p>
    </div>
    <noscript><p>This art requires JavaScript.</p></noscript>
  </div>
}

export const ArtIndex: FunctionalComponent = () => {
  const ref = createRef()
  return <div class="row my-4" ref={ref}>
    {Object.values(artworkLibrary).map((art, i) => {
      return (<div key={i} class="col-sm-6 col-md-4 mb-4"><ArtPlaque art={art} /></div>)
    })}
  </div>
}