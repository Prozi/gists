input=$(node -p "encodeURIComponent('${*//\'/\\\'}')")
google-chrome --start-fullscreen --chrome-frame --app="https://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&pws=0&q=$input"
