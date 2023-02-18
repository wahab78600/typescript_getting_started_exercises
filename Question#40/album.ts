
let album = {
    artitstname: "",
    albumtitle : "",
    numberoftracks : 0
  }
  
  
  function makeAlbum(names:string,title:string,noOfTrack?:number):typeof album{
  
      album.artitstname = names
      album.albumtitle = title
      if(typeof noOfTrack !== 'undefined')
      album.numberoftracks=noOfTrack
      return album
  
  }
  
  
  let album1 = makeAlbum("Darshan Raval","Sad",3)
  
  console.log("Album Title : %s \nArtist Name : %s \nNo of Tracks : %d",album1.albumtitle,album1.artitstname,album1.numberoftracks)