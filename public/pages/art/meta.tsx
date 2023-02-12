import { FunctionalComponent, createRef } from 'preact'
import artworkLibrary from './library'

enum ArtworkTypes {
  Art,
  Template,
  Test,
  WIP,
}

export type Artwork = {
  path: keyof typeof artworkLibrary
  type: keyof typeof ArtworkTypes
  title: string
  created: string
  medium: string
  description: string
  displayUrl?: string
  thumbnailUrl?: string
  thumbnailLegacyUrl?: string
}

export type ArtworkLibrary = {
  [key: string]: Artwork
}

interface ArtPlaqueProps {
  art: Artwork
}

export const ArtPlaque: FunctionalComponent<ArtPlaqueProps> = (
  props: ArtPlaqueProps,
) => {
  const { art } = props
  const ref = createRef()
  art.displayUrl = `/art/${art.path}/`
  art.thumbnailUrl = `/assets/art/thumbnails/${art.path}.webp`
  art.thumbnailLegacyUrl = `/assets/art/thumbnails/${art.path}.png`
  return (
    <div class="card art_plaque" ref={ref}>
      <a href={art.displayUrl} aria-label="Experience">
        <picture>
          <source srcset={art.thumbnailUrl} type="image/webp" />
          <source srcset={art.thumbnailLegacyUrl} type="image/png" />
          <img
            src={art.thumbnailLegacyUrl}
            class="card-img-top"
            alt={`Preview of ${art.title}`}
          />
        </picture>
      </a>
      <div class="card-body">
        <h5 class="card-title">
          <strong>
            <em>{art.title}</em>
          </strong>
          , {art.created}
        </h5>
        <p class="card-text">
          <strong>{art.medium}</strong>
        </p>
        <p class="card-text">{art.description}</p>
        <p class="card-text">
          <a
            href={`https://github.com/acerix/psilly/tree/main/src/routes/art/${art.path}`}
            title="Source code on GitHub">
            &lt;sauce/&gt;
          </a>
        </p>
      </div>
      <noscript>
        <p>This art requires JavaScript.</p>
      </noscript>
    </div>
  )
}

export const ArtIndex: FunctionalComponent = () => {
  const ref = createRef()
  return (
    <div class="row my-4" ref={ref}>
      <h2>Artwork</h2>
      {Object.values(artworkLibrary)
        .filter((art) => art.type === 'Art')
        .map((art, i) => {
          return (
            <div key={i} class="col-sm-6 col-md-4 mb-4">
              <ArtPlaque art={art} />
            </div>
          )
        })}
      <h2>Templates</h2>
      {Object.values(artworkLibrary)
        .filter((art) => art.type === 'Template')
        .map((art, i) => {
          return (
            <div key={i} class="col-sm-6 col-md-4 mb-4">
              <ArtPlaque art={art} />
            </div>
          )
        })}
      <h2>Debug Tests</h2>
      {Object.values(artworkLibrary)
        .filter((art) => art.type === 'Test')
        .map((art, i) => {
          return (
            <div key={i} class="col-sm-6 col-md-4 mb-4">
              <ArtPlaque art={art} />
            </div>
          )
        })}
    </div>
  )
}
