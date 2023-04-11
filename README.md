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
  
