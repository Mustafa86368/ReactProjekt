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