var Post = hexo.database.model('Post');

hexo.extend.tag.register('monthly_post_list', function(args) {
  var dateStr = args[0];
  var tag = args[1] || null;
  var startDate, endDate;

  if(dateStr.length <= 2) {
    startDate = new Date();
    startDate.setMonth( parseInt(dateStr, 10)-1, 1);
    startDate.setHours(0, 0, 0);
  } else if(dateStr.length == 6) {
    startDate = (new Date(dateStr.substr(0, 4), parseInt(dateStr.substr(4, 2))-1) );
    startDate.setDate(1);
  } else {
    startDate = (new Date()).setDate(1);
  }
  endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth()+1, 0);
  endDate.setHours(23, 59, 59)

  p = Post.find({$and : [
    {date : { $gte : startDate}},
    {date : { $lte : endDate}}
  ]}).sort("date");

  var lists = "";
  p.forEach(function(post) {
    if(!tag || (tag && post.tags.find({name: tag}).length > 0 )) {
      lists += '<li><a href="/' + post.path + '">' + post.title + " [" + post.date.format("MM/DD") +']</a></li>'
    }
  })

  return '<ul>' + lists + '</ul>';
});
