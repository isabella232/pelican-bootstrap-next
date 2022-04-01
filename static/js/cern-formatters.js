function formatJcopPlatforms(value, row, index){
   if(Array.isArray(row.platforms)){
      return row.platforms.join()
   }else{
      return "<span class='label label-tag label-tag4'>All</span>"
   }
}