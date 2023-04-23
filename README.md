**


Quick start:
**
```
$ npm install
$ npm start
````

*ReactDOM.render(tag, document.getElementById("root"))-->   tag i verilen id li yere koyar. Burasi önemli. Burasi bizim html icindeki divimiz

*React is composole: kücük parcalar bir bütün icinde kullanilir. Daha flexible ve korunakli kodlar.

<h2>ilk component </h2>

function MainContent() {
    return (
        tag
    )
} 

ReactDOM.render(
    <div>
        component
        
    </div>,
     document.getElementById("root")
)

*React is declarative / imperative
-- Bir div e element eklemek icin Js de yapilmasi gereken.
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
 
 --Ayni is react ile daha kolay yapilir.
ReactDOM.render(<h1 className="header">This is an imperative way to program</h1>, document.getElementById("root"))
  
<h2>what is JSX </h2>


<!--
const element = <h1 className="header">This is JSX</h1>
console.log(element)
-->


{
type: "h1", 
key: null,
 ref: null,
props: {className: "header", 
children: "This is JSX"}, 
_owner: null, 
store: {}
  }
 

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

--What do props help us accomplish?
>Make a component more reusable.


--How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */
    return (
               <h1>Hello {firstName} {lastName}!</h1>                      -->variable {}icinde yazilir
           )
}   

function App() {
    const date = new Date()
    //const hours = date.getHours() % 12
    
    return (
        <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
    )
}

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (
        <h1>Good {timeOfDay}!</h1> ---> retunde kullanilir probs
    )
}

------
##Bu örnekte componentimizdeki fonksiyonun bir parametresi var. App.js de tanimlanan objenin özelliklerine atif yapar.


--Contact.js--

import React from "react"

export default function Contact(props) {
   
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>"
    )
}

const person = {                                         ---> Objectimiz burda
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}


const {img, name} = person       --> Burasi önemli, buradan hareketle asagidaki gibi de yapabiliriz.
console.log(name)

export default function Contact({img, name, phone, email}) {       --> parametreler {} icinde verildi. Kod blogu  icinde de ayni sekilde {} icinde yazildi.
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

--App.js--

import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App



**Cok önemli
Bütün react yapilarinda main.js oder index.js de olmasi gereken asagidaki yapilandirma cok önemli
--index oder main--
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"


ReactDOM.render(<App />, document.getElementById("root"))

daha sonra app.js de siteyi yapariz

-- app ---
import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            
        </div>
    )
}


----önemli bir Not daha---

import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}                               --> bütün kartlar setup yoksa bu sekilde condition verilir.
        // <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>  --> Bu da ikinci yöntem.                                               
            <p>Punchline: {props.punchline}</p>                            --> Asagida hepsinde var ama ilkinde yok, yazmasaydik Setup: seklinde bos bir ifade olurdu.
            <hr />
        </div>
    )
}


export default function App() {
    return (
        <div>
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
            <Joke 
                  punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}                                  --> String disinda da degerler atanabilir. Ama {} icinde 
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
            />
        </div>
    )
}

import jokesData from "./jokesData"

export default function App() {
   const jokeElements = jokesData.map(joke => {                                    -->datalar baska filedan alinir(JokesData) 
    return <Joke setup= {joke.setup} punchline = {joke.punchline}>
   })
    
    return (
        <div>
            {jokesElements}
        </div>
    )
}
  

--> Yukardaki hard kodu daha temiz ve sade olarak  map() methodu ile asagidaki gibi yapabiliriz.


** Cok kullanisli map() metodu ile birkac uygulama. Methodun icerisndeki parametre alan fonksiyonlarin kullanimina dikkat et.
/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const nums2 = nums.map(x => x*x)

console.log(nums2)

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const names1 = names.map( (e) =>e[0].toUpperCase() + e.slice(1)
)
console.log(names1)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const pokemon1 = pokemon.map(function(e){
    return `<p>${e}</p>`
})
console.log(pokemon1)

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.

for(let i = 0; i < 5; i++) {
    
}




    <Card 
    img ="./public/images/kahve.png"
    rating = "5.0"
    reviewCount= {6}
     location = "USA"
     title = "Life Lessons with Katie Zaferes"
    price = "136"
    />
    <Card 
     img ="./public/images/elma.png"
    rating = "5.0"
    reviewCount= "6"
     location = "USA"
     title = "Life Lessons with Katie Zaferes"
    price = "136"/>
    <Card 
     img ="./public/images/portakal.png"
    rating = "5.0"
    reviewCount= "6"
     location = "USA"
     title = "Life Lessons with Katie Zaferes"
    price = "136"/>

app.jsx de yukardaki gibi görülen card componentleri map() method ile sadelestirelim.

--data.js den bilgiler import edilir

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}


--card componentlerde propslar girilir.


const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.img} alt="" className='card--image'/>
        <div className='card--stats'>
            <img src="./public/images/star.png" alt="" className='card--star'/>
            <span>{props.rating}</span>
            <span className='gray'>  ({props.reviewCount}).</span>
            <span className='gray'>{props.location}</span>

        </div>
        <div>
        <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    </div>
  )
}

simdi biraz daha app() biraz daha sade hale getirelim.


                                        
export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}      --> datadan alina itemlar. cardda karsiligi var. ama cardda yazarken data'daki ayni key adi ile yazilmalidir
                item={item}
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

card

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge: Fix our component! 😱
    */
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

-- Daha da sadelestirmek icin spread syntax ini kullanabiliriz. 


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}      --> 3 nokta kullandigimizda, cardda item yazmaya gerek yok her seferinde.
                
            />
        )
    })        
}


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

**Event  listener 
Raectda eventler CamelCase yazilir. ve functionlarin yazimi da farklidir


export default function App() {
    
    return (
        function handleClick() {
        console.log("I was clicked!")
    }
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>   -->  () kullanilmaz
        </div>
    )
}
