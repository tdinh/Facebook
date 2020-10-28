    var like_buttons = document.querySelectorAll('[aria-label="Like"]');
    count = 0;
    for(i=0;i<like_buttons.length;i++){
        like_buttons[i].click();
        count++;
    }
    console.log('Total Posts Liked : ' + count);