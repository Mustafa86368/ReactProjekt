**


Quick start:
**
```
$ npm install
$ npm start
````

*ReactDOM.render(tag, document.getElementById("))--> tag i verilen id li yere koyar.

*React is composole: kücük parcalar bir bütün icinde kullanilir. Daha flexible ve korunakli kodlar.

*ilk component

function MainContent() {
    return (
        <h1> I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>, document.getElementById("root")
)

*React is declarative / imperative
-- Bir div e element eklemek icin Js de yapilmasi gereken.
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
 
 --Ayni is react ile daha kolay yapilir.
ReactDOM.render(<h1 className="header">This is an imperative way to program</h1>, document.getElementById("root"))
  
--what is JSX--



const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
{
type: "h1", 
key: null,
 ref: null,
props: {className: "header", 
children: "This is JSX"}, 
_owner: null, 
store: {}
  }
 */

// JSX
ReactDOM.render(element, document.getElementById("root")) Yukarida görüldügü gibi variable store eder object olarak ve onu componentte kullanabiliriz. JSX ile sadece single parent element yürütülür.

--> ReactDOM.render(
    <h1 className="header">This is JSX</h1><p>This is a paragraph</p>,         bu kodda hata aliriz
    document.getElementById("root")    
)

--> ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>                             dogrusu bu sekildedir.
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)



**ReactDOM.createRoot(document.getElementById("root")).render(navbar)    --> createRoot method  Not= react 18 ile kullanilir.

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)


**ReactDOM.render(temporaryName(), document.getElementById("root"))   --> Fonksiyonda render edilir.

** Yukardaki fonksiyon component seklinde asagidaki gibi de yazilabilir.


function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))

**import React from "react"
import ReactDOM from "react-dom"  

**

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Header />         ---> child component
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

**
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
     return (
       <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>  
     )
     
}

function MainContent() {
    return (
         <div>
        <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
             </div>
    )
}

function Page() {
    return (
         <div>     --> componentlerde div icerisinde yazilmalidir
           <Header />
            <MainContent />
            <Footer />
       
           </div>
    )
       
          
    
}

ReactDOM.render(<Page />, document.getElementById("root"))



** Styling with Classes

function Header() {
    return (
        <header>
            <nav class="nav">
                <img src="./react-logo.png" width="40px" />               --> Not: const ul = document.createElement("ul")
                                                                                           ul.className = ""  JS class adi atama.

                <ul className="nav-items">                                 --> verilen class css de sekillendirilir.
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </nav>
        </header>
    )
}

** .nav {                                                        //nav styling 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-items {
    list-style: none;
    display: flex;
}

.nav-items > li {
    padding: 10px;n
}

** Organize Component
import React from "react"

export default function Header() {                   --> Yeni bir header.js dosyasi acilip . import ve export yapilir                
    return (                                         --> index.js de import    import Header from "./Header"
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
                <nav className="nav">
                <img src="./react-logo.png" class="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </nav>
        </header>
    )
}
 

 **Probs
 