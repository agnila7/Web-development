backend for our application using the sevice called supabase for storing the data for our web app.

supabase: a service creates easily a complete database. Usually all do it with node.js and php for the backend application connected to a database. Too complicated for us r8 now. supabase will do it automatically and create an API.
API: receives request for data, accepts the request and sends the data as json.
json: data format.

we are creating schema in our table. schema: bluprint of the table. there are 2 created coloumn
1.primary key is id. no duplicate in the id 2. ADD: time and date at which new information is created
now we create new coloumn, text for the information to recommend and another coloumn is the source to add their linkedIn id.
third coloumn is category and fourth one is for voting buttons

if we can access the api created by supabase. we can access the data. it can also be done with node.js(request and accept the data). Node.js: using js on the server, but we are keeping it simple in here.

now after creating the table, go to API, select information (table name). now, you can see js documentation that u can do in js sdk.
Now click on bash. then change anon(public) from hide in the project api key. copy the api key of voting button and. Here, he first line of the copied api key is the url of of your database without ?select=id. second line is the api key

open a terminal in vs code. write dir to see what files u have in that folder. Then paste the edited project api key (means what u copied earlier, delete the ?select=id from first line/ the url of ur database )

but you also need to edit role level security policies in order to access the data frm everywhere.

select authentication from the supabase. select policies. create new policy. get started quickly. eanble read access to everyone. review, true and save policy. eanble insert access to everyone. review, true and save policy. and eanble update access to everyone. review, true and save policy.
