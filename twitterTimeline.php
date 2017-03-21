<?php

require_once('TwitterAPIExchange.php');


$settings = array(
    'oauth_access_token' => "18306935-rhWgzYdLbvQURAhs4k98JpVM5uO0noBAIKe6zOE8s",
    'oauth_access_token_secret' => "82HAdrmz6Uqt40gkGDdJUozjNEVLBCJr8xkOZ7k46QE",
    'consumer_key' => "SB6cDZ1d5wUrsvOlXry2vQ",
    'consumer_secret' => "iszoK7lO8DE1OTOPgmy1k2VrK09B0OWIseeCuWsf3w"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
//$url = 'http://api.twitter.com/1.1/cesarboucas/lists/informativo/statuses.json';

$twitter = new TwitterAPIExchange($settings);

// pega os parametros da url
$user = $_GET["twitter"];
$count = $_GET["count"];

$since_id = $_GET["since_id"];

if($user != ""){

	if ($since_id != "0"){
		echo $twitter->setGetfield('?screen_name=' . $user . '&count=' . $count . '&trim_user=1' . '&since_id=' . since_id)
             ->buildOauth($url, 'GET')
             ->performRequest();
	}
	else{
		echo $twitter->setGetfield('?screen_name=' . $user . '&count=' . $count . '&trim_user=1')
             ->buildOauth($url, 'GET')
             ->performRequest();
	}
 }
?>
