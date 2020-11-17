var url = 'https://siftrss.com/f/pZdPrAbb8Y'
const textarea = document.querySelector('#feed-textarea > ul');
  feednami.loadGoogleFormat(url,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
        
        var entries = result.feed.entries
        for(var i = 0; i < entries.length; i++){
          textarea.value = ''
          var entry = entries[i]
          let li = document.createElement('li');
          li.innerHTML = `<h4> <a href="${entry.link}">${entry.title}</a></h4> <h5><i>" ${entry.contentSnippet}...."</h5>`
          textarea.appendChild(li);
        console.log(entry.title)
        console.log(entry.contentSnippet) 
        // the first 120 characters of the entry
      }
    }
  })
