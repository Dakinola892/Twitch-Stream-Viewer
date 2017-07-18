var streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "comster404",
  "RobotCaleb",
  "noobs2ninjas",
  "gassymexican",
  "riotgames",
  "brunofin"
];

//initial page population, default #all tab active
$("#all").addClass("active show");
streamers.forEach(function(channel) {
  $.getJSON(
    "https://wind-bow.glitch.me/twitch-api/streams/" + channel + "?callback=?",
    function(data) {
      var logo;
      var streamLink;
      var status;
      var icon;
      var game;

      if (data.stream === null) {
        status = "Offline";
        icon = "fa-times";
        game = "";

        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/channels/" +
            channel +
            "?callback=?",
          function(channelData) {
            if (channelData.status == 404) {
              $("#all").append(
                '<div class="channel"><img src="https://au.junkfreejune.org/themes/base/production/images/default-profile.png" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="https://www.twitch.tv/' +
                  channel +
                  '" target="_blank">Doesn\'t Exist </a> <i class="fa fa-exclamation" aria-hidden="true"></i></ul></div>'
              );
            } else {
              $("#all").append(
                '<div class="channel"><img src="' +
                  channelData.logo +
                  '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
                  channelData.url +
                  '" target="_blank">Offline </a> <i class="fa fa-times" aria-hidden="true"></i></ul></div>'
              );
            }
          }
        );
      } else {
        status = "Online";
        icon = "fa-check";
        game = "<li>Game: " + data.stream.game + "</li>";
        logo = data.stream.channel.logo;
        streamLink = data.stream.channel.url;

        $("#all").append(
          '<div class="channel"><img src="' +
            data.stream.channel.logo +
            '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
            channel +
            '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
            data.stream.channel.url +
            '" target="_blank">' +
            "Online" +
            '</a> <i class="fa fa-check"aria-hidden="true"></i>' +
            "<li>Game: " +
            data.stream.game +
            "</li>" +
            "</ul></div>"
        );
      }
    }
  );
});

//onclick #offline tab, populate with only offline or inactive streams
$("[href='#offline']").click(function() {
  $("#offline").html("");  
  streamers.forEach(function(channel) {
  $.getJSON(
    "https://wind-bow.glitch.me/twitch-api/streams/" + channel + "?callback=?",
    function(data) {
      var logo;
      var streamLink;
      var status;
      var icon;
      var game;

      if (data.stream === null) {
        status = "Offline";
        icon = "fa-times";
        game = "";

        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/channels/" +
            channel +
            "?callback=?",
          function(channelData) {
            if (channelData.status == 404) {
              $("#offline").append(
                '<div class="channel"><img src="https://au.junkfreejune.org/themes/base/production/images/default-profile.png" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="https://www.twitch.tv/' +
                  channel +
                  '" target="_blank">Doesn\'t Exist </a> <i class="fa fa-exclamation" aria-hidden="true"></i></ul></div>'
              );
            } else {
              $("#offline").append(
                '<div class="channel"><img src="' +
                  channelData.logo +
                  '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
                  channelData.url +
                  '" target="_blank">Offline </a> <i class="fa fa-times" aria-hidden="true"></i></ul></div>'
              );
            }
          }
        );
      }
    }
  );
});
});

//onclick #all tab, default page population
$("[href='#all']").click(function() {
  $("#all").html("");
  streamers.forEach(function(channel) {
  $.getJSON(
    "https://wind-bow.glitch.me/twitch-api/streams/" + channel + "?callback=?",
    function(data) {
      var logo;
      var streamLink;
      var status;
      var icon;
      var game;

      if (data.stream === null) {
        status = "Offline";
        icon = "fa-times";
        game = "";

        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/channels/" +
            channel +
            "?callback=?",
          function(channelData) {
            if (channelData.status == 404) {
              $("#all").append(
                '<div class="channel"><img src="https://au.junkfreejune.org/themes/base/production/images/default-profile.png" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="https://www.twitch.tv/' +
                  channel +
                  '" target="_blank">Doesn\'t Exist </a> <i class="fa fa-exclamation" aria-hidden="true"></i></ul></div>'
              );
            } else {
              $("#all").append(
                '<div class="channel"><img src="' +
                  channelData.logo +
                  '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
                  channel +
                  '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
                  channelData.url +
                  '" target="_blank">Offline </a> <i class="fa fa-times" aria-hidden="true"></i></ul></div>'
              );
            }
          }
        );
      } else {
        status = "Online";
        icon = "fa-check";
        game = "<li>Game: " + data.stream.game + "</li>";
        logo = data.stream.channel.logo;
        streamLink = data.stream.channel.url;

        $("#all").append(
          '<div class="channel"><img src="' +
            data.stream.channel.logo +
            '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
            channel +
            '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
            data.stream.channel.url +
            '" target="_blank">' +
            "Online" +
            '</a> <i class="fa fa-check"aria-hidden="true"></i>' +
            "<li>Game: " +
            data.stream.game +
            "</li>" +
            "</ul></div>"
        );
      }
    }
  );
});
})

//onclick #online tab, populate with only online streams
$("[href='#online']").click(function() {
  $("#online").html("");  
  streamers.forEach(function(channel) {
  $.getJSON(
    "https://wind-bow.glitch.me/twitch-api/streams/" + channel + "?callback=?",
    function(data) {
      var logo;
      var streamLink;
      var status;
      var icon;
      var game;

      if (data.stream !== null) {
        status = "Online";
        icon = "fa-check";
        game = "<li>Game: " + data.stream.game + "</li>";
        logo = data.stream.channel.logo;
        streamLink = data.stream.channel.url;

        $("#online").append(
          '<div class="channel"><img src="' +
            data.stream.channel.logo +
            '" alt=""><div class="headerDivider"></div><p class="channel-name">' +
            channel +
            '</p><div class="headerDivider"></div><ul class="streaming-info"><li><a class="stream-link" href="' +
            data.stream.channel.url +
            '" target="_blank">' +
            "Online" +
            '</a> <i class="fa fa-check"aria-hidden="true"></i>' +
            "<li>Game: " +
            data.stream.game +
            "</li>" +
            "</ul></div>"
        );
      }
    }
  );
});
});

