let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
   
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
      let day=new Date();
      let hours = day.getHours();
      if (hours>=0 && hours<12){
        speak("good morning roushan")
      }else if(hours>=12 && hours<16){
        speak("good afternoon roushan ");
      }else{
        speak("good evening raushan");
      }
}
//window.addEventListener('load',()=>{
 //wishme()
//})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript;
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){

    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello naira")){
        wishme()
        speak("how are you, what can i help you")
    }else if(message.includes("naira who are you")||message.includes("tum kaun ho")||message.includes("who are you")||message.includes("hu r u"))
        {
      speak("my name is nyra, and ,i am a virtual ,assistant , created by, raushan ,rawat,sir.. ")

    }else if(message.includes("nyra who is your boyfriend")||message.includes("naira who is your best friend")||message.includes("boyfriend")||message.includes("who is your best friend")|| message.includes("nairara best friend"))
      {
    speak(" First of all i am a big fan of Raushan sir, aur baat rahi friend banane ki,mai kisi ko apna friend yaa ,best friend nahi banati hun , but kyuki mai roshan sir ki bohot badi fan hun ,unhi ne mujhe banaya hai and, i will forever be ,grateful to him for that")
    
  }
    else if(message.includes("naira open youtube")||message.includes("youtube"))
        {
            speak("opening ,youtube")  

        window.open("https://www.youtube.com")

    }else if(message.includes("naira open google"))
        {
        speak("opening ,google")    
        window.open("https://www.google.com")
    }else if(message.includes("naira tell me about yourself") || message.includes("about yourself")){
       
      speak("i am nyra ,i am a virtual and ,personal assistant of, raushan , created by raushan rawat sir..")
    }
     else if(message.includes("nyra open calculator")||message.includes("open calculator"))
    {
    speak("opening ,calculator..")    
    window.open("calculator://")
    }else{
        speak(`this is what i found on internate regarding${message.replace("nyra")}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}