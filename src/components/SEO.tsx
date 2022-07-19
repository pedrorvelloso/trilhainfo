import { Helmet } from 'react-helmet'

import imagePreview from '../preview.png'

type Props = {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const origin = window.location.origin

const defaultDescription = `Não sabe por onde começar a estudar? Que tal dar uma olhada por aqui? Lendo de cima pra baixo, cada caixa é um assunto a ser estudado. Clicando, você verá em mais detalhes o que estudar com links de conteúdos gratuitos produzidos por pesoas que dominam a área e te ajudarão nessa jornada!`

export default function SEO({ 
  title = 'Trilha Info', 
  description = defaultDescription, 
  keywords = 'trilha, frontend, backend, devops', 
  image = origin + imagePreview
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'sumamry'} />
      <meta name="twitter:site" content="@flaviojmendes" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}