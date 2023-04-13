import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import MainContent from "./mainContent"
import Footer from "./footer"



function App() {
    return (
         <div>      // componentleri de div icerisinde yazmak önemli
           <Header />
            <MainContent />
            <Footer />
       
           </div>
    )
       
          
    
}

ReactDOM.render(<App />, document.getElementById("root"))




ReactDOM.render(<Page />, document.getElementById("root"))