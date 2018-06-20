import { Controller } from "stimulus"

export default class extends Controller {
    
    initialize(){
        this.nameElement.value = this.name
    }

    log(event){
        console.log(this.nameElement.value)
    }

    paste(event){
        event.preventDefault()
        console.log("pastes not allowed")
    }

    get name(){
        if (this.data.has("name")){
        return this.data.get("name")
        }else {
            return "We have a problem dude"
        }
    }

    get nameElement() {
        return this.targets.find("name")
    }
  
} 


