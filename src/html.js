import React from "react"
import { withPrefix } from "gatsby"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <title>
        Tailored Living Featuring PremierGarage Online Closet and Garage
        Designer
      </title>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://code.jquery.com/jquery-1.10.2.min.js" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script src={withPrefix("script2.js")} />
    </html>
  )
}
