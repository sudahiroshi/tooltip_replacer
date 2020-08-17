window.addEventListener('load', () => {
    let target = document.querySelectorAll('.okikae');
    for( let tg of target) execute( tg );
});


function execute( element ) {
    let splited = element.innerText.split('｜');
    console.log(splited);
    for( let num in splited ){
        let matched = splited[num].match(/(?<tt>.*)／(?<desc>.*)/);
        console.log(matched);
        if( matched ){
            let replace = matched.groups;
            splited[num]='<span class="tt"><p>'+replace['tt']+'</p><div class="desc">'+replace['desc']+'</div></span>';
        }
    }
    let linked = splited.join('');
    element.innerHTML = linked;
    console.log(linked);
}
