const showMenu = ()=>{

    const statusMenu = document.getElementById('card_menu');
    const btnCloseMenu = document.getElementById('close_menu');
    const statusShowMenu = document.getElementById('show_menu');
    
    if(statusMenu.style.display === 'none'|| statusMenu.style.display ===''){
        
        statusMenu.style.display = 'block';
        btnCloseMenu.style.display = 'block';
        statusShowMenu.style.display = 'none';
    }else{
            statusMenu.style.display = 'none';
        btnCloseMenu.style.display = 'none';
            statusShowMenu.style.display = 'block';
        }    
    
};