let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let  voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-In"
    window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir ")
    }
    else if(hours>=12 && hours<16){
        speak("Good Aftenoon sir")
    }
    else{
        speak(" Good Evening Sir")
    }

}


window.addEventListener('load',()=>{
wishMe()
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript

    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}


btn.addEventListener('click',()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})



 function takeCommand(message){
        voice.style.display="none"
            btn.style.display="flex"


    if(message.includes("hello")||message.includes("hello nova")){
        speak("hello  sir,how can I help  you")
    }
    else if(message.includes("who are you")||message.includes("hu r u")){
        speak("i am nova, a virtual assistant ,created by  priyank sir ")
    }
    else if(message.includes("tumhara owner kaun hai")){
        speak("मेरा मालिक प्रियंक है")
    }
    
    
    else if(message.includes("priyank ke papa ka naam kya hai")){
        speak("प्रियंक के पापा का नाम राम गोपाल सिंह है")
    }
    else if(message.includes("priyank ki mummy ka naam kya hai")){
        speak("प्रियंक के mummy का नाम malti devi है")
    }
    else if(message.includes("who is priyank")||message.includes("Priyank kaun hai")){
        speak("Priyank is a full stack  developer , 3rd year student of univesity of petrolium  and energy studies ")
    }
    else if(message.includes("who is narendra modi")){
        speak(" narendra modi is the prime minister of india ")
    }
    else if(message.includes("open youtube")){
        speak("opening YouTube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    
    else if(message.includes("open vs code")){
        speak("opening vs code")
        window.open("vscode://")
    }
    else if(message.includes("what is time")||message.includes("time batao")){
        let  time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("what is date")||message.includes("date batao")){
        let  date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        speak(`this is what i  found on internet regarding ${message.replace("nova","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("nova","")}`)
    }

    

    

 }

