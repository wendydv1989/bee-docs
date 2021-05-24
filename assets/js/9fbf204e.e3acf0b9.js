(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(124)),c={title:"Store with Encryption",id:"store-with-encryption"},i={unversionedId:"access-the-swarm/store-with-encryption",id:"access-the-swarm/store-with-encryption",isDocsHomePage:!1,title:"Store with Encryption",description:"In Swarm, all data is public by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content.",source:"@site/docs/access-the-swarm/store-with-encryption.md",slug:"/access-the-swarm/store-with-encryption",permalink:"/docs/access-the-swarm/store-with-encryption",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/store-with-encryption.md",version:"current",sidebar:"Balls",previous:{title:"Upload a Directory",permalink:"/docs/access-the-swarm/upload-a-directory"},next:{title:"Host Your Website on Swarm",permalink:"/docs/access-the-swarm/host-your-website"}},s=[],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Swarm, all data is public by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content. "),Object(o.b)("p",null,"The Bee client provides a facility to encrypt files and directories while uploading which are only able to be read by users with access to the corresponding decryption key."),Object(o.b)("h1",{id:"encrypt-and-upload-a-file"},"Encrypt and Upload a File"),Object(o.b)("p",null,"To encrypt a file simply include the ",Object(o.b)("inlineCode",{parentName:"p"},"Swarm-Encrypt: true")," header with your HTTP request."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -F file=@bee.jpg -H "Swarm-Encrypt: true" http://localhost:1633/files\n')),Object(o.b)("p",null,"When successful, the Bee client will return a 64 byte reference, instead of the usual 32 bytes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3"}\n')),Object(o.b)("p",null,"Here we see that, when using the Bee node's encryption function, the reference hash that is returned is 128 hex characters long. The first 64 characters of this are the familiar Swarm address - the reference that allows us to retrieve the data from the swarm - it is the same as the reference we would get uploading unencrypted files to using Bee it is safe to share."),Object(o.b)("p",null,"The second second part of the reference is a 64 character decryption key which is required to decrypt the referenced content and view the original data in the clear, this is sensitive key material and must be kept private."),Object(o.b)("p",null,"It is important that this data is not be sent in requests to a public gateway as this would mean that gateway would be able to decrypt your data. However, if you are running a node on your local machine, you may safely use the api bound to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost"),". The key material is never exposed to the network so your data remains safe."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Encryption is disabled by default on all Swarm Gateways to keep your data safe. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/quick-start"}),"Install Bee on your computer")," to use the encryption feature."))),Object(o.b)("h1",{id:"download-and-decrypt-a-file"},"Download and Decrypt a File"),Object(o.b)("p",null,"To retrieve your file, simply supply the full 64 byte string to the files endpoint, and the Bee client will download and decrypt all the relevant chunks and restore them to their original format."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -OJ http://localhost:1633/files/f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3\n")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Never use public gateways when requesting full encrypted references, the hash contains sensitive key information which should be kept private. Run ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/quick-start"}),"your own node")," to get to use Bee's encryption features."))))}p.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);