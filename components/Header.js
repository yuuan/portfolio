import Head from "next/head";
import PropTypes from "prop-types";

const Header = ({ title, description, image, url }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={url+image} />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tteooiyry" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={url+image} />
    <link rel="shortcut icon" href={url+image} />
    <link rel="apple-touch-icon" href={url+image} />
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"></link>
  </Head>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Header;