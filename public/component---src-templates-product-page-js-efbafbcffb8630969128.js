(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{183:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(7),l=t.n(s),r=t(186),c=t(222),m=t.n(c),o=function(e){var a=e.imageInfo,t={borderRadius:"5px"},i=a.alt,s=void 0===i?"":i,l=a.childImageSharp,r=a.image;return r&&r.childImageSharp?n.a.createElement(m.a,{style:t,fluid:r.childImageSharp.fluid,alt:s}):l?n.a.createElement(m.a,{style:t,fluid:l.fluid,alt:s}):r&&"string"==typeof r?n.a.createElement("img",{style:t,src:r,alt:s}):null};o.propTypes={imageInfo:l.a.shape({alt:l.a.string,childImageSharp:l.a.object,image:l.a.oneOfType([l.a.object,l.a.string]).isRequired,style:l.a.object}).isRequired};var p=o,d=function(e){var a=e.gridItems;return n.a.createElement("div",{className:"columns is-multiline"},a.map(function(e){return n.a.createElement("div",{key:e.text,className:"column is-6"},n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"has-text-centered"},n.a.createElement("div",{style:{width:"240px",display:"inline-block"}},n.a.createElement(p,{imageInfo:e}))),n.a.createElement("p",null,e.text)))}))};d.propTypes={gridItems:l.a.arrayOf(l.a.shape({image:l.a.oneOfType([l.a.object,l.a.string]),text:l.a.string}))};var g=d,u=t(225),h=function(e){var a=e.testimonials;return n.a.createElement("div",null,a.map(function(e){return n.a.createElement("article",{key:Object(u.v4)(),className:"message"},n.a.createElement("div",{className:"message-body"},e.quote,n.a.createElement("br",null),n.a.createElement("cite",null," – ",e.author)))}))};h.propTypes={testimonials:l.a.arrayOf(l.a.shape({quote:l.a.string,author:l.a.string}))};var f=h,E=function(e){var a=e.data;return n.a.createElement("div",{className:"columns"},a.map(function(e){return n.a.createElement("div",{key:e.plan,className:"column"},n.a.createElement("section",{className:"section"},n.a.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),n.a.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),n.a.createElement("p",{className:"has-text-weight-semibold"},e.description),n.a.createElement("ul",null,e.items.map(function(e){return n.a.createElement("li",{key:e,className:"is-size-5"},e)}))))}))};E.propTypes={data:l.a.arrayOf(l.a.shape({plan:l.a.string,price:l.a.oneOfType([l.a.string,l.a.number]),description:l.a.string,items:l.a.array}))};var y=E;t.d(a,"ProductPageTemplate",function(){return v}),t.d(a,"productPageQuery",function(){return N});var v=function(e){var a=e.image,t=e.title,i=e.heading,s=e.description,l=e.intro,r=e.main,c=e.testimonials,m=e.fullImage,o=e.pricing;return n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url("+(a.childImageSharp?a.childImageSharp.fluid.src:a)+")"}},n.a.createElement("h2",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},t)),n.a.createElement("section",{className:"section section--gradient"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-7 is-offset-1"},n.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},i),n.a.createElement("p",null,s))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-10 is-offset-1"},n.a.createElement(g,{gridItems:l.blurbs}),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-7"},n.a.createElement("h3",{className:"has-text-weight-semibold is-size-3"},r.heading),n.a.createElement("p",null,r.description))),n.a.createElement("div",{className:"tile is-ancestor"},n.a.createElement("div",{className:"tile is-vertical"},n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("article",{className:"tile is-child"},n.a.createElement(p,{imageInfo:r.image1}))),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("article",{className:"tile is-child"},n.a.createElement(p,{imageInfo:r.image2})))),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("article",{className:"tile is-child"},n.a.createElement(p,{imageInfo:r.image3}))))),n.a.createElement(f,{testimonials:c}),n.a.createElement("div",{className:"full-width-image-container",style:{backgroundImage:"url("+(m.childImageSharp?m.childImageSharp.fluid.src:m)+")"}}),n.a.createElement("h2",{className:"has-text-weight-semibold is-size-2"},o.heading),n.a.createElement("p",{className:"is-size-5"},o.description),n.a.createElement(y,{data:o.plans})))))))};v.propTypes={image:l.a.oneOfType([l.a.object,l.a.string]),title:l.a.string,heading:l.a.string,description:l.a.string,intro:l.a.shape({blurbs:l.a.array}),main:l.a.shape({heading:l.a.string,description:l.a.string,image1:l.a.oneOfType([l.a.object,l.a.string]),image2:l.a.oneOfType([l.a.object,l.a.string]),image3:l.a.oneOfType([l.a.object,l.a.string])}),testimonials:l.a.array,fullImage:l.a.oneOfType([l.a.object,l.a.string]),pricing:l.a.shape({heading:l.a.string,description:l.a.string,plans:l.a.array})};var b=function(e){var a=e.data.markdownRemark.frontmatter;return n.a.createElement(r.a,null,n.a.createElement(v,{image:a.image,title:a.title,heading:a.heading,description:a.description,intro:a.intro,main:a.main,testimonials:a.testimonials,fullImage:a.full_image,pricing:a.pricing}))};b.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.object})})};a.default=b;var N="2855502059"},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby + Netlify CMS Starter",description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}}},186:function(e,a,t){"use strict";var i=t(0),n=t.n(i),s=t(187),l=t.n(s),r=(t(189),t(185)),c=function(){return r.data.site.siteMetadata};a.a=function(e){var a=e.children,t=c(),i=t.title,s=t.description;return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("title",null,i),n.a.createElement("meta",{name:"description",content:s}),n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-16x16.png",sizes:"16x16"}),n.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap",rel:"stylesheet"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Martel:400,700&display=swap",rel:"stylesheet"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap",rel:"stylesheet"}),n.a.createElement("meta",{name:"theme-color",content:"#fff"}),n.a.createElement("meta",{property:"og:type",content:"business.business"}),n.a.createElement("meta",{property:"og:title",content:i}),n.a.createElement("meta",{property:"og:url",content:"/"}),n.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),a)}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-efbafbcffb8630969128.js.map