"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2538],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,h=p["".concat(i,".").concat(g)]||p[g]||u[g]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2418:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),s=["components"],l={sidebar_position:2,slug:"getting-started"},i="Getting Started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Get started with Sequence with just a few lines of code, follow along below.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"getting-started"},sidebar:"sidebar",previous:{title:"Ethereum Compatibility",permalink:"/introduction/eth-compat"},next:{title:"Installation",permalink:"/build-with-sequence/installation"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Connect your wallet",id:"connect-your-wallet",children:[],level:2},{value:"Get the wallet address",id:"get-the-wallet-address",children:[],level:2},{value:"Open the wallet from your dapp",id:"open-the-wallet-from-your-dapp",children:[],level:2},{value:"Get the blockchain network ID",id:"get-the-blockchain-network-id",children:[],level:2},{value:"Sign &amp; verify a message",id:"sign--verify-a-message",children:[],level:2},{value:"Sending an ERC-20 token",id:"sending-an-erc-20-token",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started with Sequence with just a few lines of code, follow along below."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"First, install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/0xsequence"},"0xsequence")," package from NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add 0xsequence\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install 0xsequence\n")),(0,o.kt)("p",null,"You can find the source of the ",(0,o.kt)("inlineCode",{parentName:"p"},"0xsequence")," package on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js"},"Github"),"."),(0,o.kt)("h2",{id:"connect-your-wallet"},"Connect your wallet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connecting to Ethereum Mainnet:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = new sequence.Wallet('mainnet')\nconst connectDetails = await wallet.connect()\n\nconsole.log('=> connected?', connectDetails.connected)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connecting to Polygon:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = new sequence.Wallet('polygon')\nconst connectDetails = await wallet.connect()\n\nconsole.log('=> connected?', connectDetails.connected)\n")),(0,o.kt)("h2",{id:"get-the-wallet-address"},"Get the wallet address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const walletAddress = await wallet.getAddress()\n\nconsole.log(walletAddress)\n// # => '0xabcd....'\n")),(0,o.kt)("h2",{id:"open-the-wallet-from-your-dapp"},"Open the wallet from your dapp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"wallet.openWallet()\n")),(0,o.kt)("h2",{id:"get-the-blockchain-network-id"},"Get the blockchain network ID"),(0,o.kt)("p",null,"You can use a variety of methods to query the chain ID which the wallet is presently\nconnected to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"console.log('chainId:', await wallet.getChainId())\n\nconst provider = wallet.getProvider()\nconsole.log('provider.getChainId()', await provider.getChainId())\n\nconst signer = wallet.getSigner()\nconsole.log('signer.getChainId()', await signer.getChainId())\n")),(0,o.kt)("h2",{id:"sign--verify-a-message"},"Sign & verify a message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the wallet signer instance\nconst signer = wallet.getSigner()\n\n// Prepare the message string\nconst message = `I've been to Web3 & back again :D`\n\n// Sign the message\nconst signedMessage = await signer.signMessage(message)\nconsole.log('message signature:', signedMessage)\n\n// Validate the signed message\nconst isValid = await wallet.commands.isValidMessageSignature(\n  await wallet.getAddress(),\n  message,\n  signedMessage,\n  await signer.getChainId()\n)\n\nconsole.log('isValid?', isValid)\nif (!isValid) throw new Error('signature is invalid')\n")),(0,o.kt)("h2",{id:"sending-an-erc-20-token"},"Sending an ERC-20 token"),(0,o.kt)("p",null,"Let's now send some USDC tokens to another wallet address on the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Part of the ERC20 ABI, so we can encode a `transfer` call\nconst erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Get the wallet signer interface\nconst signer = wallet.getSigner()\n\n// USDC contract address on Polygon network\nconst usdcContractAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'\n\n// Sending to a recipient address\nconst recipientAddress = '0x8b4de256180cfec54c436a470af50f9ee2813dbb'\n\n// Sending 1.50 USDC, note USDC has 6 decimal places\nconst amount = ethers.utils.parseUnits('1.50', 6)\n\n// Encode an ERC-20 token transfer to recipient of the specified amount\nconst data = erc20Interface.encodeFunctionData(\n  'transfer', [recipientAddress, amount]\n)\n\n// Prepare Transaction object\nconst tx: sequence.transactions.Transaction = {\n  to: usdcContractAddress,\n  data: data\n}\n\n// Send the transaction via the signer to the blockchain :D The signer will prompt the user\n// sign+send the transaction, and once the user confirms it will be transmitted.\nconst txnResp = await signer.sendTransaction(tx)\n\n// Wait for the transaction to be mined by the network\nawait txnResp.wait()\n\n// We're done, print the transaction hash, and open it up in your block explorer\nconsole.log('transaction hash:', txnResp.hash)\n")))}p.isMDXComponent=!0}}]);