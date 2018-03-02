// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f9bbfaf7c602444ab359c839a798d311"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
// what happens if it gets data back
  console.log(result);
  console.log(JSON.stringify(result.status));
  console.log(JSON.stringify(result.copyright));
  console.log(JSON.stringify(result.last_updated));
  console.log(JSON.stringify(result.num_results));

  $('#copyright').text(result.copyright);

  console.log(JSON.stringify(result.results[0].title));

   $('#maintitle').text(result.results[0].title);
   $('#mainauthor').text(result.results[0].byline);
   $('#maindate').text(result.results[0].created_date);

   $('#wrapper').empty();

   for(i=0; i<result.results.length; i++)
   {
   	   //for each item in results do something while the loop variable is less than the length of the results array
	   console.log(JSON.stringify(result.results[i].byline))

	  // $('#wrapper').append('
	  //  <div class="article"> \
       //   <a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a> \
      //    <h2>Main Story Headline</h2> \
       //   <p class="author">Author of Article</p> \
       //   <p class="date">Date</p> \
       // </div> \
		//')

		$('#wrapper').append(template);
		var template = '<div class="article">';
		template += '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>';
		template += '<h2>'+ result.results[i].title + '</h2>';
		template += '<p class="author">' + result.results[i].author +'</p>';
		template += '<p class="date">'+ result.results[i].date +'</p>';
		template += '</div>';


	  
   }

  // the end of what happens if we get data back
}).fail(function(err) {
  throw err;
});
