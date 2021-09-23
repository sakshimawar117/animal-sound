function keypress(event){
    console.log(event.key)
    if(event.key == 't'){
        let audio_cat = document.getElementById("cat")
        audio_cat.play()
    }
    else if(event.key == 'g'){
        let audio_dog = document.getElementById("dog")
        audio_dog.play()
    }
    else if(event.key=='h'){
        let audio_elephant=document.getElementById("elephant")
        audio_elephant.play()
    }
    else if(event.key=='n')
    {
        let audio_lion=document.getElementById("lion")
        audio_lion.play()
    }
    else if(event.key=='r')
    {
        let audio_bird=document.getElementById("bird")
        audio_bird.play()
    }
    else if(event.key=='k')
    {
        let audio_peacock=document.getElementById("peacock")
        audio_peacock.play()
    }
}