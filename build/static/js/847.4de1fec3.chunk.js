"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[847],{1409:(s,e,t)=>{t.d(e,{A:()=>F});var i=t(5043),a=t(212),c=t(6233),l=t(3216),n=t(4117),o=t(6763),r=t(1241),d=t(8337);const h="styles_item__n-gkh",m="styles_content__Nripv",v="styles_discount__73MTH",u="styles_like__xwJGY",j="styles_icon__zZEe3",p="styles_likeActive__gB3fo",N="styles_title__susiS",y="styles_imgWrapper__RT4JM",x="styles_img__K6vcV",f="styles_priceWripper__ivm-a",k="styles_price__xYdWo",A="styles_cartIcon__EdKdU",g="styles_btn__uU39r";var L=t(8139),V=t.n(L),Y=t(7021),w=t(3910),D=t(7929),R=t(579);const F=(0,c.PA)((s=>{let{product:e}=s;const{ProductsStore:t}=(0,a.Pj)(),{favoriteItems:c}=t,L=(0,l.Zp)(),F=(0,l.zy)(),{t:K}=(0,n.Bd)(),[z,P]=(0,i.useState)(c.find((s=>s===(null===e||void 0===e?void 0:e.id))));(0,i.useEffect)((()=>{"/favorite"===F.pathname&&P(!0)}),[]);return(0,R.jsx)("li",{className:h,children:e&&(0,R.jsxs)("div",{className:m,children:[e.discount?(0,R.jsxs)("p",{className:v,children:[" - ",e.discount," %"]}):null,(0,R.jsx)("a",{className:V()({[u]:!0,[p]:z}),onClick:s=>{s.preventDefault(),s.stopPropagation(),P(!z),z?t.remuveFavoriteItemAction(e.id):t.setFavoriteItemIdAction(e.id)},href:"",children:(0,R.jsx)(w.g,{className:j,icon:D.qcK,size:"lg"})}),(0,R.jsx)("div",{className:y,onClick:()=>{L({pathname:"/products/".concat(e.category,"/").concat(e.id),state:{from:F.pathname}})},children:(0,R.jsx)("img",{className:x,src:e.image?e.image:d,alt:e.name})}),(0,R.jsx)("h3",{className:N,children:e.name}),(0,R.jsx)(r.A,{}),(0,R.jsxs)("div",{className:f,children:[(0,R.jsxs)("p",{className:k,children:[e.price," ",K("productsPage.productItem.uan")]}),(0,R.jsx)(w.g,{className:A,icon:D.K$j,size:"lg",onClick:()=>t.addToCart(e.id)})]}),(0,R.jsx)(Y.Ay,{className:g,type:"primary",size:"middle",onClick:()=>(t.addToCart(e.id),void L(o.U.cart)),children:K("productsPage.productItem.buy")})]})})}))},1241:(s,e,t)=>{t.d(e,{A:()=>n});const i={starList:"styles_starList__LCmb4",item:"styles_item__WSC1n",icon:"styles_icon__wVHug"};var a=t(3910),c=t(7929),l=t(579);const n=()=>(0,l.jsxs)("ul",{className:i.starList,children:[(0,l.jsx)("li",{className:i.item,children:(0,l.jsx)("a",{className:i.link,children:(0,l.jsx)(a.g,{icon:c.yy,className:i.icon})})}),(0,l.jsx)("li",{className:i.item,children:(0,l.jsx)("a",{className:i.link,children:(0,l.jsx)(a.g,{icon:c.yy,className:i.icon})})}),(0,l.jsx)("li",{className:i.item,children:(0,l.jsx)("a",{className:i.link,children:(0,l.jsx)(a.g,{icon:c.yy,className:i.icon})})}),(0,l.jsx)("li",{className:i.item,children:(0,l.jsx)("a",{className:i.link,children:(0,l.jsx)(a.g,{icon:c.yy,className:i.icon})})}),(0,l.jsx)("li",{className:i.item,children:(0,l.jsx)("a",{className:i.link,children:(0,l.jsx)(a.g,{icon:c.yy,className:i.icon})})})]})},8847:(s,e,t)=>{t.r(e),t.d(e,{default:()=>h});var i=t(5043),a=t(212),c=t(6233),l=t(4117);const n={title:"styles_title__GmvKp",subtitle:"styles_subtitle__j3V9+",list:"styles_list__Y3Qgt"};var o=t(1409),r=t(9472),d=t(579);const h=(0,c.PA)((()=>{const{ProductsStore:s}=(0,a.Pj)(),{products:e,favoriteItems:t,favoriteProducts:c}=s,{t:h}=(0,l.Bd)();return(0,i.useEffect)((()=>{s.setFavoriteProductsAction((()=>{const s=[];return Array.from(new Set(t)).forEach((t=>{const i=e.find((s=>s.id===t));i&&s.push(i)})),s})())}),[e,t]),(0,d.jsxs)("div",{className:n.likesPage,children:[(0,d.jsx)("h2",{className:n.title,children:h("favoritePage.my_favorite_products")}),(0,d.jsx)("ul",{className:n.list,children:c.length?null===c||void 0===c?void 0:c.map((s=>(0,d.jsx)(o.A,{product:s},s.id))):(0,d.jsx)(r.A,{description:h("favoritePage.no_added_products")})})]})}))},8337:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///+9vsC6u723uLr4+Pj8/PzQ0dLy8vL29vfMzc7BwsS+v8Ho6OnExcbV1dfu7u/h4eLi4uPb29xysTp8AAAMnklEQVR4nO2d6XqkKhCGFUQWxYX7v9hDVYFiN9pmph3Nefh+JLFbgVe2KrZUVVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFR0f9EQqozujuZf6GBsxPi7u50/rFmVp8S+62I40nAX4vYnOUDxOHu1P6J7A8Ia/4LEdvTZfR35KLs562GnwF6xHZoSYPzmvtR3A21SrX1ex+ww/Hhq00Ier6bLMj3emfyiLHOaMwkbbpdzpdn+rvhvIQ+kVbGTDvLtdgJObfmDCRrb0QLOgHI6iFTqcToC/fnZ/UNTBt9tltYPQc81U9uGAY39cEUFe4zI5vug0N9SiELKWwmXW9akanBz6ePZZXdiVdV/Yf0sRbyT/Sav5Iwrnv87lPHebNJ9yl52N7PO40KM/h1fxxEbW8lNIdv30p/y2j33wKzo79DmsP31N3Z9YvuEBCSNhxXNLTWxMFL8JI3EqqjtEM73xxnD9xmoMk56nPYQwkZVJ/xKI83BEdF+U5CuZ8uKKLje2qzdukIBfXXEco3QI9mveMwtLZ+pfSI8pcRgsncbL5knRvX59y2VDJ10LU+khAN5rQnYfbVS+g3jKba71ufSSigm0jyL+fpTV1yh+80xC8iBFs0GWljtsk+3STZyEawUZ9HuDdg6DNkLaMHDtDaDWLn8sA8zLcObE69qkMPL0Hs91yxewmzw/a1SLLwgwu7FlQDT2WH/W8tpbrNyKWZ2+XrYFSzWD2QiS4XXPvIqRudpvtQ67u410v6oRp+PtlLOeXHuf0sLe0+Gz/eu7THt4/I5CRkRiIppOZEIEujpPcDvE25tpSPa8d2KlvWjt5naC7AO4eFcz1+J1ZT51RDL/l6d27Q4ERJv045QpO2j6dCSdvdzMDPrYQ5m0Yn5e7cgHWstVCm9XuAt05eZPIQHKfoVpycFExvz7hQTyulG8Jzg7kpYWbe8XGEbrWnf5iHUKjdLyBMitrJPIxUafY/hTDT0vz/6+GmqP3+tjQ3imH/qj/MDJvemoc5wi75mJ9x7VRi01RPs2lyhGB7/chdWB0RkQ/waaV0U9bOeLXpzTkj6Xl5OCRNzY/8Q5ftLJ5HCFkhf+Ljx1u5zC+Gex4hS1P6s3GafHhPq4dY2lav1pwea5uzNtsT8xB84NPjpeuQMIyXZidUHzhvAcVqzcRD021tWaBj2RlCfx4hdPqJs36AmDSdMGaVnxN/4jw+VKl07knnR8vSRX/70xb3Eu6t5YZMTLwEZnLNYZ+s08Ap1Z3AnpiHVDDTMsf0a4M4bhaYwCvZW1Z8K6HYIcRCt62kzE5rv9FM7/P4+5sXbp2Z2V31Bd3gS5oZr/XgJjdo87KqGHq8/c0L3Z2AuyWL5nTfW//seho0WnbX09y8hnbx7fIJO7VtBm2W/WVfd6/1PkgZIKruEyPr5GEwJ8cJrtPB3h8qXh9WoNJS9QNAfqdVijpYJUyrTPqD5YnUUaqjZXsP2HMx7hOwDjJATDtFlXUTGDvj/nJ2Vj9hw0Ul2v0tJWzAtdzza/8AfYehNfz7+4cYH54y8S2czuwLounNuFbf2dBT0OfWkaUysd19ptY9hY+kRlD/rjk2FWLsXau1bt26a6uf1xvHje401YqKioqKioqKioqKrlODSv9ehuq9WxFWuYrkpireIMIHkhwGuicfWHwk/vaPqM0j8HnjPY8LFtUKcuwsrHKSDP826N1WSnMvGrdv15sqycNpAbpultu0qNrFS0QHSRgKzAlYHk4jh+H3aOERK3GhLnjEsJhWDMx/WH9/+7NgZp6mSUOyJdfwt0UEYbiTaqYxwZY5/MJuCGFEW3TMKeX8N/00zQbvo4wwzAc2a4DaEsqazUo63gkJN7DWP6Iqn4Kx6S3/+qJwwWhGXvPRp53myyzMvDsecgwS1dICmgHi3xI6StJAS5opW6tAWMVvtoSahtkmim2mJ2W4xbBvF9RIOPr4IuEMqbYhKguJDoR485bQ0o5sSZOJOpmLCITKJ31DGGOssER4UBx1c2F00X199XeMT9V2IQRaEVdbYNSBsDKw2HtDyGjVvujsDqEwZkuo4vP47iIhBlbBGvpv18RI2CSE8FuERNFLjYSQqA3hkiFmn7DbEo6RgaACoQ27jMavn7u0EuqFEN7jTwl1u0fYmT3COiWsryYcfbojYesL5k8J00RvCBXTzyAcsC1tGwVNP7QH3yJ01JYKkLqH0HgDYxwgbsmg0+VMN98hBGMHekrYENah2C2ESMXhNBbfJ/V93+G7/wJhjQFrBYQWx4anewghD8n8pHrYotX1pTwkQ7MJj4g76yGICKlH+lo9BJ3pLf4hIX3yU8J2z6ZZyKrHEHp7Tf6ccNemWciqm3t8UCAkmztrtUE6Xqw2uk3s2jQLWfwde91gpr/l4VVWGyjEjb1WNKmJIxKCFapi7tpakKUKz7A9m+aNcCkdzIiVcAiWd7i8ltCnrVn8oQY9gJZ2K1PuUsqqBp8Mt0X7+QShf2foIo9UFsKT4cp7bt+ePs0RYqoVq3shpMUEtLxHswAzzNs8cvmm4WYUwnei4jRhzy09IhPCyjvcTaUG/vXjBgVfNy3HGjZSQmpviYTjjnGkwvfeTXgDvIvfVD3zt/GwotkmW006vkPooXjnzQFyBCOhspz5QC9YKJVMO4tRbT7rnZuJCae6173XzfoNHEvnXL+MMK0e+pgsmImRhN/NvD7SjDGgcRqmMgdeVFRU9FgJOcomvYq9RpVMYyyzCzgvIZLZiWwo4Vs5quSUYTXKdG23SiNaJkgumLpwXc1YFxbdC7yqabpCmLqryc5Rnf/Twe8Ojt3rw3HOyhsFNFg84DnQOu3QpMaghpBmZ9aQY7S1oVF8Ewx9XdffP+Lc4nxMzcj0NXRFx8XjfqUwFsdoa5eiXQQ9o93O3rZDM0bVIZRku9bIGR4zSKdgxnjiMdCapnHCpQl7EzT7/iHuzkeiJ/9+cf/OAFfOWVqljYTkuMHuM4h8JYTJDSDEPIT0ttNQJyvwcUfDAMcMouk7hZAZLfBeL9F6M3FR8QXH1IfzAyQtLWfhNAGNMSIhvdz2jRCTEgh7TnNUiq0L1GdW41JveGkSQx7WkL3rFZGwkJhwJO0FhL70kYfXQvmAGUTMMk8Qd9VRkm39SoiHOQfCgYW9Be1ayuJnCt+h4iFkKO4CTpek+usvGRFiPBcQ+jdNFc1BzerjleRwgBURQpRNlyGcF0Ib1207tpxGMMQ/LfeVesRXVoEzAzXXX5LrISiHTajwFxBO8e1P3FcX4I3pgFEYz6VpgwWv9SshVNxA2MUNoT6UuMsAai6VB3AjNiFLrMdESI8CIVTsCwiXNz3Oc/+aDojesQ4TaN8J/R9ESHeD5DzHUYiepafnnyCEu68kfEsHJ0Lf88GYBhteCY32SVoJ37dPdOkOxc+EvqP4x4QhD0cDTYBm8xvh7HP3iNA3sL4vVCcJ2WzZdA9h61tCYZh8JewqzubmgDBsSulPEvbONwS3EDpfGBvOqnfCgdlNHvaDg/+RkAxkwKYUGs85Qai8QXQLYc86nyATDKqUUPpMrBNCR1ssEtO50cFQOEPo7bqh/b7V9plQcV7BtNh7Hvok2Q1h3XV4kkkaPl92O38knJgxF+YhDKdlCUXHZOvjzRDiJu1NPQQTZev+wD2+vzlDKHg0MC4hdJzbLKHPKd/M9TlCFQnrLKHERsahrXqGELdKfZ1wMbMmMNg2/aEK0beshbVqGUI8/QlsGhMN7n4lnGpaElRhyTtFCEenfJ2wjzEPwS41YY0TpJSin1gH5SxHiF4j2KUsHHDmVkIXw2rBMFzsUt+/eIs3tUu5XF6RvYBQRiPfQtiShysyyIkQMGyVJUSfAH2LcKKpXlsaKLBjIBzQt1DhlRryLcZwyauF0LHvE4LRrCkmiDLYkoLaNCJUqcn4QuhY3HOPu/WgWVnqYYfnmoBbAt/Z1Zsn/5Bqh6boA6G6gnDyL9cMmvIJXW8zoLsr00oy7RBGP0+Dyz5YlvYWs69VXYv7hRt6hT7kLrjUdDl05DwtFfkKH58GTGDMhHx5qOxgiUCEoY3ULPxMCHkYrrAMx2nwX8r43r63SY+PTSOL/4OsDVdhBenAwyVW4EjYXzBO4/MNlux2bRgJ9D0DLBrCSiKsNXAuvrUwD2xhjbCyFv6PzmgtNcG9pXGmZjCc11PlrF37w177sJbxtzRkfBIvqQ3Wlv7JgtD2kn+SJDaDlLA+689CyXwmDkL+04iKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKior+vf4DNgiS/ITSGvwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=847.4de1fec3.chunk.js.map