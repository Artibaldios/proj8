var drop;
    function initiate(){
        drop = document.getElementById('dropbox');
        drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
        drop.addEventListener('dragover', function(e){ e.preventDefault(); });
        drop.addEventListener('drop', dropped);
    }
    function dropped(e){
        e.preventDefault();
        let files = e.dataTransfer.files;
        console.log(files)
        let list = '';
        for(let i = 0; i < files.length; i++){
            //let img = ` <img src="images/${files[i].name}" >`
            list += `<div class="box"> <img src="images/${files[i].name}" height="250px">
            <p>Вы загрузили файл:${files[i].name} . Размер: ${files[i].size}байт</p>
            </div>`
            }
            drop.innerHTML = list;
        }
addEventListener('load', initiate);